import React from "react";
import axios from "axios";
import styled from "styled-components";

class WeatherDetails extends React.Component {
  state = {
    current: {},
    location: {},
    isLoading: false
  };
  handleFetchWeather = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        "https://api.apixu.com/v1/current.json?key=a5566985f1b740e0aec84050192102&q=Paris"
      );
      this.setState({ ...response.data, isLoading: false });
      console.log(response);
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }

    // this.setState({ weather: response.data });
    // console.log(response);
    // console.log("Hello");
  };

  render() {
    if (this.state.isLoading) {
      return "wait";
    }
    return (
      <Container>
        <div>
          <button onClick={this.handleFetchWeather}>
            {this.state.location.name} now feels like{" "}
            {this.state.current.feelslike_c}
          </button>
        </div>
      </Container>
    );
  }
}
export default WeatherDetails;

const Container = styled.div`
  flex: 7;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 32px;
`;
