import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .Header_logo{
        display: flex;
        align-items: center;
        img{
            height: 32px;
        }
    }
    .Header_terms{
        min-width: 640px;
        form{
            display: flex;
            input{
                flex: 1 1 auto;
                padding: 7px;
                font-size: 14px;
                border-width: 2px 0 2px 2px;
                border-style: solid;
                border-color: rgb(228, 228, 228);
            }
            button{
                border: 2px solid rgb(228,228,228);
                background-color: #f1f0ee;
                min-width: 70px;
                img{
                    width: 15px;
                }
            }
        }
    }
    .Header_user{
        display: flex;
        align-items: center;
        img{
            width: 32px;
        }
    }
    
`;