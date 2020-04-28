import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';

import './App.css';
import {Body} from "./styles";

import youtube, {defaultParams, durationParams, relatedVideoParams} from "../../api/youtube";
import Header from "../header/";
import VideoItemList from "../videoItemList/videoItemList";
import NextVideoItem from "../nextVideoItem/nextVideoItem";

const App = () => {

    const [url, setUrl] = useState();
    const [ended, setEnded] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState();
    const [nextVideo, setNextVideo] = useState();
    const [result, setResult] = useState();
    const [statistics, setStatistic] = useState();
    const [readyState, setReadyState] = useState('notReady');

    const removeMessage = () => {
        setReadyState('');
    };

    useEffect(() => {
        if (currentVideoId) {
            getNextVideo(currentVideoId);
            setUrl(`https://www.youtube.com/watch?v=${currentVideoId}`);
        }
    }, [currentVideoId]);

    useEffect(() => {
        if (nextVideo){
            startPlaying(nextVideo[0].id.videoId);
        }
    },[ended]);

    function startPlaying(id){
        setCurrentVideoId(id);
        setEnded(false);
    };

    function onClickHandler(id){
        startPlaying(id);
    };

    function getVideos(items){
        const videoIds = items.map(item => item.id.videoId);
        return videoIds;
    };

    async function getVideoDuration(items){
        const videos = getVideos(items);
        try {
            const response = await youtube.get('/videos', {
                params: {
                    ...durationParams,
                    id: videos.toString()
                }
            });
            setStatistic(response.data.items);
        } catch (error) {
            alert(error);
        }
        ;
    };

    async function searchForTerms(term){
        try {
            const response = await youtube.get('/search', {
                params: {
                    ...defaultParams,
                    type: 'video,playlist',
                    q: term
                }
            });
            // console.log('search from terms results from api');
            setResult(response.data.items);
            // console.log(response.data.items);
            // TO-DO: put this into an effect
            getVideoDuration(response.data.items);
        } catch (error) {
            alert(error);
        }
        ;
    };

   async function getNextVideo (currentVideo){
       console.log('getNextVideo');
        try {
            const response = await youtube.get('/search', {
                params: {
                    ...relatedVideoParams,
                    relatedToVideoId: currentVideo
                }
            });

            // console.log('get next video api result');
            // console.log(response.data.items);
            setNextVideo(response.data.items);
            // getVideoDuration(response.data.items);
        } catch (error) {
            alert(error);
        }
        ;
    };

    function endedVideo(){
      setEnded(true);
    };

    return <>
        <Header submitHandler={searchForTerms}/>
        <Body readyState={readyState}>
            <div className="Body_player">
                <div className="Body_wrapper">
                    <ReactPlayer
                        url={url}
                        width='100%'
                        height='80vh'
                        onReady={removeMessage}
                        controls
                        playing
                        onEnded={endedVideo}
                    />
                </div>
            </div>
            <div className="Body_aside">
                {nextVideo &&
                <>
                    <div className="Aside_top">
                        <NextVideoItem video={nextVideo} clickVideo={onClickHandler}/>
                    </div>
                    <hr/>
                </>
                }
                <div className="Aside_bottom">
                    <VideoItemList items={result} statistics={statistics} onClickHandler={onClickHandler}/>
                </div>
            </div>
        </Body>
    </>;
}

export default App;