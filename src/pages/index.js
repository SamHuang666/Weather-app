import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import BottomArea from "./BottomArea";
class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <WeatherDetails />
        <BottomArea />
        <ButtonStyled>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </ButtonStyled>
      </Container>
    );
  }
}
const Container = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
  flex: 1;
`;
const ButtonStyled = styled.div`
  display: flex;
  flex-direcation: column;
  justify-content: center;
  align-items: center;
`;
export default Dashboard;
