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
import { withFirebase } from "./services/Firebase";
import Admin from "./components/Admin";
import Settings from "./components/Settings";
import PasswordForget from "./components/PasswordForget";


import { navigate } from "@reach/router";

import { PATHS } from './const/paths';

const AppBackground = styled.div`
  height: 100vh;
  background: #eeeeee;
`;

const NotFound = () => <div>Sorry, nothing here.</div>;

const NON_AUTH_PATHS = [ PATHS.SIGN_IN, PATHS.SIGN_UP, PATHS.PW_FORGET ];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }


  componentDidUpdate () {
    if(this.state.authUser === null && !NON_AUTH_PATHS.includes(window.location.pathname) ) {
      navigate(PATHS.LANDING);
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    const { authUser } = this.state;
    return (
        <AppBackground>
          <Router>
            <LandingPage path={PATHS.LANDING} authUser={authUser} />
            <SignIn path={PATHS.SIGN_IN} authUser={authUser} />
            <SignUp path={PATHS.SIGN_UP} />

            <Todos path={PATHS.TODOS} authUser={authUser} />
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
    );
  }
}

export default withFirebase(App);
