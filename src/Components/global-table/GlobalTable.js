import React from "react";
import { useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

import IconMenuButton from "../menu-icon-button";
import { InfoTable } from "./InfoTable";
import { GlobalCountries } from "./GlobalCountries";
import { selectCurrentBoard } from "../../redux/currentBoardSlice";
import { getParameterInfo } from "../../redux/currentCountrySlice";
import { useResizeSwitch } from "../../hooks/useResizeSwitch";

import { useStyles } from "./styles";

export const GlobalTable = () => {
  const classes = useStyles();

  const currentBoard = useSelector(selectCurrentBoard);
  const parameterInfo = useSelector(getParameterInfo);
  const resizeClickHandler = useResizeSwitch(4);

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 4 ? classes.open : ""}`}
      square
    >
      <IconMenuButton />
      <IconButton
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={resizeClickHandler}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      <Box
        className={classes.wrapper}
        display="flex"
        justifyContent="space-between"
      >
        <GlobalCountries paramInfo={parameterInfo} />
        <InfoTable paramInfo={parameterInfo} />
      </Box>
    </Paper>
  );
};
