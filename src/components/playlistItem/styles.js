import styled from "styled-components";

export const PlaylistItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    cursor: pointer;
    .PlaylistWrapper_figure{
        
        figure{
            margin: 0;
            position: relative;
            & > img{
                width: 100%;
            }
            figcaption{
                padding: 2px 5px;
                position: absolute;
                bottom: 4px;
                right: 0;
                top: 0;
                width: 41px;
                background-color: rgba(0, 0, 0, 0.78);
                color: white;
                display: flex;
                justify-content: center;
            }
        }
    }
    .PlaylistWrapper_icon{
        width: 25px;
        filter: invert(1);
    }
    .PlaylistWrapper_title{
        font-weight: bold;
    }
    .PlaylistWrapper_description{
        color: rgba(0,0,0, 0.7);
    }
    .PlaylistWrapper_details{
        margin-bottom: 0.5rem;
    }
    .PlaylistWrapper_item{
        display: inline-block;
        font-size: 0.8rem;
        &:not(:last-child){
          &:after{
            content: "•";
            margin: 0 4px;
          }
        }
    }
    .PlaylistWrapper_body{
        position: relative;
        padding-right: 30px;
    }
    .PlaylistWrapper_menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 25px;
        padding: 0 5px 5px;
        cursor: pointer;
    }
`;