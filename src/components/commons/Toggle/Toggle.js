import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ToggleWrapper} from "./styles";

const Toggle = ({label, img, stateVal, setStateVal}) => {
    const toggleCheck = (e) => {
        (typeof setStateVal === 'function') && setStateVal(!e.target.checked);
    };
    const onClick = (e) => {
        e.preventDefault();
        (typeof setStateVal === 'function') && setStateVal(!stateVal);
    };
    const ToggleClasses = classNames('ToggleGroup', {image: img});
    return (
        <ToggleWrapper>
            {label &&
            <div className="ToggleWrapper_label">{label}</div>
            }
            <label className={ToggleClasses} onClick={onClick}>
                <input type="checkbox" onChange={toggleCheck} checked={stateVal}/>
                {!img &&
                   <span className="slider round"></span>
                }
                {img &&
                    <img src={img} alt="Toggle" />
                }
             </label>
        </ToggleWrapper>
    );
};

Toggle.propTypes ={
  label: PropTypes.string,
  img: PropTypes.string
};

export default Toggle;