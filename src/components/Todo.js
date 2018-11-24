import React from "react";
import ListItem from "@material-ui/core/ListItem";
// import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";

function Todo(props) {
  return (
    <ListItem>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  );
}

export default Todo;
