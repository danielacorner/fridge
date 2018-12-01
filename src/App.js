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
import Profile from "./components/Profile";
import Firebase, { FirebaseContext } from "./services/Firebase";
import Admin from "./components/Admin";
import Settings from "./components/Settings";
import PasswordForget from "./components/PasswordForget";

import { PATHS } from './const/paths';

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
            <LandingPage path={PATHS.LANDING} />
            <SignIn path={PATHS.SIGN_IN} />
            <SignUp path={PATHS.SIGN_UP} />

            <Todos path={PATHS.TODOS} />
            <Fridge path={PATHS.FRIDGE} />
            <Meals path={PATHS.MEALS} />
            
            <Profile path={PATHS.USER_PROFILE} />
            <Settings path={PATHS.USER_SETTINGS} />
            <PasswordForget path={PATHS.PW_FORGET} />
            <Admin path={PATHS.ADMIN} />
            {/* <Recipes path="recipes} /> */}
            <NotFound default />
          </Router>
          <Navbar />
        </AppBackground>
      </FirebaseContext.Provider>
    );
  }
}

export default App;
