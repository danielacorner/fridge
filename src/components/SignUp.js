import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from '@material-ui/core/Checkbox';

import { navigate } from "@reach/router"

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import { PATHS } from '../const/paths';
import { withFirebase } from '../services/Firebase';


const BackgroundWrapper = styled.div`
  background:#eee;
`

const CheckboxWrapper = styled.div`
  margin-left: -15px;
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
  passwordOne: '',
  passwordTwo: '',
  passwordType: 'password',
  error: null,
  msg: ''
}

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  onSubmit = e => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase.userCreate(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        navigate(PATHS.SIGN_IN)
      }).catch(error => {
        this.setState({ error })
        navigate(PATHS.LANDING)
      });

    e.preventDefault();
  }
  togglePassword = e => this.setState({ passwordType: e.target.checked ? 'text' : 'password' });

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    const {
      name,
      email,
      username,
      passwordOne,
      passwordTwo,
      passwordType,
      error,
    } = this.state;

    const invalid = ((name === '') || (email === '') || (username === '') || (passwordOne === '') || (passwordTwo === '') || (passwordOne !== passwordTwo));
    return (
      <BackgroundWrapper>
        <CardWrapper>
          <form onSubmit={this.onSubmit}>
            <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
            <DialogContent>
              <TextField margin="dense" label="Name" type="text" name="name" value={name} onChange={this.onChange} fullWidth autoFocus/>
              <TextField margin="dense" label="Username" type="text" name="username" value={username} onChange={this.onChange} fullWidth/>
              <TextField margin="dense" label="Email" type="email" name="email" value={email} onChange={this.onChange} fullWidth/>
              <TextField margin="dense" label="Password" type={passwordType} name="passwordOne" value={passwordOne} onChange={this.onChange} fullWidth/>
              <TextField margin="dense" label="Confirm Password" type={passwordType} name="passwordTwo" value={passwordTwo} onChange={this.onChange} fullWidth/>
              <CheckboxWrapper>
                <Checkbox onChange={this.togglePassword} color="primary"/> Show Password
              </CheckboxWrapper>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseSignUp} color="primary"  disabled={invalid}>
                Cancel
              </Button>
              <Button onClick={this.handleCloseSignUp} color="primary" type="submit" disabled={invalid}>
                Sign Up
              </Button>
              {error && <p>{error.message}</p>}
            </DialogActions>
          </form>
        </CardWrapper>
      </BackgroundWrapper>
    );
  }
}

export default withFirebase(SignUp);