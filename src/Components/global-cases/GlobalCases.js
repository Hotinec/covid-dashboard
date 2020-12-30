import React from "react";
import { useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { selectCurrentBoard } from "../../redux/currentBoardSlice";
import {
  selectGlobalInfo,
  selectInfoLoader,
  selectInfoDate,
} from "../../redux/covidInfoSlice";
import { useResizeSwitch } from "../../hooks/useResizeSwitch";
import Spinner from "../spinner";
import IconMenuButton from "../menu-icon-button";
import { useStyles } from "./styles";
import { LOADER_STATES } from "../../constants";

export const GlobalCases = () => {
  const classes = useStyles();
  const currentBoard = useSelector(selectCurrentBoard);
  const isLoaded = useSelector(selectInfoLoader);
  const dateValue = useSelector(selectInfoDate);
  const globalCases = useSelector(selectGlobalInfo).TotalConfirmed;

  const date = new Date(dateValue);
  const parseDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  const resizeClickHandler = useResizeSwitch(1);

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 1 ? classes.open : ""}`}
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
      {isLoaded === LOADER_STATES.IDLE ? (
        <Box>
          <Typography
            className={`${classes.caseTitle} ${
              currentBoard === 1 ? classes.openTitle : ""
            }`}
          >
            Global Cases
          </Typography>
          <Typography
            className={`${classes.caseCount} ${
              currentBoard === 1 ? classes.openCount : ""
            }`}
          >
            {globalCases}
          </Typography>
          <Typography
            className={`${classes.caseTitle} ${
              currentBoard === 1 ? classes.openTitle : ""
            }`}
          >
            {parseDate}
          </Typography>
        </Box>
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};
