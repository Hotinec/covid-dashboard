import React, { useState } from "react";
import MenuOpenTwoToneIcon from "@material-ui/icons/MenuOpenTwoTone";
import IconButton from "@material-ui/core/IconButton";

import { useStyles } from "./styles";

import MenuFilter from "../menu-filter";

export const IconMenuButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        size="small"
        className={classes.icon}
        onClick={handleClick}
      >
        <MenuOpenTwoToneIcon fontSize="inherit" />
      </IconButton>
      <MenuFilter anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};
