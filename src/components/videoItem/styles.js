import styled from "styled-components";

export const VideoItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    cursor: pointer;
    .VideoItemWrapper_figure{
        
        figure{
            margin: 0;
            position: relative;
            figcaption{
                padding: 2px 5px;
                position: absolute;
                bottom: 7px;
                right: 4px;
                background-color: #000000;
                border-radius: 3px;
                font-size: 0.8rem;
                color: white;
                font-weight: bold;
            }
        }
        img{
            width: 100%;
        }
    }
    .VideoItemWrapper_title{
        font-weight: bold;
    }
    .VideoItemWrapper_description{
        color: rgba(0,0,0, 0.7);
    }
    .VideoItemWrapper_details{
        margin-bottom: 0.5rem;
    }
    .VideoItemWrapper_item{
        display: inline-block;
        font-size: 0.8rem;
        &:not(:last-child){
          &:after{
            content: "•";
            margin: 0 4px;
          }
        }
    }
`;