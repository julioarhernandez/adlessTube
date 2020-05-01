import styled, {css}  from 'styled-components';

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
`;
export const Body = styled.section`
    display: grid;
    grid-template-columns: 1fr 455px;
    background-color: rgb(249,249,249);
    column-gap: 15px;
    .Body_player{
        position: relative;
        padding: 20px 10px 20px 20px;
        position: relative;
    }
    .Body_wrapper{
        position: relative;
        height: 85vh;
        position: sticky;
        top: 75px;
    }
    .Body_aside{
        padding: 20px 20px 20px 10px;
        hr {
            border-style: solid;
            border-width: 0.8px;
            border-color: #e0dfde;
            margin: 15px 0 18px;
        }
    }
`;