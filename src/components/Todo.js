import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';

function Todo(props) {
  const { name, category } = props.item;
  return (
    <ListItem >
      <ListItemText primary={ name } secondary={ category } />
    </ListItem>
  );
}

Todo.propTypes = {
  item: PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string
  })
};

export default Todo;
