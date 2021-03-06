import React, {useContext} from 'react';
import classNames from 'classnames';
import {NextVideoItemListWrapper} from "./styles";
import {AutoPlayContext} from "../app/App";
import NextVideoItem from "../nextVideoItem/nextVideoItem";

import Toggle from "../commons/Toggle";
import Button from "../commons/Button";

const NextVideoItemList = ({
       nextVideos,
       clickVideo,
       loadMore,
       token,
       selectedIndex,
       loading,
       baseVideo}) => {
    const [autoPlay, setAutoplay] = useContext(AutoPlayContext);
    const nextVideoItems = nextVideos && nextVideos.map((el, index) => {
        return (
            <div className={classNames('NexVideoItemList_item', {selected: index === selectedIndex})} key={`nextVideoItemList_item-${index}`}>
                <NextVideoItem video={el} clickVideo={clickVideo} index={index}/>
            </div>
        );
    });
    return (
        <NextVideoItemListWrapper>
            <div className="NextVideoList_header">
                <div className="NextVideoList_item">
                    <strong>Next video</strong>
                </div>
                <div className="NextVideoList_item">
                    <Toggle label="Autoplay" stateVal={autoPlay} setStateVal={setAutoplay}/>
                </div>
            </div>
            <div className="NextVideoList_body">{nextVideoItems}</div>
            {baseVideo &&
            <div className="NextVideoList_footer">
                <Button clickHandler={() => loadMore(token)}
                        text="Load More"
                        loading={loading}/>
            </div>
            }
        </NextVideoItemListWrapper>
    );
};
export default NextVideoItemList;