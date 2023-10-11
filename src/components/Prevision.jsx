import React from 'react'
import { TEMP, weatherCodeEmoji, WIND } from "./Emojis";

const Prevision = (props) => {

  return (
      <div className='cardJour'>
        <div className='jour'>
          <p>{props.time}</p>
        </div>
        <div className='wheaterCode'>
          <p>{weatherCodeEmoji[props.weatherCode]}</p>
        </div>
        <div className='tempJour'>
          <p>{props.tempMax}°C</p>
        </div>
      </div>

  )
}

export default Prevision