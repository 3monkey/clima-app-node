//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

let getInfo = async(direccion) => {
	try{
		let coors = await lugar.getLugarLatLng(argv.direccion);
		let temp  = await clima.getClima(coors.lat, coors.ln);

		return `El clima en ${coors.direccion} es de ${temp.temp}`;
	}catch(e){
		return `No se pudo determinar el clima en ${direccion}`;
	}
}

getInfo(argv.direccion)
	.then(res => console.log(res))
	.catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
	.then(res => {
		console.log(res);
	})
	.catch(e => console.log(e));

clima.getClima(40.4167754,-3.7037902)
	.then(res => {
		console.log(res);
	})	
	.catch(e => console.log(e));*/


/*//ZERO_RESULTS
let encodeUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
	.then(res => {
		//console.log(JSON.stringify(res.data, undefined, 2));
		//console.log(res.data);
		//console.log(res.status);
		let location = res.data.results[0];
		let coordenadas = location.geometry.location;
		console.log(`Dirección: ${location.formatted_address}`);
		console.log(`Lat: ${coordenadas.lat}`);
		console.log(`Lng: ${coordenadas.lng}`);

	})
	.catch(e => console.log('ERROR!!!', e))*/