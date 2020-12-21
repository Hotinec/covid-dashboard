import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, selectCurrentBoard } from '../../redux/currentBoardSlice';
import { GlobalCountries } from "./GlobalCountries";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import { InfoTable } from "./InfoTable";
import { Box } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

export const GlobalTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const currentBoard = useSelector(selectCurrentBoard);

  const resizeClickHandler = (e) => {
    if (currentBoard === 4) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(4));
  }

  return (
    <Paper 
      className={classes.root}
      square={true}>
      <IconButton 
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={(e) => resizeClickHandler(e)}>
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      <Box display="flex" justifyContent="space-between">
        <GlobalCountries />
        <InfoTable />
      </Box>
    </Paper>
  );
};
