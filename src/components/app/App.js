import React, {useEffect, useState, createContext} from 'react';
import ReactPlayer from 'react-player';
import { ToastContainer } from 'react-toastify';

import './App.css';
import {Body} from "./styles";

import {fetchVideoStatistics, fetchTermResults, fetchRelatedVideos, fetchRelatedVideosPaginated} from "../../api/youtube";
import Notify from "../Notify/Notify";
import Header from "../header/";
import VideoItemList from "../videoItemList/videoItemList";
import NextVideoItemList from "../nextVideoItemList/nextVideoItemList";

// Global autoplay context
export const AutoPlayContext = createContext([{}, () => {}]);

const App = () => {
    const [url, setUrl] = useState();
    const [baseVideoId, setBaseVideoId] = useState();
    const [loadMoreResultsSpinner, setLoadMoreResultsSpinner] = useState(false);
    const [loadMoreNextVideosSpinner, setLoadMoreNextVideosSpinner] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const [playingNextListIndex, setPlayingNextListIndex] = useState();
    const [currentVideoId, setCurrentVideoId] = useState();
    const [playingPL, setPlayingPL] = useState(false);
    const [filterPlaylist, setFilterPlaylist] = useState(true);
    const [nextVideo, setNextVideo] = useState({list: [], token: ''});
    const [result, setResult] = useState({term: '', list: [], token: ''});
    const [statistics, setStatistic] = useState();

    useEffect(() => {
        if (playingPL){
            setUrl(`https://www.youtube.com/playlist?list=${currentVideoId}`);
        }else if (currentVideoId) {
            // If we are on the last item of nextVideoList or
            // nextVideoList is empty we need to load more related videos to keep playing
            // Or the baseVideoId changed
            if (isNextVideoReadyToLoad()){
                getNextVideoPagination(baseVideoId, nextVideo.token);
            }
            setPlayingPL(false);
            setUrl(`https://www.youtube.com/watch?v=${currentVideoId}`);
        }
    }, [currentVideoId]);

    useEffect(() => {
        if (nextVideo.list.length > 0 && autoPlay && (typeof playingNextListIndex !== undefined)){
            console.log('useEffect playingNextListIndex',typeof playingNextListIndex);
            startPlaying(nextVideo.list[playingNextListIndex].id.videoId);
        }
    },[playingNextListIndex]);

    useEffect(() => {
        if (baseVideoId){
            getNextVideos(baseVideoId);
            setPlayingNextListIndex(undefined);
        }
    }, [baseVideoId]);

    useEffect(() => {
        const message = filterPlaylist ? 'Playlist included in search results' : 'Playlist are not included in search results';
        Notify(message, 'info');
    }, [filterPlaylist]);

    function isNextVideoReadyToLoad(){
        const nextVideoList = nextVideo.list;
        const nextVideoListLength = nextVideoList.length;
        const isPlayingLastItemOfNextVideoList = (nextVideoListLength - 1) === playingNextListIndex;
        return (!nextVideoListLength || isPlayingLastItemOfNextVideoList);
    }

    function startPlaying(id, type= 'video'){
        setPlayingPL(type === 'playlist');
        setCurrentVideoId(id);
    };

    function onClickHandler(id, type){
        startPlaying(id, type);
        setBaseVideoId(id);
    };

     function onClickHandlerNextVideoList(index){
        setPlayingNextListIndex(index);
    };

    function getVideos(items){
        const videoIds = items.map(item => item.id.videoId);
        return videoIds;
    };

    async function getVideoDuration(items){
        const videos = getVideos(items);
        (async () => {
            const response = await fetchVideoStatistics(videos.toString());
            if (response.data){
                setStatistic(response.data.items);
            }else{
                console.log(response.error);
            }
        })();
    };

    function searchForTerms(term){
        (async () => {
            const response = await fetchTermResults(term, filterPlaylist, '');
            if (response.data){
                setResult({term: term, list: [...response.data.items], token: response.data.nextPageToken});
                getVideoDuration(response.data.items);
            }else{
                console.log(response.error);
            }
        })();
    };

     function searchForTermsLoadMore(token){
         console.log('start loading more terms');
        setLoadMoreResultsSpinner(true);
        (async () => {
            const response = await fetchTermResults(result.term, filterPlaylist, token);
            if (response.data){
                // Give a little time to shutdown spinner
                setTimeout(()=>{
                    setLoadMoreResultsSpinner(false);
                    console.log('end loading more terms');
                }, 500);
                setResult({term: result.term, list: [...result.list, ...response.data.items], token: response.data.nextPageToken});
                getVideoDuration(response.data.items);
            }else{
                console.log(response.error);
                setLoadMoreResultsSpinner(false);
            }
        })();
    };

     function getNextVideos (videoId){
       (async () => {
            const response = await fetchRelatedVideos(videoId);
            if (response.data){
                setNextVideo({list: [...response.data.items], token: response.data.nextPageToken});
            }else{
                console.log(response.error);
            }
            // getVideoDuration(items);
        })();
    };

    function getNextVideoPagination (videoId, token){
        setLoadMoreNextVideosSpinner(true);
        console.log('start loading morevideos');
       (async () => {
            const response = await fetchRelatedVideosPaginated(videoId, token);
            if (response.data){
                // Give a little time to shutdown spinner
                setTimeout(()=>{
                    setLoadMoreNextVideosSpinner(false);
                    console.log('end loading morevideos');
                }, 500);
                setNextVideo({list: [...nextVideo.list, ...response.data.items], token: response.data.nextPageToken});
            }else{
                console.log(response.error);
                setLoadMoreNextVideosSpinner(false);
            }
            // getVideoDuration(items);
        })();
    };

    function loadMore (token) {
        return getNextVideoPagination(baseVideoId, token);
    };

    function endedVideo(){
        const isAutoplay = () => autoPlay;
        if (isAutoplay()){
        setPlayingNextListIndex((playingNextListIndex) => {
            return (typeof playingNextListIndex !== 'undefined' ? playingNextListIndex + 1: 0)
        });
        }
    };

    return <>
        <Header submitHandler={searchForTerms} filterPlaylist={filterPlaylist} setFilterPlaylist={setFilterPlaylist}/>
        <Body>
            <div className="Body_player">
                <div className="Body_wrapper">
                    <ReactPlayer
                        url={url}
                        width='100%'
                        height='100%'
                        controls
                        playing
                        onEnded={endedVideo}
                    />
                </div>
            </div>
            <div className="Body_aside">
                {nextVideo.list && nextVideo.list.length > 0 &&
                <>
                    <div className="Aside_top">
                        <AutoPlayContext.Provider value={[autoPlay, setAutoPlay]}>
                            <NextVideoItemList
                                nextVideos={nextVideo.list}
                                clickVideo={onClickHandlerNextVideoList}
                                loadMore={loadMore}
                                token={nextVideo.token}
                                selectedIndex={playingNextListIndex}
                                loading={loadMoreNextVideosSpinner}
                            />
                        </AutoPlayContext.Provider>
                    </div>
                    <hr/>
                </>
                }
                <div className="Aside_bottom">
                    <VideoItemList
                        items={result.list}
                        statistics={statistics}
                        onClickHandler={onClickHandler}
                        loadMore={searchForTermsLoadMore}
                        token={result.token}
                        loading={loadMoreResultsSpinner}/>
                </div>
            </div>
        </Body>
       <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={3}
        />
    </>;
}

export default App;