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
`;