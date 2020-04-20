import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styled, {css} from 'styled-components';
import './App.css';

import Controls from "./components/controls/";
import Input from "./components/commons/Input";

//ytp-ad-overlay-slot display none
const Wrapper = styled.section`
  padding: 4em;
  background-color: #f1f0ee;
`;
const LayoutItems = styled.section`
  margin: 4em;
  position: relative;
  ${props => props.center && css`
    display: flex;
    justify-content: center;
  `}
  ${props => props.gray && css`
    background-color: darkgray;
  `}
  ${props => props.readyState === 'notReady' && css`
    &:after{
      content: 'Enter video URL';
      position: absolute;
      top: 50%;
      color: rgba(0, 0, 0, 0.6);
    }
  `}
`;

const App = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=AMTdeS2Ebek&t=4856s');
  const [readyState, setReadyState] = useState('notReady');
  const [progressValue, setProgresValue] = useState(0);
  
  const clickHandler = (value) => {
    setUrl(value);
  };

  const showProgress = ({played}) => {
    setProgresValue(played);
  };

  const removeMessage = () => {
    setReadyState('');
  };

  return <Wrapper>      
    <LayoutItems center gray readyState={readyState}>
      <ReactPlayer 
        url={url} 
        width="100vw" 
        height="40vh" 
        onReady={removeMessage} 
        onProgress={showProgress}
        />
      <Controls progressValue ={progressValue}/>
    </LayoutItems>
    <LayoutItems>
      <Input clickHandler={clickHandler} />
    </LayoutItems>
    </Wrapper>;
}



export default App;