import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../services/api";

const TOAST_PARAMS = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

toast.configure();

export const fetchChartData = createAsyncThunk(
  "chartInfo/fetch",
  async (country) => {
    try {
      let result;
      if (!country) {
        result = await apiRequest("https://covid19-api.org/api/timeline");
      } else {
        result = await apiRequest(
          `https://covid19-api.org/api/timeline/${country}`
        );
      }
      return result;
    } catch (e) {
      toast.error(
        "API chart data error. Please reload the page or try later.",
        TOAST_PARAMS
      );
      throw e;
    }
  }
);

export const fetchCovidInfo = createAsyncThunk("covidInfo/set", async () => {
  try {
    const apiResponse = await apiRequest("https://api.covid19api.com/summary");
    const additionalInfo = await apiRequest(
      "https://restcountries.eu/rest/v2/all?fields=alpha2Code;population;flag;latlng"
    );
    const countries = apiResponse.Countries;
    const extendCountriesList = countries.map((item) => {
      const countryId = additionalInfo.findIndex(
        (el) => el.alpha2Code === item.CountryCode
      );
      const extendCountry = {
        ...item,
        flag: additionalInfo[countryId].flag,
        population: additionalInfo[countryId].population,
        geometry: additionalInfo[countryId].latlng,
      };
      return extendCountry;
    });
    const worldPopulation = additionalInfo.reduce(
      (acc, item) => acc + item.population,
      0
    );
    return {
      Global: { ...apiResponse.Global, worldPopulation },
      Countries: extendCountriesList,
      Date: apiResponse.Date,
    };
  } catch (e) {
    toast.error(
      "API Covid info error. Please reload the page or try later.",
      TOAST_PARAMS
    );
    throw e;
  }
});
