import React from "react";
import { VideoItemListWrapper } from "./styles";
import VideoItem from "../videoItem/videoItem";
import PlaylistItem from "../playlistItem/playlistItem";
import Button from "../commons/Button";

const VideoItemList = ({ items, statistics, onClickHandler, loadMore, token, loading}) => {
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

  const renderedItems = items.length > 0 && items.map((item, index) =>  {
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
        <div className="VideoItemWrapper_items" key={`${item.id.videoId || item.id.playlistId}-${index}`}>
            {itemType}
        </div>
    )});
  return <VideoItemListWrapper>
          <div className="VideoItemWrapper_body">
            {renderedItems}
          </div>
            {items.length > 0 &&
                <div className="VideoItemWrapper_footer">
                    <Button clickHandler={() => loadMore(token)} text="Load More" loading={loading}/>
                </div>
            }
      </VideoItemListWrapper>;
};

export default VideoItemList;
