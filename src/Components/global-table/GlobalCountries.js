/* eslint-disable consistent-return */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import {
  filteredQueryCountries,
  selectGlobalInfo,
  selectInfoLoader,
} from "../../redux/covidInfoSlice";

import { setCountry } from "../../redux/currentCountrySlice";
import { selectParameter } from "../../redux/parameterSlice";
import { parameters } from "../../constants";
import Spinner from "../spinner";

export const GlobalCountries = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoaded = useSelector(selectInfoLoader);
  const countries = useSelector(filteredQueryCountries);
  const globalCases = useSelector(selectGlobalInfo).TotalDeaths;
  const parameter = useSelector(selectParameter);

  if (countries.length === 1) {
    dispatch(setCountry(countries[0].Code));
  }
  const changeSign = () => {
    if (
      parameter === "" ||
      parameter === parameters.totalCases ||
      parameter === parameters.lastDayCases ||
      parameter === parameters.totalCases100 ||
      parameter === parameters.lastDayCases100
    ) {
      return "confirmed";
    }
    if (
      parameter === parameters.totalDeaths ||
      parameter === parameters.lastDayDeaths ||
      parameter === parameters.totalDeath100 ||
      parameter === parameters.lastDayDeaths100
    ) {
      return "deaths";
    }
    if (
      parameter === parameters.totalRecovered ||
      parameter === parameters.lastDayRecovered ||
      parameter === parameters.totalRecovered100 ||
      parameter === parameters.lastDayRecovered100
    ) {
      return "recovered";
    }
  };

  return (
    <Paper className={classes.wrapperCountries} variant="outlined" square>
      {isLoaded === "idle" && (
        <>
          <Box className={classes.global}>
            <Typography className={classes.title} align="center">
              {parameter || "Total cases"}
            </Typography>
            <Typography className={classes.globalCases} align="center">
              {globalCases}
            </Typography>
          </Box>
          <List button="true" className={classes.countryList}>
            {countries.map((country) => (
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
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "bold",
                          display: "inline",
                        }}
                      >
                        {country.Cases}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          marginLeft: "5px",
                          display: "inline",
                        }}
                      >
                        {changeSign()}
                      </Typography>
                    }
                  />
                  <ListItemText
                    className={classes.itemText}
                    secondary={
                      <Typography
                        style={{
                          color: "#ebebeb",
                          fontSize: "14px",
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
      {isLoaded === "pending" && <Spinner />}
    </Paper>
  );
};
