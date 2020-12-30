import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import {
  filteredQueryCountries,
  selectInfoLoader,
} from "../../redux/covidInfoSlice";
import { selectCurrentBoard } from "../../redux/currentBoardSlice";
import { useResizeSwitch } from "../../hooks/useResizeSwitch";
import { setCountry } from "../../redux/currentCountrySlice";
import Spinner from "../spinner";
import IconMenuButton from "../menu-icon-button";
import { LOADER_STATES } from "../../constants";

import { useStyles } from "./styles";

export const CountriesList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentBoard = useSelector(selectCurrentBoard);
  const isLoaded = useSelector(selectInfoLoader);
  const countries = useSelector(filteredQueryCountries);
  const resizeClickHandler = useResizeSwitch(2);

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 2 ? classes.open : ""}`}
      square
    >
      <IconMenuButton />
      <IconButton
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={resizeClickHandler}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      {isLoaded === LOADER_STATES.IDLE ? (
        <Box className={classes.wraper}>
          <Typography className={classes.title}>Cases by Country</Typography>
          <List className={classes.list}>
            {countries.map((country) => (
              <React.Fragment key={country.Code}>
                <ListItem
                  onClick={() => dispatch(setCountry(country.Code))}
                  button
                >
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: "#e60000",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {country.Cases}
                      </Typography>
                    }
                  />
                  <ListItemText
                    classes={{ root: classes.countryName }}
                    primary={
                      <Typography
                        style={{ color: "#d6d6d6", fontSize: "16px" }}
                      >
                        {country.Country === "United States of America"
                          ? "USA"
                          : country.Country}
                      </Typography>
                    }
                  />
                  <ListItemIcon className={classes.itemIcon}>
                    <Icon classes={{ root: classes.iconRoot }}>
                      <img
                        className={classes.imageIcon}
                        src={country.Flag}
                        alt={country.Code}
                      />
                    </Icon>
                  </ListItemIcon>
                </ListItem>
                <Divider classes={{ root: classes.divider }} component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};
