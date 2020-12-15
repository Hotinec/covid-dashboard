import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useStyles} from './styles';
import logo from '../../images/rs_school_js_logo.svg';

export const Header = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square>
      <Box>
        <Box display="flex" alignItems="center">
          <img
            className={classes.media}
            src={logo}
            alt='Rs School logo'
          />
          <Typography className={classes.title}>Covid Dashboard</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
