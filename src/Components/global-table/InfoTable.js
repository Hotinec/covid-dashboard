/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { selectInfoLoader } from "../../redux/covidInfoSlice";
import { getCurrentCountryInfo } from "../../redux/currentCountrySlice";

import Spinner from "../spinner";

export const InfoTable = (props) => {
  const classes = useStyles();
  const isLoaded = useSelector(selectInfoLoader);
  const currentCountryInfo = useSelector(getCurrentCountryInfo);

  return (
    <Paper className={classes.wrapperCountries} variant="outlined" square>
      {isLoaded === "idle" && (
        <>
          <Box className={classes.global}>
            <Typography className={classes.title} align="center">
              {currentCountryInfo ? currentCountryInfo.Country : "World"}
            </Typography>
          </Box>
          <List className={classes.countryList}>
            {props.paramInfo.map(([desc, value]) => (
              <React.Fragment key={desc.toString()}>
                <ListItem>
                  <ListItemText
                    className={classes.itemText}
                    primary={
                      <Typography
                        style={{
                          color: "#d6d6d6",
                          fontSize: "14px",
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
                          fontWeight: "bold",
                        }}
                      >
                        {value || 0}
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
