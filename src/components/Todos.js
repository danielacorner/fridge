import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { withFirebase } from '../services/Firebase';
import AddItem from './AddItem';
import Todo from './Todo';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360;
  background-color: "limegreen";
`;

const Todos = (props) => {
  return (
    <>
      <ListWrapper>
        <List>
          {(props.authUser && props.authUser.items) && Object.keys(props.authUser.items)
            .filter(itemId => !props.authUser.items[ itemId ].isPurchased)
            .map(itemId => (
              <div key={ `todo-item-${ itemId }` }>
                <Todo item={ props.authUser.items[ itemId ] } />
                <Divider />
              </div>
            ))}
        </List>
      </ListWrapper>
      <AddItem uid={ props.authUser && props.authUser.uid }/>
    </>
  );
};

Todos.propTypes = {
  firebase: PropTypes.shape({
      getRandomUserItems: PropTypes.func
  })
};

export default withFirebase(Todos);