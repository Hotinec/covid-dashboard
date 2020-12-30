import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { setBoard, selectCurrentBoard } from "../../redux/currentBoardSlice";
import { selectGlobalInfo } from "../../redux/covidInfoSlice";
import Spinner from "../spinner";
import IconMenuButton from "../menu-icon-button";
import { useStyles } from "./styles";

export const GlobalCases = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentBoard = useSelector(selectCurrentBoard);
  const isLoaded = useSelector((state) => state.covidInfo.loading);
  const dateValue = useSelector((state) => state.covidInfo.Date);
  const globalCases = useSelector(selectGlobalInfo).TotalConfirmed;

  const date = new Date(dateValue);
  const parseDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  const resizeClickHandler = () => {
    if (currentBoard === 1) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(1));
  };

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
        onClick={(e) => resizeClickHandler(e)}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      {isLoaded === "idle" ? (
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
