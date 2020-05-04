import React from "react";
import { VideoItemListWrapper } from "./styles";
import VideoItem from "../videoItem/videoItem";
import PlaylistItem from "../playlistItem/playlistItem";

const VideoItemList = ({ items, statistics, onClickHandler }) => {
    const findVideoStatistics = (statisticArray, videoId) => {
        return statisticArray.find(elm => elm.id === videoId);
    };
    const getStatisticParam = (statistic, videoId) => {
        if (statistic && videoId){
            return findVideoStatistics(statistic, videoId);
        };
        return ;
    };
    const getDuration = (statistics, videoId) => {
          const statistic = getStatisticParam(statistics, videoId);
          if (statistic){
            return statistic['contentDetails']['duration'];
          }
    };
    const getViewsCount = (statistics, videoId) => {
          const statistic = getStatisticParam(statistics, videoId);
          if (statistic){
            return statistic['statistics']['viewCount'];
          }
    };

  const renderedItems = items && items.map((item) =>  {
      let itemType;
      if (item.id.videoId){
          itemType = <VideoItem
              item={item}
              duration={getDuration(statistics, item.id.videoId)}
              views={getViewsCount(statistics, item.id.videoId)}
              onClickHandler={onClickHandler}
          />
      }
      if (item.id.playlistId){
          itemType = <PlaylistItem
              item={item}
              onClickHandler={onClickHandler}
          />
      }
    return (
        <div className="VideoItemWrapper_items" key={item.id.videoId || item.id.playlistId}>
            {itemType}
        </div>
    )});
  return <VideoItemListWrapper>{renderedItems}</VideoItemListWrapper>;
};

export default VideoItemList;
