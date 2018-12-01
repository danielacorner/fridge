import React, { Component } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Todos from "./components/Todos";
import Fridge from "./components/Fridge";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import User from "./components/User";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

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
          <User path="user" />
          <LandingPage path="welcome" />
          <SignIn path="signin" />
          <SignUp path="signup" />
          {/* <Recipes path="recipes" /> */}
        </Router>
        <Navbar />
      </AppBackground>
    );
  }
}

export default App;
