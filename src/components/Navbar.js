import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//import Icon from "@material-ui/core/Icon";
import { FormatListBulleted, Inbox, RestaurantMenu } from "@material-ui/icons/";
// import RestaurantMenu from '@material-ui/icons/RestaurantMenu'
import styled from "styled-components";
import { navigate } from "@reach/router";

const NavWrapper = styled.div`
  .bottomNavigation {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

class Navbar extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
    navigate(`/${value}`);
  };

  render() {
    const { value } = this.state;

    return (
      <NavWrapper>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className="bottomNavigation"
        >
          <BottomNavigationAction
            label="Todos"
            value=""
            icon={<FormatListBulleted />}
          />
          <BottomNavigationAction
            label="Fridge"
            value="fridge"
            icon={<Inbox />}
          />
          <BottomNavigationAction
            label="Meals"
            value="meals"
            icon={<RestaurantMenu />}
          />
          {/* <BottomNavigationAction
            label="Recipes"
            value="recipes"
            icon={<Icon>folder</Icon>}
          /> */}
        </BottomNavigation>
      </NavWrapper>
    );
  }
}

export default Navbar;
