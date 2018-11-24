import React, { Component } from 'react';
import { Router } from '@reach/router';
import Todos from './components/Todos';
import Fridge from './components/Fridge';
import Meals from './components/Meals';
import Navbar from './components/Navbar';

export const theme = {
  color: 'limegreen'
};

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Todos path="/" />
          <Fridge path="fridge" />
          <Meals path="meals" />
          {/* <Recipes path="recipes" /> */}
        </Router>
        <Navbar />
      </>
    );
  }
}

export default App;
