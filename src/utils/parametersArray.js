import { parameters } from '../constants';
import { calculationPer100 } from './filter';

export const getParametersArr = info => {
  const parametersArray = [
    [parameters.totalCases, info.TotalConfirmed],
    [parameters.totalDeaths, info.TotalDeaths],
    [parameters.totalRecovered, info.TotalRecovered],
    [parameters.lastDayCases, info.NewConfirmed],
    [parameters.lastDayDeaths, info.NewDeath],
    [parameters.lastDayRecovered, info.NewRecovered],
    [
      parameters.totalCases100,
      calculationPer100(
        info.TotalConfirmed,
        info.population || info.worldPopulation,
      ),
    ],
    [
      parameters.totalDeath100,
      calculationPer100(
        info.TotalDeaths,
        info.population || info.worldPopulation,
      ),
    ],
    [
      parameters.totalRecovered100,
      calculationPer100(
        info.TotalRecovered,
        info.population || info.worldPopulation,
      ),
    ],
    [
      parameters.lastDayCases100,
      calculationPer100(
        info.NewConfirmed,
        info.population || info.worldPopulation,
      ),
    ],
    [
      parameters.lastDayDeaths100,
      calculationPer100(
        info.NewDeaths,
        info.population || info.worldPopulation,
      ),
    ],
    [
      parameters.lastDayRecovered100,
      calculationPer100(
        info.NewRecovered,
        info.population || info.worldPopulation,
      ),
    ],
  ];
  return parametersArray;
};
