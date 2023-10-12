import axios from "axios";

const meteoApi = async (temperature, loading) => {
    const peticion = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto');
    temperature(peticion.data);
    loading(false);
   
}

export{
    meteoApi
}