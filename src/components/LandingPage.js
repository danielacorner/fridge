import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import theme from "../Theme";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Fridge app!</h1>
        <Button variant="contained" color={theme.primary} href="/signup">
          Sign Up
        </Button>
        <Button variant="outlined" href="/signin">
          Sign In
        </Button>
      </div>
    );
  }
}
