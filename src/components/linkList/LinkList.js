import React from 'react';
import {LinkListWrapper} from "./styles";

const LinkList = ({list, id}) => {
    const renderedList = list && list.map((el, index) => {
        const {icon, text, handler} = el;
        return (
            <li key={`LinkListWrapper-${index}`} onClick={() => handler(id)}>
                {icon &&
                <div className="LinkListWrapper_icon">
                    <img src={icon} alt={text}/>
                </div>
                }
                <div className="LinkListWrapper_text">
                    {text}
                </div>
            </li>
        );
    });

    return (
        <LinkListWrapper>
            <ul>
                {renderedList}
            </ul>
        </LinkListWrapper>
    );
};

export default LinkList;