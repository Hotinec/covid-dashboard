import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, selectCurrentBoard } from '../../redux/currentBoardSlice';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Spinner from '../spinner';
import { useStyles } from './styles';

export const GlobalCases = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentBoard = useSelector(selectCurrentBoard);
  const isLoaded = useSelector(state => state.covidInfo.loading);
  const dateValue = useSelector(state => state.covidInfo.Date);
  const globalCases = useSelector(
    state => state.covidInfo.Global.TotalConfirmed,
  );

  const date = new Date(dateValue);
  const parseDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  const resizeClickHandler = (e) => {
    if (currentBoard === 1) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(1));
  }

  return (
    <Paper 
      className={`${classes.root} ${currentBoard === 1 ? classes.open : ''}`}
      square>
      <IconButton 
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={(e) => resizeClickHandler(e)}>
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      {isLoaded === 'idle' ? (
        <Box>
          <Typography className={classes.caseTitle}>Global Cases</Typography>
          <Typography className={classes.caseCount}>
            {globalCases}
          </Typography>
          <Typography className={classes.caseTitle}>{parseDate}</Typography>
        </Box>
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};