import React from "react";

const Weather = props => {
  return (
    <div className="weather-info">
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city} {props.region} {props.country}
        </span>
      </p>
      <p className="weather__key">
        Temperature: <span className="weather__value">{props.temperature}</span>
      </p>
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.humidity}</span>
      </p>
      <p className="weather__key">
        Localtime: <span className="weather__value">{props.localtime}</span>
      </p>
      <p className="weather__key">
        Wind Velocity:{" "}
        <span className="weather__value">{props.windVelocity}</span>
      </p>
      <p className="weather__error">{props.error}</p>
    </div>
  );
};
export default Weather;
