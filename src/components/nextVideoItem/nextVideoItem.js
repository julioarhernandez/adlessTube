import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";
import Toggle from "../commons/Toggle";

const NextVideoItem = ({video, clickVideo}) => {
    // const {id: id.videoId, title, img, channel, date, duration, views} = nextVideo[0];
    return (
        <NextVideoItemWrapper >
            <div className="NextVideo_header">
                <div className="NextVideo_item">
                    <strong>Next video</strong>
                </div>
                <div className="NextVideo_item">
                    <Toggle label="Autoplay"/>
                </div>
            </div>
            <div className="NextVideo_body">
                 <VideoItem
                     id={video[0].id.videoId}
                      title={video[0].snippet.title}
                      img={video[0].snippet.thumbnails.medium.url}
                      channel={video[0].snippet.channelTitle}
                      date={video[0].snippet.publishedAt}
                      onClickHandler={clickVideo}
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;