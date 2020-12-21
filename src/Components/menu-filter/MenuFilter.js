import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { parameters } from '../../constants';
import { setParameter } from '../../redux/parameterSlice';

const options = Object.values(parameters);

const ITEM_HEIGHT = 48;

export const MenuFilter = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    dispatch(setParameter(e.target.firstChild.textContent));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Cases
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '32ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
            children={option}
          ></MenuItem>
        ))}
      </Menu>
    </div>
  );
};
