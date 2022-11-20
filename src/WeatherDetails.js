import React from "react";
import FormattedDate from "./FormattedDate";

import "./weatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-image">{props.data.icon}</div>
          <div className="float-left">
            <strong>{props.data.temperature}</strong>

            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/*export default function Temperature() {
  return (
    <div className="Temperature">
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-image">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny icon"
            />
          </div>
          <div className="float-left">
            <strong>19</strong>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}*/

/*import React, { useState } from "react";
import axios from "axios";

import "./temperature.css";

export default function Temperature(props) {
  const [loaded, setLoaded] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  //const [icon,setIcon] =useState(null);
  //const [description, setDescription] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.temperature.current);
    //setHumidity(response.data.temperature.humidity);
    //setWind(response.data.wind);
  }

  if (temperature) {
    return (
      <div className="Temperature">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-image">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny icon"
              />
            </div>
            <div className="float-left">
              <strong>{Math.round(temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: {wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "d0od434febbbf4261et13ad2f4f168da";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showLoaded);
    return <p>Loading...</p>;
  }
}
//lat={lat}&lon={lon}
<img
              src='http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png'
              alt="weather icon"
            />
*/
