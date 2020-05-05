import React from 'react';
import {PlaylistItemWrapper} from "./styles";
import theDate from "../../utils/date";
import cleanQuotes from "../../utils/cleanQuotes";
import playlist from "../../assets/images/playlist.svg";

const PlaylistItem = ({item, onClickHandler}) => {
    const {
            id: {playlistId: id},
            snippet: {title},
            snippet: { thumbnails: { medium: {url}}},
            snippet: {channelTitle: channel},
            snippet: {publishedAt: date}
    } = item;
    const convertDate = (date) => {
          const convertDate = new theDate(date);
          return convertDate.timeAgo();
    }
    const clickHandler = (e, id, type) => {
        e.preventDefault();
        onClickHandler(id, type);
    };
    return (
        <PlaylistItemWrapper onClick={(e) => clickHandler(e, id, 'playlist')}>
            <div className="PlaylistWrapper_figure">
                <figure>
                    <img src={url} alt="alt"/>
                    <figcaption>
                        <img src={playlist} alt="Playlists" className="PlaylistWrapper_icon"/>
                    </figcaption>
                </figure>
            </div>
            <div className="PlaylistWrapper_body">
                <div className="PlaylistWrapper_details">
                    <div className="PlaylistWrapper_title">
                        {cleanQuotes(title)}
                    </div>
                    <div className="PlaylistWrapper_subtitle">
                        <div className="PlaylistWrapper_item">
                            <span className="text-medium">{channel}</span>
                        </div>
                        <div className="PlaylistWrapper_item">
                            <span className="text-medium">{convertDate(date)} ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </PlaylistItemWrapper>
    );
};

export default PlaylistItem;