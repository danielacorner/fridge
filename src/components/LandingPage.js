import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import theme from "../Theme";
import { navigate } from "@reach/router";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "welcome"
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    navigate(`/${value}`);
  };
  //Routing doesn't quite work, needs to figure this out later

  render() {
    return (
      <div>
        <h1>Welcome to Fridge app!</h1>
        <Button
          variant="contained"
          color={theme.primary}
          onClick={this.handleChange}
          value="signup"
        >
          Sign Up
        </Button>
        <Button variant="outlined" onClick={this.handleChange} value="signin">
          Sign In
        </Button>
      </div>
    );
  }
}
