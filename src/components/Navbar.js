import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  FormatListBulleted,
  Kitchen,
  RestaurantMenu,
  AccountCircle
} from "@material-ui/icons/";
import styled from "styled-components";
import { navigate, Location } from "@reach/router";


import { PATHS } from '../const/paths';


const BLACKLISTED_PAGES = [ PATHS.LANDING, PATHS.SIGN_IN, PATHS.SIGN_UP, PATHS.PW_FORGET ]

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
      <Location>
        {props => {
          console.log(props.location.pathname)
          return !BLACKLISTED_PAGES.includes(props.location.pathname) && (
            <NavWrapper>
              <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className="bottomNavigation"
              >
                <BottomNavigationAction
                  label="ToDos"
                  value=""
                  icon={<FormatListBulleted />}
                />
                <BottomNavigationAction
                  label="Fridge"
                  value="fridge"
                  icon={<Kitchen />}
                />
                <BottomNavigationAction
                  label="Meals"
                  value="meals"
                  icon={<RestaurantMenu />}
                />
                <BottomNavigationAction
                  label="User"
                  value="user"
                  icon={<AccountCircle />}
                />
                {/* <BottomNavigationAction
                  label="Recipes"
                  value="recipes"
                  icon={<Icon>folder</Icon>}
                /> */}
              </BottomNavigation>
            </NavWrapper>
          )
        }}
      </Location>
    );
  }
}

export default Navbar;
