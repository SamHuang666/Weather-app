import React from "react";

const Weather = props => {
  return (
    <div className="weather-info">
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city} {props.country}
        </span>
      </p>
      <p className="weather__key">
        Temperature: <span className="weather__value">{props.temperature}</span>
      </p>
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.humidity}</span>
      </p>
      {/* <p className="weather__key">
        Conditions: <span className="weather__value">{props.condition}</span>
      </p> */}
      <p className="weather__error">{props.error}</p>
    </div>
  );
};
export default Weather;
