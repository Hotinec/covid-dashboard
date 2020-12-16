import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Spinner from '../spinner';
import { useStyles } from './styles';

export const GlobalCases = () => {
  const classes = useStyles();
  const isLoaded = useSelector(state => state.covidInfo.loading);
  const globalCases = useSelector(
    state => state.covidInfo.Global.TotalConfirmed,
  );

  return (
    <Paper className={classes.root} square>
      {isLoaded === 'idle' ? (
        <Box>
          <Typography className={classes.caseTitle}>Global Cases</Typography>
          <Typography className={classes.caseCount}>{globalCases}</Typography>
        </Box>
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};
