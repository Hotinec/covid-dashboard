import axios from 'axios';

const COUNTRIES_DATA_URL = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;';

export const setCountriesData = (payload) => ({
  type: 'SET_COUNTRIES_DATA',
  payload
});

export const fetchCountriesData = () => (dispatch) => {
  axios.get(COUNTRIES_DATA_URL).then(({ data }) => {
    dispatch(setCountriesData(data));
  });
}
