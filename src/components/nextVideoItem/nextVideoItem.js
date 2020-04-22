import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";

const NextVideoItem = ({video, onClickHandler}) => {
    // const {id: id.videoId, title, img, channel, date, duration, views} = nextVideo[0];
    return (
        <NextVideoItemWrapper >
            <div className="NextVideo_header">
                <div className="NextVideo_item">
                    Next video
                </div>
                <div className="NextVideo_item">
                    Autoplay
                </div>
            </div>
            <div className="NextVideo_body">
                 <VideoItem
                     id={video[0].id.videoId}
                      title={video[0].snippet.title}
                      img={video[0].snippet.thumbnails.medium.url}
                      channel={video[0].snippet.channelId}
                      date={video[0].snippet.publishedAt}
                      onClickHandler={onClickHandler}
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;