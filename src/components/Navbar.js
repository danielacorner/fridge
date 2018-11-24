import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Fridge"
            value="fridge"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Meals"
            value="meals"
            icon={<LocationOnIcon />}
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
