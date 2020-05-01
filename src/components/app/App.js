import React, {useEffect, useState, createContext} from 'react';
import ReactPlayer from 'react-player';

import './App.css';
import {Body} from "./styles";

import {fetchVideoStatistics, fetchTermResults, fetchRelatedVideos} from "../../api/youtube";
import Header from "../header/";
import VideoItemList from "../videoItemList/videoItemList";
import NextVideoItem from "../nextVideoItem/nextVideoItem";

// Global autoplay context
export const AutoPlayContext = createContext([{}, () => {}]);

const App = () => {

    const [url, setUrl] = useState();
    const [ended, setEnded] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState();
    const [nextVideo, setNextVideo] = useState();
    const [result, setResult] = useState();
    const [statistics, setStatistic] = useState();

    useEffect(() => {
        if (currentVideoId) {
            getNextVideo(currentVideoId);
            setUrl(`https://www.youtube.com/watch?v=${currentVideoId}`);
        }
    }, [currentVideoId]);

    useEffect(() => {
        if (nextVideo && autoPlay){
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
        (async () => {
            const {items} = await fetchVideoStatistics(videos.toString());
            setStatistic(items);
        })();
    };

    function searchForTerms(term){
        (async () => {
            const {items} = await fetchTermResults(term);
            setResult(items);
            getVideoDuration(items);
        })();
    };

    function getNextVideo (currentVideo){
        (async () => {
            const {items} = await fetchRelatedVideos(currentVideo);
            setNextVideo(items);
        })();
    }

    function endedVideo(){
        setEnded(true);
    };

    return <>
        <Header submitHandler={searchForTerms}/>
        <Body>
            <div className="Body_player">
                <div className="Body_wrapper">
                    <ReactPlayer
                        url={url}
                        width='100%'
                        height='80vh'
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
                        <AutoPlayContext.Provider value={[autoPlay, setAutoPlay]}>
                            <NextVideoItem video={nextVideo} clickVideo={onClickHandler}/>
                        </AutoPlayContext.Provider>
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