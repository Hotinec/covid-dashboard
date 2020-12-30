/* eslint-disable react/no-children-prop */
import React from "react";
import { useDispatch } from "react-redux";
import { MenuItem, Menu } from "@material-ui/core";
import { PARAMETERS } from "../../constants";
import { setParameter } from "../../redux/parameterSlice";

const options = Object.values(PARAMETERS);

const ITEM_HEIGHT = 48;

export const MenuFilter = ({ anchorEl, setAnchorEl }) => {
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClose = (e) => {
    if (e.target.firstChild) {
      dispatch(setParameter(e.target.firstChild.textContent));
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "40ch",
            backgroundColor: "#ddd",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "true"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
