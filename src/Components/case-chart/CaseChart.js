import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

export const CaseChart = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square>
      <Typography className={classes.title}>Case Chart</Typography>
    </Paper>
  );
}
