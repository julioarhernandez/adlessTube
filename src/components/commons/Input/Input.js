import React, {useState} from 'react';
import {VerticalForm, Label, StyledButton, StyledInput} from './styles';

const Input = ({clickHandler}) => {
    const [value, setValue] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      clickHandler(value);
    };
    return (
      <VerticalForm onSubmit={submitHandler}>
        <Label>Paste Youtube video URL</Label>
        <StyledInput type="text" value={value} placeholder="Video URL" onChange={e => setValue(e.target.value)}></StyledInput>
        <StyledButton type="submit" >Load video</StyledButton>
      </VerticalForm>
    );
  }

  export default Input;