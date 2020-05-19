import React from 'react';
import {NextVideoItemWrapper} from "./styles";
import VideoItem from "../videoItem/videoItem";
import PlaylistItem from "../playlistItem/playlistItem";

const NextVideoItem = ({video, clickVideo, index, removeVideo}) => {
    return (
        <NextVideoItemWrapper >
            <div className="NextVideo_body">
                {typeof video.id.videoId !== 'undefined' &&
                     <VideoItem
                         item={video}
                         onClickHandler={clickVideo}
                         index={index}
                         type="nextVideo"
                    />
                }
                {typeof video.id.playlistId !== 'undefined' &&
                     <PlaylistItem
                          item={video}
                          onClickHandler={clickVideo}
                          type="nextVideo"
                      />
                }
            </div>
        </NextVideoItemWrapper>
    );
};

export default NextVideoItem;