import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import Todo from "./Todo";
import theme from "../Theme";

import { navigate } from "@reach/router";

import { PATHS } from '../const/paths';

import  { withFirebase } from '../services/Firebase';

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
    background-color: ${theme.primary};
    color: white;
  }
`;

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  async componentDidMount() {
    this.setState({
      items: (await this.props.firebase.getRandomUserItems()).items
    });
  }
  render() {
    return (
      <>
        <ListWrapper>
          <List>
            {Object.keys(this.state.items)
              .filter(itemId => !this.state.items[itemId].isPurchased)
              .map(itemId => (
              <div key={`todo-item-${itemId}`}>
                <Todo item={this.state.items[itemId]} />
                <Divider />
              </div>
            ))}
          </List>
        </ListWrapper>
        <Fab>
          <Button
            className="fab"
            variant="fab"
            color={theme.primary}
            aria-label="Add"
          >
            <AddIcon />
          </Button>
        </Fab>
      </>
    )
  }
}

export default withFirebase(Todos);