import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {DropdownMenuWrapper} from "./styles";

const DropdownMenu = ({list, id}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = list.map((item) => {
        const {icon, text, handler} = item;
        return  <MenuItem onClick={() => {setAnchorEl(null); handler(id)}}>
                    <DropdownMenuWrapper>
                        {item.icon &&
                            <div className="DropdownMenuWrapper_icon">
                                <img src={icon} alt={text}/>
                            </div>
                        }
                        <div className="DropdownMenuWrapper_text">
                            {text}
                        </div>
                    </DropdownMenuWrapper>
            </MenuItem>
    });
    return (

        <DropdownMenuWrapper>
           <IconButton
                size="small"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              {menuItems}
            </Menu>

        </DropdownMenuWrapper>
    );
};

export default DropdownMenu;