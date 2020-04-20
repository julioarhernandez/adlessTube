import React from 'react';
import {ControlWrapper} from './styles';

const Controls = ({progressValue}) => {
 
    return (
      <ControlWrapper>
        <div className="ControlProgressBar">
          <input 
            className="ControlCurrentProgress"
            type='range' 
            min={0} 
            max={0.999999} 
            step='any'
            value={progressValue}/>
            <div className="ControlCurrentProgressTrail" style={{width: progressValue*100 + '%'}}/>
        </div>
      </ControlWrapper>
    );
  };

  export default Controls;