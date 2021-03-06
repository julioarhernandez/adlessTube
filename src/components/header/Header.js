import React, {useState} from 'react';
import {HeaderWrapper} from './styles';
import Logo from '../../assets/images/logo/adless.svg';
import Search from '../../assets/images/search.svg';
import User from '../../assets/images/user.svg';
import Playlist from "../../assets/images/playlist.svg";
import Toggle from "../commons/Toggle";
import BurguerMenu from "../burgerMenu";

const Header = ({submitHandler, filterPlaylist, setFilterPlaylist}) => {
    const [term, setTerm] = useState('');
    const changeHandler = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
         e.preventDefault();
         submitHandler(term);
    };
    return (
        <HeaderWrapper>
            <div className="Header_logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="Header_center">
                <div className="Header_terms">
                    <form onSubmit={onSubmit}>
                        <input type="text" onChange={changeHandler} value={term}/>
                        <button type="submit" aria-label="Search"><img src={Search} alt="search icon"/></button>
                    </form>
                </div>
                <div className="Header_filters">
                     <Toggle stateVal={filterPlaylist} setStateVal={setFilterPlaylist} img={Playlist}/>
                </div>
            </div>
            <div className="Header_user">
                <img src={User} alt="user icon"/>
                <BurguerMenu>
                    { setOpen => (
                        <ul onClick={() => setOpen(false)}>
                            <li>asdasd1</li>
                            <li>asdasd2</li>
                            <li>asdasd3</li>
                        </ul>
                    )}
                </BurguerMenu>
            </div>
        </HeaderWrapper>
    );
};

export default Header;