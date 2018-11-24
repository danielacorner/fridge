import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import styled from 'styled-components';
import { theme } from '../App';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360;
  background-color: ${theme.color};
`;

function Todos(props) {
  const { classes } = props;
  return (
    <>
      <ListWrapper>
        <List>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </ListWrapper>
      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={classes.button}
      >
        <AddIcon />
      </Button>
    </>
  );
}

export default Todos;
