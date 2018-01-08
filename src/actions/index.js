import axios from 'axios';

const API_KEY = '812efff64319efcd91edbc6cdeeb99f7';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const FetchWeather = (city) => {
	const url = `${URL}&q=${city},no&units=metric`;
	const request = axios.get(url);

	return {
		type: 'FETCH_WEATHER',
		payload: request,
	};
};
