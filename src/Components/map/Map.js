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
  selectCurrentCountry,
  getCurrentCountryInfo,
} from "../../redux/currentCountrySlice";
import {
  filteredCountries,
  selectInfoLoader,
  selectCountryById,
} from "../../redux/covidInfoSlice";

import { selectCurrentBoard, setBoard } from "../../redux/currentBoardSlice";

import { selectParameter } from "../../redux/parameterSlice";

import "mapbox-gl/dist/mapbox-gl.css";
import Spinner from "../spinner";
import Tooltip from "../tooltip";
import Legend from "../legend";
import IconMenuButton from "../menu-icon-button";
import { useStyles } from "./styles";

const TOKEN =
  "pk.eyJ1IjoiY2hvdGluZWMiLCJhIjoiY2s1dXIxbDEyMDNqazNybGwzcTBydmdybyJ9.E0ZzR-BquMw7y5WGatf6XQ";

export const Map = () => {
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

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
  const currentCountry = useSelector(selectCurrentCountry);
  const currentCountryInfo = useSelector(getCurrentCountryInfo);

  const counts = countries.map((country) => country.Cases);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);
  const diff = maxCount - minCount;
  const div = diff * 0.2;
  const div2 = diff * 0.8;

  const colors = [
    { name: "weak", color: "rgba(5, 155, 247, 0.7)" },
    { name: "medium", color: "rgba(53,211,156,0.7)" },
    { name: "large", color: "rgba(230, 0, 0, 0.7)" },
  ];

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

  const resizeClickHandler = (e) => {
    if (currentBoard === 3) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(3));
  };

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
        onClick={(e) => resizeClickHandler(e)}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      {isLoaded === "idle" ? (
        <>
          <Legend data={colors} />
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          >
            {countries.map((country) => {
              let size = 15;
              let { color } = colors[0];
              if (country.Cases >= div2) {
                size = 55;
                color = colors[2].color;
              } else if (country.Cases < div2 && country.Cases >= div) {
                size = 35;
                color = colors[1].color;
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
