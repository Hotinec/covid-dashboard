import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

import { MenuItem, Menu, Button } from '@material-ui/core';
import { parameters } from '../../constants';
import { setParameter } from '../../redux/parameterSlice';

const options = Object.values(parameters);

const ITEM_HEIGHT = 48;

export const MenuFilter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    if (e.target.firstChild) {
      dispatch(setParameter(e.target.firstChild.textContent));
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className={classes.button}
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
            width: '40ch',
            backgroundColor: '#ddd',
          },
        }}
      >
        {options.map(option => (
       
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
              children={option}
            >
            </MenuItem>
            
 
        ))}
      </Menu>
    </div>
  );
};
