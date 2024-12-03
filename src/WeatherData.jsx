import React from 'react'
import WeatherIcon from './WeatherIcon'


const WeatherData = ({ week }) => {
  return (
    <ul>
        {
            <div className="weather">
                <h2>{week.day}</h2>
                {/* grand child component */}
                <WeatherIcon img={week.img} imgAlt={week.imgAlt} />
                <p><span>conditions: </span>{week.conditions}</p>
                <p><span>time: </span>{week.time}</p>
        </div>
        }
    </ul>
  )
}

export default WeatherData