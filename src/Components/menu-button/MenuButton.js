import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

import MenuFilter from "../menu-filter";

export const MenuButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
      <MenuFilter anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
};
