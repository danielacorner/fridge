import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import theme from "../Theme";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }

  handleCloseSignIn = () => {
    this.setState({ showSignIn: false });
  };
  handleCloseSignUp = () => {
    this.setState({ showSignUp: false });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Fridge app!</h1>
        <Button
          variant="contained"
          color={theme.primary}
          onClick={() => this.setState({ showSignUp: true })}
        >
          Sign Up
        </Button>
        <Dialog
          open={this.state.showSignUp}
          onClose={this.handleCloseSignUp}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="username"
              label="Username"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Confirm Password"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSignUp} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseSignUp} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="outlined"
          onClick={() => this.setState({ showSignIn: true })}
        >
          Sign In
        </Button>
        <Dialog
          open={this.state.showSignIn}
          onClose={this.handleCloseSignIn}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSignIn} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseSignIn} color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
