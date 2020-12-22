import React from 'react';
import { Popup } from 'react-map-gl';
import { useStyles } from './styles';

const regex = /\B(?=(\d{3})+(?!\d))/g;

export const Tooltip = ({ currentParametr, country, handleCloseTooltip }) => {
  const classes = useStyles();

  const parameter = currentParametr.length > 0 ? currentParametr : 'TOTAl CASES';

  return (
    <Popup
      tipSize={0}
      longitude={country.Geometry[1]}
      latitude={country.Geometry[0]}
      closeButton={false}
      onClose={() => handleCloseTooltip()}
    >
      <div className={classes.mapTooltip}>
        <div className={classes.mapTooltipField}>
          <div
            className={classes.tooltipFlag}
            style={{ backgroundImage: `url(${country.Flag})` }}
          />
          <div className={classes.mapTooltipHeader}>{country.Country}</div>
        </div>

        <div className={classes.margin} />

        <div className={classes.mapTooltipField}>
          <div className={classes.mapTooltipLabel}>{parameter}:</div>
          <div className={classes.mapTooltipValue}>
            {country.Cases.toString().replace(regex, ',')}
          </div>
        </div>
      </div>
    </Popup>
  );
};
