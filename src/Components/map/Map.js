/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMapGL, {
  Marker,
  NavigationControl,
  FlyToInterpolator,
} from "react-map-gl";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import {
  setCountry,
  getCurrentCountryInfo,
} from "../../redux/currentCountrySlice";
import {
  markerSizeByCountries,
  filteredCountries,
  selectInfoLoader,
} from "../../redux/covidInfoSlice";
import { useResizeSwitch } from "../../hooks/useResizeSwitch";

import { selectCurrentBoard } from "../../redux/currentBoardSlice";

import { selectParameter } from "../../redux/parameterSlice";

import "mapbox-gl/dist/mapbox-gl.css";
import Spinner from "../spinner";
import Tooltip from "../tooltip";
import Legend from "../legend";
import IconMenuButton from "../menu-icon-button";
import { useStyles } from "./styles";
import { LOADER_STATES, MARKER_COLORS, TOKEN } from "../../constants";

export const Map = () => {
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });
  const resizeClickHandler = useResizeSwitch(3);

  const resizeListener = useCallback(() => {
    setViewport({
      width: "100%",
      height: "100%",
      latitude: 0,
      longitude: 0,
      zoom: 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);

  const dispatch = useDispatch();
  const classes = useStyles();
  const currentBoard = useSelector(selectCurrentBoard);
  const isLoaded = useSelector(selectInfoLoader);
  const countries = useSelector(filteredCountries);
  const currentParametr = useSelector(selectParameter);
  const currentCountryInfo = useSelector(getCurrentCountryInfo);
  const markerSize = useSelector(markerSizeByCountries);

  useEffect(() => {
    if (currentCountryInfo) {
      const newViewport = {
        width: "100%",
        height: "100%",
        longitude: currentCountryInfo.geometry[1],
        latitude: currentCountryInfo.geometry[0],
        zoom: 3,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
      };

      setViewport(newViewport);
    }
  }, [currentCountryInfo]);

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 3 ? classes.open : ""}`}
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
        <>
          <Legend data={MARKER_COLORS} />
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          >
            {countries.map((country) => {
              let size = 15;
              let { color } = MARKER_COLORS[0];
              if (country.Cases >= markerSize.div2) {
                size = 55;
                color = MARKER_COLORS[2].color;
              } else if (
                country.Cases < markerSize.div2 &&
                country.Cases >= markerSize.div
              ) {
                size = 35;
                color = MARKER_COLORS[1].color;
              }

              return (
                <Marker
                  key={country.Code}
                  longitude={country.Geometry[1]}
                  latitude={country.Geometry[0]}
                >
                  <Box
                    className={classes.marker}
                    style={{
                      backgroundColor: color,
                      height: size,
                      width: size,
                    }}
                    onClick={() => dispatch(setCountry(country.Code))}
                    onMouseEnter={() => setTooltip(country)}
                    onMouseLeave={() => setTooltip(null)}
                  />
                </Marker>
              );
            })}

            {tooltip && (
              <Tooltip currentParametr={currentParametr} country={tooltip} />
            )}

            <Box className={classes.mapNav}>
              <NavigationControl
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
              />
            </Box>
          </ReactMapGL>
        </>
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};
