import styled, {css} from "styled-components";

const BurguerMenuStyled = styled.nav`
    cursor: pointer;
    .BurguerMenu_icon{
        position: relative;
        margin: 5px;
        width: 25px;
        height: 15px;
        
    }
    .BurguerMenu_bun{
        background: black;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        position: absolute;
        right: 0;
        transition: transform .5s, opacity .3s, top .2s;
        &:nth-child(2){
            top: 6px;
        }
        &:nth-child(3){
            top: 12px;
        }
        
    }
    ${props => props.open && css`
        .BurguerMenu_bun{
             &:nth-child(1){
               opacity: 0;
            }
            &:nth-child(2){
                top: 6px;
                transform: rotate(-45deg);
            }
            &:nth-child(3){
                top: 6px;
                transform: rotate(45deg);
            }
        }
    `}
    
    .BurguerMenu_menu{
        position: fixed;
        right: 0;
        top:55px;
        min-width: 120px;
        padding: 10px 15px;
        background-color: white;
        transform: translateX(100%);
        border-radius: 0 0 0 5px;
        transition: transform 0.4s cubic-bezier(0, 0.9, 0, 0.99);
    }
    ${props => props.open && css`
        .BurguerMenu_menu{
            transform: translateX(0);
        }
    `}
`;
export default BurguerMenuStyled;