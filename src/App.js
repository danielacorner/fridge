/* global window */
import { navigate, Router } from '@reach/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Admin from './components/Admin';
import Fridge from './components/Fridge';
import LandingPage from './components/LandingPage';
import Meals from './components/Meals';
import Navbar from './components/Navbar';
import PasswordForget from './components/PasswordForget';
import Profile from './components/Profile';
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Todos from './components/Todos';
import { PATHS } from './const/paths';
import { withFirebase } from './services/Firebase';

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
    if(this.state.authUser === null && !NON_AUTH_PATHS.includes(window.location.pathname)) {
      navigate(PATHS.LANDING);
    }
    /* Add listener to food item changes */
    if(this.state.authUser !== null && this.foodListRef === undefined) {
      this.foodListRef = this.props.firebase.app.database().ref(`${ this.props.firebase.PATHS.FOOD_LIST }/${ this.state.authUser.uid }`).on('value', (snapshot) => {
        this.setState((state) => {
          return {
            authUser: {
              ...state.authUser,
              items: snapshot.val()
            }
          };
        });
      });
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? this.setState({
          authUser: {
            uid: authUser.uid,
            displayName: authUser.displayName,
            providerData: authUser.providerData,
            photoURL: authUser.photoURL
          }
        }) : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
    this.props.firebase.app.database().ref.off('value', this.foodListRef);
  }
  render() {
    const { authUser } = this.state;
    return (
      <AppBackground>
        <Router>
          <LandingPage path={ PATHS.LANDING } authUser={ authUser } />
          <SignIn path={ PATHS.SIGN_IN } authUser={ authUser } />
          <SignUp path={ PATHS.SIGN_UP } />
          <Todos path={ PATHS.TODOS } authUser={ authUser } />
          <Fridge path={ PATHS.FRIDGE } authUser={ authUser } />
          <Meals path={ PATHS.MEALS } />

          <Profile path={ PATHS.USER_PROFILE } />
          <Settings path={ PATHS.USER_SETTINGS } />
          <PasswordForget path={ PATHS.PW_FORGET } />
          <Admin path={ PATHS.ADMIN } />
          {/* <Recipes path="recipes} /> */}
          <NotFound default />
        </Router>
        <Navbar />
      </AppBackground>
    );
  }
}

App.propTypes = {
  firebase: PropTypes.shape({
    app: PropTypes.shape({
      database: PropTypes.func
    }),
    auth: PropTypes.shape({
      onAuthStateChanged: PropTypes.func
    }),
    PATHS: PropTypes.shape({
      FOOD_LIST: PropTypes.string
    })
  })
};

export default withFirebase(App);
