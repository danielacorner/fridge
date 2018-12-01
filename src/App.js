import { Router } from "@reach/router";
import React, { Component } from "react";
import styled from "styled-components";
import Fridge from "./components/Fridge";
import LandingPage from "./components/LandingPage";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Todos from "./components/Todos";
import User from "./components/User";
import Firebase, { FirebaseContext } from "./services/Firebase";
import Admin from "./components/Admin";
import Account from "./components/Account";
import PasswordForget from "./components/PasswordForget";

const AppBackground = styled.div`
  height: 100vh;
  background: #eeeeee;
`;

const NotFound = () => <div>Sorry, nothing here.</div>;

class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <AppBackground>
          <Router>
            <Todos path="/" />
            <Fridge path="fridge" />
            <Meals path="meals" />
            <User path="user" />
            <LandingPage path="welcome" />
            <SignIn path="signin" />
            <SignUp path="signup" />
            <Account path="account" />
            <PasswordForget path="pw-forget" />
            <Admin path="admin" />
            {/* <Recipes path="recipes" /> */}
            <NotFound default />
          </Router>
          <Navbar />
        </AppBackground>
      </FirebaseContext.Provider>
    );
  }
}

export default App;
