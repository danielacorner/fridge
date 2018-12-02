import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";

import { withFirebase } from "../services/Firebase";
import { PATHS } from "../const/paths";

class Profile extends Component {
  handleSignOut = e => {
    this.props.firebase.userSignOut();
    navigate(PATHS.LANDING);
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleSignOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}

export default withFirebase(Profile);
