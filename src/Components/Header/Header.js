import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useStyles} from './styles';
import logo from '../../images/rs_school_js_logo.svg';

export const Header = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <CardMedia
            className={classes.media}
            image={logo}
            title='Rs School logo'
          />
          <Typography className={classes.title}>Covid Dashboard</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}