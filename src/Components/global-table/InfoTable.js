import React from "react";
import { useStyles } from "./styles";
import { selectCountryById } from "../../redux/covidInfoSlice";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import Spinner from "../spinner";

export const InfoTable = () => {
  const classes = useStyles();
  const isLoaded = useSelector((state) => state.covidInfo.loading);
  const {
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    worldPopulation
  } = useSelector((state) => state.covidInfo.Global);

  let currentCountryInfo;
  const currentCountry = useSelector((state) => state.currentCountry.info);
  if (currentCountry) {
    currentCountryInfo = selectCountryById(currentCountry);
  }

  const calculationPer100 = (count, population) => {
    return Math.floor((count * 100000) / population);
  };

  const parametersArray = [
    [
      "Total cases:",
      currentCountry ? currentCountryInfo.TotalConfirmed : TotalConfirmed
    ],
    [
      "Total deaths:",
      currentCountry ? currentCountryInfo.TotalDeaths : TotalDeaths
    ],
    [
      "Total recovered:",
      currentCountry ? currentCountryInfo.TotalRecovered : TotalRecovered
    ],
    [
      "Last day cases:",
      currentCountry ? currentCountryInfo.NewConfirmed : NewConfirmed
    ],
    [
      "Last day deaths:",
      currentCountry ? currentCountryInfo.NewDeaths : NewDeaths
    ],
    [
      "Last day recovered:",
      currentCountry ? currentCountryInfo.NewRecovered : NewRecovered
    ],
    [
      "Total cases per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.TotalConfirmed,
            currentCountryInfo.population
          )
        : calculationPer100(TotalConfirmed, worldPopulation)
    ],
    [
      "Total deaths per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.TotalDeaths,
            currentCountryInfo.population
          )
        : calculationPer100(TotalDeaths, worldPopulation)
    ],
    [
      "Total recovered per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.TotalRecovered,
            currentCountryInfo.population
          )
        : calculationPer100(TotalRecovered, worldPopulation)
    ],
    [
      "Last day cases per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.NewConfirmed,
            currentCountryInfo.population
          )
        : calculationPer100(NewConfirmed, worldPopulation)
    ],
    [
      "Last day deaths per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.NewDeaths,
            currentCountryInfo.population
          )
        : calculationPer100(NewDeaths, worldPopulation)
    ],
    [
      "Last day recovered per 100 thousand population:",
      currentCountry
        ? calculationPer100(
            currentCountryInfo.NewRecovered,
            currentCountryInfo.population
          )
        : calculationPer100(NewRecovered, worldPopulation)
    ]
  ];

  return (
    <Paper className={classes.wrapperCountries} variant="outlined" square>
      {isLoaded === "idle" && (
        <List className={classes.infoList}>
          {parametersArray.map(([desc, value], index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  className={classes.itemText}
                  primary={
                    <Typography
                      style={{
                        color: "#d6d6d6",
                        fontSize: "14px"
                      }}
                    >
                      {desc}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        marginLeft: "5px",
                        fontWeight: "bold"
                      }}
                    >
                      {value ? value : 0}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider classes={{ root: classes.itemDivider }} />
            </React.Fragment>
          ))}
        </List>
      )}
      {isLoaded === "pending" && <Spinner />}
    </Paper>
  );
};
