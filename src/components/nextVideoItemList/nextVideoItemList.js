import React, {useContext} from 'react';
import classNames from 'classnames';
import {NextVideoItemListWrapper} from "./styles";
import {AutoPlayContext} from "../app/App";
import NextVideoItem from "../nextVideoItem/nextVideoItem";

import Toggle from "../commons/Toggle";
import Button from "../commons/Button";

const NextVideoItemList = ({nextVideos, onClickHandler, loadMore, token, selectedIndex}) => {
    const [autoPlay, setAutoplay] = useContext(AutoPlayContext);
    const nextVideoItems = nextVideos && nextVideos.map((el, index) => {
        return (
            <div className={classNames('NexVideoItemList_item', {selected: index === selectedIndex})} key={`nextVideoItemList_item-${index}`}>
                <NextVideoItem video={el} clickVideo={onClickHandler} />
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
            <div className="NextVideoList_footer"><Button clickHandler={() => loadMore(token)} text="Load More" /></div>
        </NextVideoItemListWrapper>
    );
};
export default NextVideoItemList;