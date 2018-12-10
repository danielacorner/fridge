import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PATHS } from '../const/paths';
import { withFirebase } from '../services/Firebase';

class Profile extends Component {
  handleSignOut = e => {
    this.props.firebase.userSignOut();
    navigate(PATHS.LANDING);
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={ this.handleSignOut }>
          Sign Out
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  firebase: PropTypes.shape({
    userSignOut: PropTypes.func
  })
};

export default withFirebase(Profile);
