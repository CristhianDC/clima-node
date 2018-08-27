const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9a2995403c57551224cd655208d1e95c`)
    
    if(resp.data.code === 400){
        throw new Error(`No hay clima para este lugar!`);
    }
    
    return resp.data.main.temp;
}
module.exports = {
    getClima
}