import React from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
// import styled from "styled-components";
// import GuttersGrid from "./components/style";

class App extends React.Component {
  state = {
    current: {},
    location: {},
    // condition: {},
    // forecast: {},
    isLoarding: false
  };
  getWeather = async e => {
    this.setState({ isLoarding: true });
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const response = await axios(`https://api.apixu.com/v1/current.json?key=a5566985f1b740e0aec84050192102&q=${city},${country}
    `);
      const future = await axios(
        `https://api.apixu.com/v1/forecast.json?key=a5566985f1b740e0aec84050192102&q=${city},${country}`
      );

      console.log(response);
      console.log(future);
      this.setState({
        // current: response.data.current,
        // loaction: response.data.location,
        // condition: response.data.condition,
        // focarecast: future.data.focarecast,
        ...response.data,
        ...future.data,
        isLoarding: false
      });
    } catch (error) {
      console.log(error);
      this.setState({ isLoarding: false });
    }
  };
  render() {
    if (this.state.isLoarding) return "Please wait..";
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.current.temp_c}
                    city={this.state.location.name}
                    country={this.state.location.country}
                    humidity={this.state.current.humidity}
                    region={this.state.location.region}
                    localtime={this.state.location.localtime}
                    windVelocity={this.state.current.wind_kph}
                    // condition={this.state.condition.toString()}
                    // forecast={this.state.forecast.forecastday}
                    // condition={this.state.current.condition}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
// const Header = styled.div`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   margin: 32px;
// `;
// const WeatherArea = styled.div`
//   flex: 6;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
// `;
// const BottomArea = styled.div`
//   flex: 3;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
// `;

// const Container = styled.div`
//   background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   align-items: stretch;
// `;
