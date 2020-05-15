import React from 'react';
import {VideoItemWrapper} from "./styles";
import theDate from "../../utils/date";
import viewsConverter from "../../utils/viewsConverter";
import durationConverter from "../../utils/durationConverter";
import cleanQuotes from "../../utils/cleanQuotes";
import menuIcon from '../../assets/images/dots.svg';

const VideoItem = ({item, duration, views, onClickHandler, index}) => {
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
        const clickId = (typeof index !== "undefined" ? index : id);
        onClickHandler(clickId);
    };
    return (
        <VideoItemWrapper>
            <div className="VideoItemWrapper_figure" onClick={(e) => clickHandler(e, id)}>
                <figure>
                    <img src={url} alt="alt"/>
                    <figcaption>
                        {durationConverter(duration)}
                    </figcaption>
                </figure>
            </div>
            <div className="VideoItemWrapper_body">
                <div className="VideoItemWrapper_details" onClick={(e) => clickHandler(e, id)}>
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
                <div className="VideoItemWrapper_menu">
                    <img src={menuIcon} alt="Action menu" />
                </div>

            </div>
        </VideoItemWrapper>
    );
};

export default VideoItem;