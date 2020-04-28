import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";
import Toggle from "../commons/Toggle";

const NextVideoItem = ({video, clickVideo}) => {
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
                     item={video[0]}
                     onClickHandler={clickVideo}
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;