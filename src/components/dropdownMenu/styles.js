import styled from "styled-components";

export const DropdownMenuWrapper = styled.div`
    display: flex;
    .DropdownMenuWrapper_icon{
        &:not(last-child){
            margin-right: 10px;
        }
        img{
            width: 12px;
        }
    }
`;