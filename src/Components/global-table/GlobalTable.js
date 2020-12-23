import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

import IconMenuButton from "../menu-icon-button";
import { InfoTable } from "./InfoTable";
import { GlobalCountries } from "./GlobalCountries";
import { setBoard, selectCurrentBoard } from "../../redux/currentBoardSlice";
import { selectGlobalInfo } from "../../redux/covidInfoSlice";
import { getCurrentCountryInfo } from "../../redux/currentCountrySlice";

import { getParametersArr } from "../../utils/parametersArray";

import { useStyles } from "./styles";

export const GlobalTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const currentBoard = useSelector(selectCurrentBoard);
  const globalInfo = useSelector(selectGlobalInfo);
  const currentCountryInfo = useSelector(getCurrentCountryInfo);

  let parametersInfo;
  if (currentCountryInfo) {
    parametersInfo = getParametersArr(currentCountryInfo);
  } else {
    parametersInfo = getParametersArr(globalInfo);
  }

  const resizeClickHandler = () => {
    if (currentBoard === 4) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(4));
  };

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
        onClick={(e) => resizeClickHandler(e)}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      <Box
        className={classes.wrapper}
        display="flex"
        justifyContent="space-between"
      >
        <GlobalCountries paramInfo={parametersInfo} />
        <InfoTable paramInfo={parametersInfo} />
      </Box>
    </Paper>
  );
};
