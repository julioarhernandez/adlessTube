import styled  from 'styled-components';

import mediaQuery from "../../utils/breakpoints";

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
`;
export const Body = styled.section`
    display: grid;
    background-color: rgb(249,249,249);
    column-gap: 15px;
    min-height: calc(100vh - 55px);
    @media ${mediaQuery.lg}{
        grid-template-columns: 1fr 455px; 
        .Body_player{
            padding: 20px 10px 20px 20px;
        }   
        .Body_wrapper{
            height: 85vh;
        } 
        .Body_aside{
            padding: 20px 20px 20px 10px;
        }
        
    }
    @media ${mediaQuery.mdDown}{
        grid-template-columns: 1fr; 
    }
    .Body_player{
        position: relative;
    }
    @media ${mediaQuery.mdDown}{
        .Body_player{
            padding: 20px;
        }   
        .Body_wrapper{
            height: 50vh;
        }   
        .Body_aside{
            padding: 20px;
        }
    }
    
    .Body_wrapper{
        position: sticky;
        top: 75px;
    }
    .Body_aside{
        hr {
            border-style: solid;
            border-width: 0.8px;
            border-color: #e0dfde;
            margin: 15px 0 18px;
        }
    }
`;