import React from 'react';
import classNames from 'classnames';
import {StyledButton} from './styles';

const Button = ({clickHandler, text, loading}) => {
    const buttonClass = classNames({loading:loading});
    return <StyledButton onClick={clickHandler} className={buttonClass}>{text}</StyledButton>;
  };

export default Button;