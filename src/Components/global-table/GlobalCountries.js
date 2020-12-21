import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { filteredQueryCountries } from '../../redux/covidInfoSlice';
import { selectGlobalInfo, selectInfoLoader } from '../../redux/covidInfoSlice';
import { setCountry } from '../../redux/currentCountrySlice';
import Paper from '@material-ui/core/Paper';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Spinner from '../spinner';

export const GlobalCountries = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoaded = useSelector(selectInfoLoader);
  const countries = useSelector(filteredQueryCountries);
  const globalCases = useSelector(selectGlobalInfo).TotalDeaths;

  if (countries.length === 1) {
    dispatch(setCountry(countries[0].Code));
  }

  return (
    <Paper
      className={classes.wrapperCountries}
      variant="outlined"
      square={true}
    >
      {isLoaded === 'idle' && (
        <>
          <Box className={classes.global}>
            <Typography className={classes.title} align="center">
              Global Deaths
            </Typography>
            <Typography className={classes.globalCases} align="center">
              {globalCases}
            </Typography>
          </Box>
          <List button="true" className={classes.countryList}>
            {countries.map(country => (
              <React.Fragment key={country.Code}>
                <ListItem
                  button
                  className={classes.itemCountry}
                  onClick={() => dispatch(setCountry(country.Code))}
                >
                  <ListItemText
                    className={classes.itemText}
                    primary={
                      <Typography
                        style={{
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          display: 'inline',
                        }}
                      >
                        {country.Cases}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        style={{
                          color: '#fff',
                          fontSize: '14px',
                          marginLeft: '5px',
                          display: 'inline',
                        }}
                      >
                        deaths
                      </Typography>
                    }
                  />
                  <ListItemText
                    className={classes.itemText}
                    secondary={
                      <Typography
                        style={{
                          color: '#ebebeb',
                          fontSize: '14px',
                        }}
                      >
                        {country.Country}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider classes={{ root: classes.itemDivider }} />
              </React.Fragment>
            ))}
          </List>
        </>
      )}
      {isLoaded === 'pending' && <Spinner />}
    </Paper>
  );
};
