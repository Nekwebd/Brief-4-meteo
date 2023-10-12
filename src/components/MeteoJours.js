import React, { useState, useEffect } from "react";
import axios from "axios";
import format from "date-fns/format";

function MeteoJours() {
    const [weather, setWeather] = useState({});
  
    
  
    useEffect(() => {
      async function getApi() {
        try {
          const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto"
          );
       
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


      <div className="w-5/6 max-w-2xl m-auto mt-10">
        {weather && weather.current && weather.daily && weather.daily.time && (
          <>
            <div className="flex flex-row justify-between gap-4 bg-gray-100 bg-opacity-50 border-2 border-gray-400 rounded-lg m-auto mt-10">
                <div>
                    <h2 className="font-bold text-lg pt-3">{format(toString(weather.daily.time[1]), "EEEE d MMMM yyyy")}</h2>
                </div>

                <div>
                <h2 className="font-bold text-xl pt-3">{weather.daily.time[2]}</h2>
                </div>

                <div>
                <h2 className="font-bold text-xl pt-3">{weather.daily.time[3]}</h2>
                </div>

                <div>
                <h2 className="font-bold text-xl pt-3">{weather.daily.time[4]}</h2>
                </div>

                <div>
                <h2 className="font-bold text-xl pt-3">{weather.daily.time[5]}</h2>
                </div>

                <div>
                <h2 className="font-bold text-xl pt-3">{weather.daily.time[6]}</h2>
                </div>

            </div>         
          </>
        )}
        
      </div>
    );
  }     
      

export default MeteoJours;