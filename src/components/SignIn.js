import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from '@material-ui/core/Card';

import { navigate } from "@reach/router"

import { withFirebase } from '../services/Firebase';
import { PATHS } from '../const/paths';
import styled from 'styled-components';


const BackgroundWrapper = styled.div`
  background:#eee;
`

const CardWrapper = styled(Card)`
  max-width: 500px;
  padding:1vw;
  margin: auto;
  background:#eee;

`
const INITIAL_STATE = {
  name: '',
  email: '',
  username: '',
  password: '',
  error: null,
  msg: ''
}


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.firebase.userSignIn(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        navigate(PATHS.TODOS);
      }).catch(error => {
        this.setState({ error })
      });

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  goBack = (e) => {
    e.preventDefault();
    navigate(PATHS.LANDING);
  }
  render() {

    const {
      name,
      email,
      username,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const invalid = ((name === '') || (email === '') || (username === '') || (passwordOne === '') || (passwordTwo === '') || (passwordOne !== passwordTwo));
    return (
      <BackgroundWrapper>
        <CardWrapper>
          <form onSubmit={this.onSubmit}>
            <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <TextField margin="dense" name="email" label="Email" type="email" onChange={this.onChange} fullWidth autoFocus />
              <TextField margin="dense" name="password" label="Password" type="text" onChange={this.onChange} fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.goBack} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Sign In
              </Button>
            </DialogActions>
          </form>
          {error && <p>{error.message}</p>}
        </CardWrapper>
      </BackgroundWrapper>
    );
  }
}

export default withFirebase(SignIn);