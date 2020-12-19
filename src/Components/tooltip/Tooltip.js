import React from "react";
import { Popup } from "react-map-gl";
import { useStyles } from './styles';

export const Tooltip = ({country, handleCloseTooltip}) => {
  const classes = useStyles();

  return (
    <Popup
      tipSize={0}
      longitude={(country.geometry)[1]}
      latitude={(country.geometry)[0]}
      closeButton={false}
      onClose={() => handleCloseTooltip()}
    >
      <div className={classes.mapTooltip}>
        <div className={classes.mapTooltipField}>
          <div
            className={classes.tooltipFlag}
            style={{ backgroundImage: `url(${country.flag})` }}
          />
          <div className={classes.mapTooltipHeader}>{country.Country}</div>
        </div>

        <div className={classes.margin} />

        <div className={classes.mapTooltipField}>
          <div className={classes.mapTooltipLabel}>Total:</div>
          <div className={classes.mapTooltipValue}>{country.TotalRecovered}</div>
        </div>
      </div>
    </Popup>
  );
}
