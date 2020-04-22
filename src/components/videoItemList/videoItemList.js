import React from "react";
import { VideoItemListWrapper } from "./styles";
import VideoItem from "../videoItem/videoItem";

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
    return (
        <div className="VideoItemWrapper_items" key={item.id.videoId}>
          <VideoItem
              id={item.id.videoId}
              title={item.snippet.title}
              img={item.snippet.thumbnails.medium.url}
              channel={item.snippet.channelTitle}
              date={item.snippet.publishedAt}
              duration={getDuration(statistics, item.id.videoId)}
              views={getViewsCount(statistics, item.id.videoId)}
              onClickHandler={onClickHandler}
          />
        </div>
    )});
  return <VideoItemListWrapper>{renderedItems}</VideoItemListWrapper>;
};

export default VideoItemList;
