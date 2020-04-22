import styled, {css}  from 'styled-components';

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
`;
export const Body = styled.section`
    display: grid;
    grid-template-columns: 1fr 455px;
    column-gap: 15px;
    .Body_player{
        position: relative;
        background-color: #f1f0ee;
        position: relative;
        ${props => props.readyState === 'notReady' && css`
            &:after{
                content: 'Enter video URL';
                position: absolute;
                top: 50%;
                color: rgba(0, 0, 0, 0.6);
            }
        `}
    }
    .Body_wrapper{
        position: relative;
        height: 85vh;
    }
`;