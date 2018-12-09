import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../services/Firebase';
import theme from '../Theme';
import Todo from './Todo';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360;
  background-color: "limegreen";
`;

const Fab = styled.div`
  position: absolute;
  bottom: 80px;
  right: 24px;
  button {
    background-color: ${ theme.primary };
    color: white;
  }
`;

class Fridge extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      items: []
    };
  }
  async componentDidMount() {
    this.setState( {
      items: ( await this.props.firebase.getRandomUserItems() ).items
    } );
  }
  render() {
    return (
      <>
        <ListWrapper>
          <List>
            {Object.keys( this.state.items )
              .filter( itemId => this.state.items[ itemId ].isPurchased )
              .map( itemId => (
                <div key={ `todo-item-${ itemId }` }>
                  <Todo item={ this.state.items[ itemId ] } />
                  <Divider />
                </div>
            ) )}
          </List>
        </ListWrapper>
        <Fab>
          <Button
            className="fab"
            variant="fab"
            color={ theme.primary }
            aria-label="Add"
          >
            <AddIcon />
          </Button>
        </Fab>
      </>
    );
  }
}

Fridge.propTypes = {
  firebase: PropTypes.shape( {
    getRandomUserItems: PropTypes.func
  } )
};

export default withFirebase( Fridge );