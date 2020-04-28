import styled from "styled-components";

export const NextVideoItemWrapper = styled.div`
    .NextVideo_header{
        display: flex;
        justify-content: space-between;   
        &:not(:last-child){
            margin-bottom: 1rem;
        }
    }
`;