import React from 'react'

import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'

//if you use spread in the parent component then you will only get the
//elements of the array

const WeatherForecast = (weatherForecasts) => {
  
  const arrayFormWeatherForecasts = Object.values(weatherForecasts)
  return (
    <>
        {
            arrayFormWeatherForecasts.map( week => (
                <WeatherData week={week} />
            ))
        }
    </>
  )
}

export default WeatherForecast