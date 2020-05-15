import styled from "styled-components";

export const LinkListWrapper = styled.div`
    .LinkListWrapper_icon{
        &:not(last-child){
            margin-right: 10px;
        }
        img{
            width: 12px;
        }
        
    }
    li{
        display: flex;
        padding: 10px 15px;
        align-items: center;
        font-size: 14px;
       &:hover{
        background-color: #ececec;
       }
    }
`;