import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class SignUp extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
