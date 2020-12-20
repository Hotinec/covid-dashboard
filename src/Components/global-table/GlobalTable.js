import React from "react";
import { GlobalCountries } from "./GlobalCountries";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import { InfoTable } from "./InfoTable";
import { Box } from "@material-ui/core";

export const GlobalTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square={true}>
      <Box display="flex" justifyContent="space-between">
        <GlobalCountries />
        <InfoTable />
      </Box>
    </Paper>
  );
}
