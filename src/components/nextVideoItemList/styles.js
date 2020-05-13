import styled from "styled-components";

export const NextVideoItemListWrapper = styled.div`
    margin-top: 1rem;
    .NextVideoList_header{
        display: flex;
        justify-content: space-between;   
        &:not(:last-child){
            margin-bottom: 1rem;
        }
    }
    .NextVideoList_body{
         overflow-y: scroll;
         max-height: 270px;
         scroll-snap-type: y mandatory;
         margin-bottom: 10px;
        .NexVideoItemList_item{
            scroll-snap-align: start;
            transition: background 0.3s, padding 0.3s;
            transition-timing-function: cubic-bezier(0, 0, 0.12, 0.99);
            &:not(:last-child){
                margin-bottom: 1rem;
            }
            &.selected{
                background-color: #e6e5e5;
                padding: 5px 5px 2px;
                border-radius: 4px;
                margin-right: 4px;
            }
        }
    }
`;