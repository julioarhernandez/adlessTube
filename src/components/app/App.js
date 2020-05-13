import React, {useEffect, useState, createContext} from 'react';
import ReactPlayer from 'react-player';

import './App.css';
import {Body} from "./styles";

import {fetchVideoStatistics, fetchTermResults, fetchRelatedVideos, fetchRelatedVideosPaginated} from "../../api/youtube";
import Header from "../header/";
import VideoItemList from "../videoItemList/videoItemList";
import NextVideoItemList from "../nextVideoItemList/nextVideoItemList";

// Global autoplay context
export const AutoPlayContext = createContext([{}, () => {}]);

const App = () => {

    const [url, setUrl] = useState();
    const [baseVideoId, setBaseVideoId] = useState();
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
            //If we are on the last item of nextVideoList or nextVideoList is empty we need to load more related videos to keep playing
            if (isNextVideoReadyToLoad()){
                getNextVideoPagination(baseVideoId, nextVideo.token);
            }
            setPlayingPL(false);
            setUrl(`https://www.youtube.com/watch?v=${currentVideoId}`);
        }
    }, [currentVideoId]);

    useEffect(() => {
        if (nextVideo.list.length > 0 && autoPlay){
            startPlaying(nextVideo.list[playingNextListIndex].id.videoId);
        }
    },[playingNextListIndex]);

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
        setBaseVideoId(id);
        startPlaying(id, type);
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
            const {items} = await fetchVideoStatistics(videos.toString());
            setStatistic(items);
        })();
    };

    function searchForTerms(term){
        (async () => {
            const response = await fetchTermResults(term, filterPlaylist);
            if (response){
                setResult({term: term, list: [...result.list, ...response.items], token: response.nextPageToken});
                getVideoDuration(response.items);
            }
        })();
    };

     function searchForTermsLoadMore(token){
        (async () => {
            const response = await fetchTermResults(result.term, token);
            if (response){
                setResult({term: result.term, list: [...result.list, ...response.items], token: response.nextPageToken});
                getVideoDuration(response.items);
            }
        })();
    };

    function getNextVideoPagination (videoId, token){
       (async () => {
            const {items,nextPageToken} = await fetchRelatedVideosPaginated(videoId, token);
            setNextVideo({list: [...nextVideo.list, ...items], token: nextPageToken});
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
                            <NextVideoItemList nextVideos={nextVideo.list} clickVideo={onClickHandlerNextVideoList} loadMore={loadMore} token={nextVideo.token} selectedIndex={playingNextListIndex}/>
                        </AutoPlayContext.Provider>
                    </div>
                    <hr/>
                </>
                }
                <div className="Aside_bottom">
                    <VideoItemList items={result.list} statistics={statistics} onClickHandler={onClickHandler} loadMore={searchForTermsLoadMore} token={result.token}/>
                </div>
            </div>
        </Body>
    </>;
}

export default App;