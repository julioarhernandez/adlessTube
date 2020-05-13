import React from 'react';
import {StyledButton} from './styles';

const Button = ({clickHandler, text}) => {
    return <StyledButton onClick={clickHandler}>{text}</StyledButton>;
  };

export default Button;