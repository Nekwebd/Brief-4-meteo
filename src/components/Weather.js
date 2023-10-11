import React, { useState, useEffect } from "react";
import axios from "axios";
import { TEMP, weatherCodeEmoji, WIND } from "./Emojis";
import formatTime from "./Heure";

function GetWeather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto"
        );
        console.log(response.data);
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, []);

  if (weather.data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 bg-opacity-50 border-2 border-gray-400 rounded-lg w-5/6 max-w-2xl m-auto mt-10">
      {weather && weather.current && weather.daily && (
        <>
          <div id="titre" className="text-center">
            <h1 className="font-bold text-4xl pt-3">Roubaix</h1>
            <p>
              Lat : {weather.latitude} Long : {weather.longitude}
            </p>
          </div>

          <div id="card meteo" className="grid grid-cols-2 m-5 ">
            <span className="flex flex-col justify-evenly">
              <p className=" text-9xl align-middle text-center border-r-2 border-gray-400">{weatherCodeEmoji[weather.current.weathercode]}</p>
              <p className=" text-4xl align-middle text-center pt-4 border-r-2 border-gray-400">
                {TEMP} : {weather.current.temperature_2m}°C{" "}
              </p>
            </span>
            <span className="flex flex-col text-2xl justify-evenly text-center">
              <p>Lever de soleil : {formatTime(weather.daily.sunrise[0])}</p>
              <p>Coucher de soleil : {formatTime(weather.daily.sunset[0])}</p>
              <p>
                {WIND} : {weather.current.windspeed_10m} km/h
              </p>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default GetWeather;
