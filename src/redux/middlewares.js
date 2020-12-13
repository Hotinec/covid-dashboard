import { set } from './covidInfoSlice';
import { apiRequest } from '../services/api';

export const fetchCovidInfo = () => async dispatch => {
const apiResponse = await apiRequest('https://api.covid19api.com/summary');
dispatch(set(apiResponse.Countries));
}