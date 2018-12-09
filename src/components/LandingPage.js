import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { PATHS } from '../const/paths';

const WelcomePage = styled.div`
  padding-top: calc(100vh / 2 - 164px);
`;

const Welcome = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

const LandingButtons = styled.div`
  margin-top: 36px;
  text-align: center;
  display: block;
`;

const LandingButton = styled.div`
  margin-top: 36px;
  display: block;
`;

class LandingPage extends Component {

  componentDidUpdate() {
    if( this.props.authUser ) {
      navigate( PATHS.TODOS );
    }
  }
  render() {
    return (
      <WelcomePage>
        <Welcome>Welcome to Fridge app!</Welcome>
        <LandingButtons>
          <LandingButton>
            <Button variant="contained" color="primary" href="/signup">
              Sign Up
            </Button>
          </LandingButton>
          <LandingButton>
            <Button variant="outlined" color="primary" href="/signin">
              Sign In
            </Button>
          </LandingButton>
        </LandingButtons>
      </WelcomePage>
    );
  }
}

LandingPage.propTypes = {
  authUser: PropTypes.object
};

export default LandingPage;