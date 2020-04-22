import React from 'react';
import {VideoItemWrapper} from "./styles";

const VideoItem = ({id, title, img, channel, date, duration, views, onClickHandler}) => {
    const viewsConverter = (viewsCount) => {
        // Nine Zeroes for Billions
        return Math.abs(Number(viewsCount)) >= 1.0e+9
            ? (Math.abs(Number(viewsCount)) / 1.0e+9).toFixed(1) + "B"
            // Six Zeroes for Millions
            : Math.abs(Number(viewsCount)) >= 1.0e+6
                ? (Math.abs(Number(viewsCount)) / 1.0e+6).toFixed(1) + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(viewsCount)) >= 1.0e+3
                    ? (Math.abs(Number(viewsCount)) / 1.0e+3).toFixed(1) + "K"
                    : Math.abs(Number(viewsCount));
    };
    const durationConverter = (time) => {
        if (time) {
            var a = time.match(/\d+/g);
            if (time.indexOf('M') >= 0 && time.indexOf('H') == -1 && time.indexOf('S') == -1) {
                a = [0, a[0], 0];
            }
            if (time.indexOf('H') >= 0 && time.indexOf('M') == -1) {
                a = [a[0], 0, a[1]];
            }
            if (time.indexOf('H') >= 0 && time.indexOf('M') == -1 && time.indexOf('S') == -1) {
                a = [a[0], 0, 0];
            }
            return a.join(':');
        }
        return;
    };
    const clickHandler = (e, id) => {
        e.preventDefault();
        onClickHandler(id);
    };
    return (
        <VideoItemWrapper onClick={(e) => clickHandler(e, id)}>
            <div className="VideoItemWrapper_figure">
                <figure>
                    <img src={img} alt="alt"/>
                    <figcaption>
                        {durationConverter(duration)}
                    </figcaption>
                </figure>
            </div>
            <div className="VideoItemWrapper_body">
                <div className="VideoItemWrapper_details">
                    <div className="VideoItemWrapper_title">
                        {title}
                    </div>
                    <div className="VideoItemWrapper_subtitle">
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{channel}</span>
                        </div>
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{viewsConverter(views)}</span>
                        </div>
                        <div className="VideoItemWrapper_item">
                            <span className="text-medium">{date}</span>
                        </div>
                    </div>
                </div>

            </div>
        </VideoItemWrapper>
    );
};

export default VideoItem;