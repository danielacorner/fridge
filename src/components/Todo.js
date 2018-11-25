import React from "react";
import ListItem from "@material-ui/core/ListItem";
// import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";

function Todo(props) {
  const { name, category } = props.item
  return (
    <ListItem >
      <ListItemText primary={name} secondary={category} />
    </ListItem>
  );
}

export default Todo;
