import { set } from './covidInfoSlice';
import { setCountry } from './currentCountrySlice';
import { apiRequest } from '../services/api';

export const fetchCovidInfo = () => async dispatch => {
const apiResponse = await apiRequest('https://api.covid19api.com/summary');
console.log(apiResponse);
dispatch(set(apiResponse));
}

export const fetchCurrentCountry = (country) => async dispatch => {
const apiResponse = await apiRequest(`https://api.covid19api.com/country/${country}`);
dispatch(setCountry(apiResponse));
}
