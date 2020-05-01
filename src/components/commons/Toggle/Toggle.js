import React, {useContext} from 'react';
import {AutoPlayContext} from '../../app/App';
import {ToggleWrapper} from "./styles";

const Toggle = ({label}) => {
    const [autoPlay, setAutoplay] = useContext(AutoPlayContext);
    const toggleCheck = (e) => {
        setAutoplay(!e.target.checked);
    };
    return (
        <ToggleWrapper>
            {label &&
            <div className="ToggleWrapper_label">{label}</div>
            }
            <label className="ToggleGroup" onClick={() => setAutoplay(!autoPlay)}>
                <input type="checkbox" onChange={toggleCheck} checked={autoPlay}/>
                <span className="slider round"></span>
             </label>
        </ToggleWrapper>
    );
};

export default Toggle;