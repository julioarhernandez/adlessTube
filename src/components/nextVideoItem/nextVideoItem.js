import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";
import Toggle from "../commons/Toggle";

const NextVideoItem = ({video, clickVideo}) => {
    const {
            id: {videoId: id},
            snippet: {title},
            snippet: { thumbnails: { medium: {url}}},
            snippet: {channelTitle: channel},
            snippet: {publishedAt: date}
    } = video[0];
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
                     id={id}
                      title={title}
                      img={url}
                      channel={channel}
                      date={date}
                      onClickHandler={clickVideo}
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;