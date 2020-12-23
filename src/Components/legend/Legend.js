import React from "react";
import { useStyles } from "./styles";

export const Legend = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.legend}>
      {data.map((item) => (
        <div className={classes.legendField} key={item.name}>
          <div
            className={classes.legendIcon}
            style={{ backgroundColor: item.color }}
          />
          <div className={classes.legendLabel}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
