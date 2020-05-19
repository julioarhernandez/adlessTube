import styled from "styled-components";

export const VideoItemListWrapper = styled.div`
    .VideoItemWrapper_body{
        &:not(:last-child){
          margin-bottom: 10px;
        }
    }
    .VideoItemWrapper_items{
        &:not(:last-child){
          margin-bottom: 1.1rem;
        }
    }
    .VideoItemWrapper_menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 25px;
        padding: 0 5px 5px;
        cursor: pointer;
    }
`;