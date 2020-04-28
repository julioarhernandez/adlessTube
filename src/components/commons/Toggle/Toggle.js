import React, {useState} from 'react';
import {ToggleWrapper} from "./styles";

const Toggle = ({label}) => {
    const [check, setCheck] = useState(false);
    const toggleCheck = (e) => {
        setCheck(!e.target.checked);
    };
    return (
        <ToggleWrapper>
            {label &&
            <div className="ToggleWrapper_label">{label}</div>
            }
            <label className="ToggleGroup" onClick={() => setCheck(!check)}>
                <input type="checkbox" onChange={toggleCheck} checked={check}/>
                <span className="slider round"></span>
             </label>
        </ToggleWrapper>
    );
};

export default Toggle;