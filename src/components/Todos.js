import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
//import { theme } from "../App";

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360;
  background-color: "limegreen";
`;

const Fab = styled.div`
  position: absolute;
  bottom: 80px;
  right: 24px;
`;

function Todos(props) {
  return (
    <>
      <ListWrapper>
        <List>
          <ListItem>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </ListWrapper>
      <Fab>
        <Button variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </Fab>
    </>
  );
}

export default Todos;
