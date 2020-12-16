import React from 'react';
import Grid from '@material-ui/core/Grid';
import CountriesList from '../../Components/countries-list';
import GlobalCases from '../../Components/global-cases';
import Map from '../../Components/map';
import GlobalTable from '../../Components/global-table';
import CaseChart from '../../Components/case-chart';
import {useStyles} from './styles';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={12} className={classes.item}>
        <GlobalCases/>
        <CountriesList />
      </Grid>
      <Grid item md={5} xs={12} className={classes.item}>
        <Map />
      </Grid>
      <Grid item md={4} xs={12} className={classes.item}>
        <GlobalTable />
        <CaseChart />
      </Grid>
    </Grid>
  );
}
