import React, { Component } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Todos from "./components/Todos";
import Fridge from "./components/Fridge";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";

const AppBackground = styled.div`
  height: 100vh;
  background: #eeeeee;
`;

class App extends Component {
  render() {
    return (
      <AppBackground>
        <Router>
          <Todos path="/" />
          <Fridge path="fridge" />
          <Meals path="meals" />
          {/* <Recipes path="recipes" /> */}
        </Router>
        <Navbar />
      </AppBackground>
    );
  }
}

export default App;
