// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f61f855070mshe0785dcdfa64a49p1f8efejsn5e36db9058cd',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "3e004e26ef8fa6c5ad28bc350f1e9bd6";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }