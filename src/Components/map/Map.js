/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../../redux/currentCountrySlice';
import { selectAllCountries } from '../../redux/covidInfoSlice';
import ReactMapGL, { Marker, NavigationControl, Layer } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Spinner from '../spinner';
import Tooltip from '../tooltip';
import Legend from '../legend';
import { useStyles } from './styles';

const TOKEN = 'pk.eyJ1IjoiY2hvdGluZWMiLCJhIjoiY2s1dXIxbDEyMDNqazNybGwzcTBydmdybyJ9.E0ZzR-BquMw7y5WGatf6XQ';

export const Map = () => {
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  window.addEventListener('resize', () => {
    setViewport({
      width: "100%",
      height: "100%",
      latitude: 0,
      longitude: 0,
      zoom: 1,
    });
  });

  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoaded = useSelector(state => state.covidInfo.loading);
  const countries = useSelector(selectAllCountries);

  const counts = countries.map((country) => country.TotalConfirmed);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);
  const diff = maxCount - minCount;
  const div = diff * 0.2;
  const div2 = diff * 0.8;

  const colors = [
    {name: 'weak', color:'rgba(5, 155, 247, 0.7)'},
    {name: 'medium', color: 'rgba(53,211,156,0.7)'},
    {name: 'large', color: 'rgba(230, 0, 0, 0.7)'},
  ];

  const handleMarkerClick = (country) => {
    setTooltip(country);
    dispatch(setCountry(country.CountryCode));
  }

  return (
    <Paper className={classes.root} square>
      {
        isLoaded === 'idle' ?
        <>
          <Legend data={colors} />
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={nextViewport => setViewport(nextViewport)}
          >
          {countries.map((country) => {
            let size = 15;
            let color = colors[0].color;
            if (country.TotalConfirmed >= div2) {
              size = 55;
              color = colors[2].color;
            } else if (country.TotalConfirmed < div2 && country.TotalConfirmed >= div) {
              size = 35;
              color = colors[1].color;
            }

            return (
              <Marker
                key={country.CountryCode}
                longitude={country.geometry[1]}
                latitude={country.geometry[0]}
              >
                <Box
                  className={classes.marker}
                  style={{
                    backgroundColor: color,
                    height: size,
                    width: size,
                  }}
                  onClick={() => handleMarkerClick(country)}
                />
              </Marker>
            );
          })}

          {tooltip && (
            <Tooltip
              country={tooltip}
              handleCloseTooltip={() => setTooltip(null)}
            />
          )}

          <Box className={classes.mapNav}>
            <NavigationControl
              onViewportChange={nextViewport => setViewport(nextViewport)}
            />
          </Box>
        </ReactMapGL>
        </>
        
      : <Spinner />
      }  
    </Paper>
  );
}
