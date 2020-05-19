import React, {useContext} from 'react';
import {MenuContext} from "../app/App";
import {PlaylistItemWrapper} from "./styles";
import theDate from "../../utils/date";
import cleanQuotes from "../../utils/cleanQuotes";
import playlist from "../../assets/images/playlist.svg";
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import starIcon from "../../assets/images/star.svg";
import addIcon from "../../assets/images/add.svg";
import closeIcon from "../../assets/images/close.svg";

const PlaylistItem = ({item, onClickHandler, type}) => {
    const [addFavorite, removeVideo, addToList] = useContext(MenuContext);
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
    const listItems = [
        {
            icon: starIcon,
            text: 'Favorite',
            handler: (id) => {addFavorite(id)}
        }
    ];
    if (type === 'results'){
        listItems.push({
            icon: addIcon,
            text: 'Add to list',
            handler: (id) => {addToList(id)}
        })
    };
    if (type === 'nextVideo'){
        listItems.push({
            icon: closeIcon,
            text: 'Remove',
            handler: (id) => {removeVideo(id)}
        })
    };
    return (
        <PlaylistItemWrapper>
            <div className="PlaylistWrapper_figure" onClick={(e) => clickHandler(e, id, 'playlist')}>
                <figure>
                    <img src={url} alt="alt"/>
                    <figcaption>
                        <img src={playlist} alt="Playlists" className="PlaylistWrapper_icon"/>
                    </figcaption>
                </figure>
            </div>
            <div className="PlaylistWrapper_body">
                <div className="PlaylistWrapper_details" onClick={(e) => clickHandler(e, id, 'playlist')}>
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
                 <div className="PlaylistWrapper_menu">
                    <DropdownMenu list={listItems} id={item}/>
                </div>
            </div>

        </PlaylistItemWrapper>
    );
};

export default PlaylistItem;