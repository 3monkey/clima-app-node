const axios = require('axios');
const key = '69f8a30ec9f31f7a5707bdb2a97ec764';
const getClima = async (lat, lon) => {

	let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
	if(res.length <= 0){
		throw new Error(`No hay resultados para las coordenadas, lat(${lat}, lon(${lon}))`);
	}

	let main = res.data.main;

	return {
		temp: main.temp
	};
}

module.exports = {
	getClima
}