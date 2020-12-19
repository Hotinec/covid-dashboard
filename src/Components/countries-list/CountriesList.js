import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../../redux/currentCountrySlice';
import { selectAllCountries } from '../../redux/covidInfoSlice';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Spinner from '../spinner';
import {useStyles} from './styles';

const regex = /\B(?=(\d{3})+(?!\d))/g;

export const CountriesList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoaded = useSelector(state => state.covidInfo.loading);
  const countries = useSelector(selectAllCountries);

  return (
    <Paper className={classes.root} square>
      {
        isLoaded === 'idle' ? 
        <Box>
          <Typography className={classes.title}>Cases by Country</Typography>
          <List className={classes.list}>
            {countries
              .sort((country1, country2) => country2.TotalConfirmed - country1.TotalConfirmed)
              .map((country) => (
              <React.Fragment key={country.CountryCode}>
                <ListItem
                  onClick={() => dispatch(setCountry(country.CountryCode))}
                  button >
                  <ListItemText
                    primary={
                      <Typography style={{color: '#e60000', fontSize: '16px', fontWeight: 'bold'}}>
                        {country.TotalConfirmed.toString().replace(regex, ",")}
                      </Typography>
                    }
                  />
                  <ListItemText
                    classes={{root: classes.countryName}}
                    primary={
                      <Typography style={{ color: '#d6d6d6', fontSize: '16px'}}>
                        {
                          country.Country === 'United States of America' 
                          ? 'USA'
                          : country.Country
                        }
                      </Typography>
                    }
                  />
                  <ListItemIcon className={classes.itemIcon}>
                    <Icon classes={{root: classes.iconRoot}}>
                      <img 
                        className={classes.imageIcon}
                        src={country.flag}
                        alt={country.CountryCode} />
                    </Icon>
                  </ListItemIcon>
                </ListItem>
                <Divider
                  classes={{root: classes.divider}}
                  component="li" 
                />
              </React.Fragment>
            ))}
          </List>
        </Box>
        : <Spinner />
      }
    </Paper>
  );
}