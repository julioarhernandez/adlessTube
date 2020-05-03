import React from 'react';
import {VideoItemWrapper} from "./styles";
import theDate from "../../utils/date";
import viewsConverter from "../../utils/viewsConverter";
import durationConverter from "../../utils/durationConverter";
import cleanQuotes from "../../utils/cleanQuotes";

const VideoItem = ({item, duration, views, onClickHandler}) => {
    const {
            id: {videoId: id},
            snippet: {title},
            snippet: { thumbnails: { medium: {url}}},
            snippet: {channelTitle: channel},
            snippet: {publishedAt: date}
    } = item;
    const convertDate = (date) => {
          const convertDate = new theDate(date);
          return convertDate.timeAgo();
    }
    const clickHandler = (e, id) => {
        e.preventDefault();
        onClickHandler(id);
    };
    return (
        <VideoItemWrapper onClick={(e) => clickHandler(e, id)}>
            <div className="VideoItemWrapper_figure">
                <figure>
                    <img src={url} alt="alt"/>
                    <figcaption>
                        {durationConverter(duration)}
                    </figcaption>
                </figure>
            </div>
            <div className="VideoItemWrapper_body">
                <div className="VideoItemWrapper_details">
                    <div className="VideoItemWrapper_title">
                        {cleanQuotes(title)}
                    </div>
                    <div className="VideoItemWrapper_subtitle">
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{channel}</span>
                        </div>
                        {views &&
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{viewsConverter(views)}</span>
                        </div>
                        }
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{convertDate(date)} ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </VideoItemWrapper>
    );
};

export default VideoItem;