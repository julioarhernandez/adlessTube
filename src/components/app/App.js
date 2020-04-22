import React, {useState} from 'react';
import ReactPlayer from 'react-player';

import './App.css';
import {Body} from "./styles";

import youtube, {defaultParams, durationParams, relatedVideoParams} from "../../api/youtube";
import Header from "../header/";
import VideoItemList from "../videoItemList/videoItemList";
import NextVideoItem from "../nextVideoItem/nextVideoItem";

const App = () => {

    const [url, setUrl] = useState();
    const [nextVideo, setNextVideo] = useState();
    const [result, setResult] = useState();
    const [statistics, setStatistic] = useState();
    const [readyState, setReadyState] = useState('notReady');

    const removeMessage = () => {
        setReadyState('');
    };

    const onClickHandler = (id) => {
        setUrl(`https://www.youtube.com/watch?v=${id}`);
        getNextVideo(id);
    };

    const getVideos = (items) => {
        const videoIds = items.map(item => item.id.videoId);
        return videoIds;
    };

    const getVideoDuration = async (items) => {
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
        };
    };

    const getData = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    ...defaultParams,
                    type: 'video,playlist',
                    q: term
                }
            });
            setResult(response.data.items);
            // console.log(response.data.items);
            getVideoDuration(response.data.items);
        } catch (error) {
            alert(error);
        };
    };

   const getNextVideo = async (currentVideo) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    ...relatedVideoParams,
                    relatedToVideoId: currentVideo
                }
            });
            console.log('data returnig form api');
            console.log(response.data.items);
            setNextVideo(response.data.items);
            // getVideoDuration(response.data.items);
        } catch (error) {
            alert(error);
        };
    };

    return <>
        <Header submitHandler={getData}/>
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
                    />
                </div>
            </div>
            <div className="Body_aside">
                { nextVideo && nextVideo.lenght &&
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