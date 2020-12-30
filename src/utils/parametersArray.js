import { PARAMETERS } from "../constants";
import { calculationPer100 } from "./filter";

export const getParametersArr = (info) => {
  const parametersArray = [
    [PARAMETERS.totalCases, info.TotalConfirmed],
    [PARAMETERS.totalDeaths, info.TotalDeaths],
    [PARAMETERS.totalRecovered, info.TotalRecovered],
    [PARAMETERS.lastDayCases, info.NewConfirmed],
    [PARAMETERS.lastDayDeaths, info.NewDeath],
    [PARAMETERS.lastDayRecovered, info.NewRecovered],
    [
      PARAMETERS.totalCases100,
      calculationPer100(
        info.TotalConfirmed,
        info.population || info.worldPopulation
      ),
    ],
    [
      PARAMETERS.totalDeath100,
      calculationPer100(
        info.TotalDeaths,
        info.population || info.worldPopulation
      ),
    ],
    [
      PARAMETERS.totalRecovered100,
      calculationPer100(
        info.TotalRecovered,
        info.population || info.worldPopulation
      ),
    ],
    [
      PARAMETERS.lastDayCases100,
      calculationPer100(
        info.NewConfirmed,
        info.population || info.worldPopulation
      ),
    ],
    [
      PARAMETERS.lastDayDeaths100,
      calculationPer100(
        info.NewDeaths,
        info.population || info.worldPopulation
      ),
    ],
    [
      PARAMETERS.lastDayRecovered100,
      calculationPer100(
        info.NewRecovered,
        info.population || info.worldPopulation
      ),
    ],
  ];
  return parametersArray;
};
