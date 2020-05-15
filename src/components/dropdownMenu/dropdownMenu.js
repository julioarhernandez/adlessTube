import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import {DropdownMenuWrapper} from "./styles";

const DropdownMenu = ({imgSrc, children}) => {
    return (
        <DropdownMenuWrapper>
            <Dropdown>
                <DropdownTrigger>
                    <div className="contextMenu">
                        <img src={imgSrc} alt="context menu dropdown" />
                    </div>
                </DropdownTrigger>
                <DropdownContent>
                    {children}
                </DropdownContent>
            </Dropdown>
        </DropdownMenuWrapper>
    );
};

export default DropdownMenu;