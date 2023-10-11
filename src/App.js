import React, {useEffect, useState} from 'react'
import GetWeather from "./components/Weather";
import { meteoApi } from './functions/functions'
import Prevision from "./components/Prevision";


function App() {

  const [meteo, setMeteo] = useState(null)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    meteoApi(setMeteo, setLoading)
  }, [])

  if (isLoading) {
    return (<div className='cont'>Loading...</div>);
  }

  return (
    <div>
      <GetWeather></GetWeather>
      <div className='prevJours'>
        <h2 className='titreSemaine'>Prévision prochains jours</h2>
        <div className='sectionPrevision'>
            {meteo.daily.time.slice(1).map((day, i) => (
                <Prevision key={i} time={day} tempMax={meteo.daily.temperature_2m_max[i + 1 ]} 
                tempUnit={meteo.daily_units.temperature_2m_max} weatherCode={meteo.daily.weathercode[i +1]} className='meteoSemaine'> </Prevision>
            ))}
            </div>
      </div>
    </div>
  )
}

export default App;
