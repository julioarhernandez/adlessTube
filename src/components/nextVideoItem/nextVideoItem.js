import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";

const NextVideoItem = ({video, clickVideo, index, removeVideo}) => {
    return (
        <NextVideoItemWrapper >
            <div className="NextVideo_body">
                 <VideoItem
                     item={video}
                     onClickHandler={clickVideo}
                     index={index}
                     type="nextVideo"
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;