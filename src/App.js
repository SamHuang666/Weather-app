import React from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
import styled from "styled-components";
// import GuttersGrid from "./components/style";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
  };
  getWeather = async e => {
    console.log(e);
    e.preventDefault();
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const response = await axios(`https://api.apixu.com/v1/current.json?key=a5566985f1b740e0aec84050192102&q=${city},${country}
    `);

    console.log(response);
    this.setState({
      ...response.data,
      error: "Sorry, please waiting..."
    });
  };
  render() {
    return (
      <Container>
        <Header>
          <Titles />
        </Header>
        <WeatherArea>
          <Form loadWeather={this.getWeather} />
        </WeatherArea>
        <BottomArea>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </BottomArea>
        {/* <GuttersGrid /> */}
      </Container>
    );
  }
}
export default App;
const Header = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 32px;
`;
const WeatherArea = styled.div`
  flex: 6;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;
const BottomArea = styled.div`
  flex: 3;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
`;

const Container = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;
