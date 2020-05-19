import React, {useEffect, useState, useRef} from 'react';
import BurguerMenuStyled from './styles';

const BurguerMenu = (props) => {
    const [open, setOpen] = useState(false);
    const burgerRef = useRef();

    function outsideClick(event){
        // IF click menu or anybody inside the menu do nothing
        if (event.target === burgerRef.current || burgerRef.current.contains(event.target)){
            return;
        }else{
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', outsideClick);
        return (
            () => document.removeEventListener('click', outsideClick)
        );
    }, []);

    return (
        <BurguerMenuStyled open={open} ref={burgerRef}>
            <div className="BurguerMenu_icon" onClick={()=>setOpen(!open)}>
                <div className="BurguerMenu_bun"></div>
                <div className="BurguerMenu_bun"></div>
                <div className="BurguerMenu_bun"></div>
            </div>
            <div className="BurguerMenu_menu">
                {props.children(setOpen)}
            </div>
        </BurguerMenuStyled>
    );
};

export default BurguerMenu;