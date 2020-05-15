import styled from "styled-components";

export const DropdownMenuWrapper = styled.div`
    .dropdown__content{
        display: none;
    }
    .dropdown--active .dropdown__content{
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
        border-radius: 2px;
        background-color: white;
        ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
    }
`;