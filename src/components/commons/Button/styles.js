import styled from 'styled-components';

export const StyledButton = styled.button `
    border: none;
    height: 30px;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    min-width: 133px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 30px;
    &.loading{
        position: relative;
        &:after {
            content: '';
          display: block;
          position: absolute;
          bottom: 6px;
          right: 5px;
          height: 10px;
          width: 10px;
          margin: -25px 0 0 -25px;
          border: 4px rgba(255, 255, 255, 0.41) solid;
          border-top: 4px white solid;
          border-radius: 50%;
          -webkit-animation: spin2 1s infinite linear;
                  animation: spin2 1s infinite linear;
        }
        
        @-webkit-keyframes spin2 {
          from {
            -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(359deg);
                    transform: rotate(359deg);
          }
        }
        @keyframes spin2 {
          from {
            -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(359deg);
                    transform: rotate(359deg);
            -webkit-transform: rotate(359deg);
                    transform: rotate(359deg);
          }
        }
    }
`;
