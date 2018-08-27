const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
var colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obetener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
            let tempGreen = `${temp}°`;

        return `El clima en ${colors.yellow(coors.direccion)} es de ${colors.green(tempGreen)} C`;
    }catch(e) {
        return `No se pudo determinar el clima en ${colors.yellow(argv.direccion)}`
    }
    
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


//Esta es la forma mas larga de devolver una repuesta, arriba esta en promesas!!!!!!! 
//lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.lat, resp.lng)
//             .then(respClima => {
//                 let clima = `${respClima}°`;
//                 console.log()
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));

