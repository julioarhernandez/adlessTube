import React, {useContext} from 'react';
import {VideoItemWrapper} from "./styles";
import theDate from "../../utils/date";
import viewsConverter from "../../utils/viewsConverter";
import durationConverter from "../../utils/durationConverter";
import cleanQuotes from "../../utils/cleanQuotes";
import closeIcon from '../../assets/images/close.svg';
import starIcon from '../../assets/images/star.svg';
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import {MenuContext} from "../app/App";

const VideoItem = ({type, item, duration, views, onClickHandler, index}) => {
    const [addFavorite, removeVideo] = useContext(MenuContext);
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
    const listItems = [
        {
            icon: starIcon,
            text: 'Favorite',
            handler: (id) => {addFavorite(id)}
        }
    ];
    if (type === 'nextVideo'){
        listItems.push({
            icon: closeIcon,
            text: 'Remove',
            handler: (id) => {removeVideo(id)}
        })
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
                    <DropdownMenu list={listItems} id={id}/>
                </div>

            </div>
        </VideoItemWrapper>
    );
};

export default VideoItem;