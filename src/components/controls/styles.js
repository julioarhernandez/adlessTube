import styled from 'styled-components';

export  const ControlWrapper = styled.div`
    width: 100%;
    height: 28px;
    display: block;
    position: absolute;
    bottom: 0;
    .ControlProgressBar{
        position: relative;
        // width: calc(100% - 40px);
        height: 4px;
        margin: 0 20px;
        // background-color: rgba(255, 255, 255, 0.4);
        // cursor: pointer;
    }
    .ControlCurrentProgress{
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 100%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */
        height: 4px;
        position: absolute;
        width: 100%;
        border: 0;
        margin: 0;
        :focus {
            outline: none;
        }
        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 1.3px;
            border: 0.2px solid #010101;
        }
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            border: 1px solid red;
            height: 13px;
            width: 13px;
            border-radius: 50%;
            background: red;
            cursor: pointer;
            margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
        }
    }
    .ControlCurrentProgressTrail{
        height: 4px;
        position: absolute;
        background-color: red;
    }
`;


