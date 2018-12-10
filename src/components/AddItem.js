import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../services/Firebase';
import theme from '../Theme';

const Fab = styled.div`
  position: absolute;
  bottom: 80px;
  right: 24px;
  button {
    background-color: ${ theme.primary };
    color: white;
    :hover {
      background-color: ${ theme.accent };
    }
  }
`;

const CardWrapper = styled(Card)`
position: absolute;
max-width: 500px;
padding:1vw;
margin: auto;
background:#eee;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const datePickerTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: theme.primary,
      }
    },
    MuiPickersDay: {
      day: {
        color: theme.primary,
      },
      selected: {
        backgroundColor: theme.third,
        '&:hover': {
          backgroundColor: theme.accent,
        },
      },
      current: {
        color: theme.accent,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: theme.primary,
      },
    },
  },
});

const CheckboxWrapper = styled.div`
  margin-left: -15px;
`;

const INITIAL_STATE = {
  modalOpen: false,
  name: '',
  category: '',
  isPurchased: false,
  datePurchased: new Date()
};

class AddItem extends Component {
  state = { ...INITIAL_STATE }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({ modalOpen: false })

  onChange = e => this.setState({ [ e.target.name ]: e.target.value })

  onToggle = e => {
    const elName = e.target.name;
    this.setState((state) => ({ [ elName ]: !state[ elName ] }));
  }
  onDateChange = datePurchased => this.setState({ datePurchased })

  onSubmit = e => {
    e.preventDefault();
    const { name, category, isPurchased, datePurchased } = this.state;
    this.props.firebase.createFoodItemWithUid(this.props.uid, { name, category, isPurchased, datePurchased });
    this.handleModalClose();

  }
  render() {
    const { name, category, isPurchased, datePurchased } = this.state;
    const inputIncomplete = (name === INITIAL_STATE.name) || (category === INITIAL_STATE.category);
    return (
      <>
        <Fab>
          <Button
            className="fab"
            variant="fab"
            color={ theme.primary }
            aria-label="Add"
            onClick={ this.handleModalOpen }
          >
            <AddIcon />
          </Button>
        </Fab>
        <Modal open={ this.state.modalOpen } onClose={ this.handleModalClose }>
          <CardWrapper>
            <form onSubmit={ this.onSubmit }>
              <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
              <DialogContent>
                <TextField margin="dense" name="name" label="Name" type="text" onChange={ this.onChange } fullWidth autoFocus />
                <TextField margin="dense" name="category" label="Category" type="text" onChange={ this.onChange } fullWidth autoFocus />
                <CheckboxWrapper>
                  <Checkbox name="isPurchased" onChange={ this.onToggle } color="primary"/> is Purchased
                </CheckboxWrapper>
                {isPurchased &&
                <MuiThemeProvider theme={ datePickerTheme }>
                  <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                    <DatePicker value={ datePurchased } onChange={ this.onDateChange }/>
                  </MuiPickersUtilsProvider>
                </MuiThemeProvider>
              }
              </DialogContent>
              <DialogActions>
                <Button onClick={ this.handleModalClose } color="primary">
                Cancel
                </Button>
                <Button type="submit" color="primary" disabled={ inputIncomplete }>
                Add
                </Button>
              </DialogActions>
            </form>

          </CardWrapper>
        </Modal>
      </>
    );
  }
}

AddItem.propTypes = {
  uid: PropTypes.string,
  firebase: PropTypes.shape({
    createFoodItemWithUid: PropTypes.func
  }),
};

export default withFirebase(AddItem);