import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";

const NextVideoItem = ({video, clickVideo}) => {
    return (
        <NextVideoItemWrapper >
            <div className="NextVideo_body">
                 <VideoItem
                     item={video}
                     onClickHandler={clickVideo}
                    />
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;