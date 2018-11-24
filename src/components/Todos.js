import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import Todo from "./Todo";
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

const fakeState = { todos: [1, 2, 3] };

function Todos(props) {
  return (
    <>
      <ListWrapper>
        <List>
          {fakeState.todos.map(todo => (
            <>
              <Todo />
              <Divider />
            </>
          ))}
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
