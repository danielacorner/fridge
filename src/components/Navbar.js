import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle, FormatListBulleted, Kitchen, RestaurantMenu } from '@material-ui/icons/';
import { Location, navigate } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { PATHS } from '../const/paths';
import theme from '../Theme';

const BLACKLISTED_PAGES = [
  PATHS.LANDING,
  PATHS.SIGN_IN,
  PATHS.SIGN_UP,
  PATHS.PW_FORGET
];

const NavWrapper = styled.div`
  .bottomNavigation {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: ${ theme.primary };
  }
`;
const StyledNavAction = withStyles({
  wrapper: {
    width: '100%',
    position: 'absolute',
    // backgroundColor: theme.primary
    color: theme.text.primary
  },
  selected: {
    backgroundColor: theme.accent,
  },
  label: {
    marginTop: '5px',
    color: theme.text.primary,
    fontWeight: 'bold'
  }
})(BottomNavigationAction);

class Navbar extends React.Component {
  handleChange = (event, value) => {
    navigate(`${ value }`);
  };
  render() {
    return (
      <Location>
        {props => {
          const value = props.location.pathname;
          return (
            !BLACKLISTED_PAGES.includes(props.location.pathname) && (
              <NavWrapper>
                <BottomNavigation
                  value={ value }
                  onChange={ this.handleChange }
                  showLabels
                  className="bottomNavigation"
                >
                  <StyledNavAction
                    label="ToDos"
                    value={ PATHS.TODOS }
                    icon={ <FormatListBulleted /> }
                  />
                  <StyledNavAction
                    label="Fridge"
                    value={ PATHS.FRIDGE }
                    icon={ <Kitchen /> }
                  />
                  <StyledNavAction
                    label="Meals"
                    value={ PATHS.MEALS }
                    icon={ <RestaurantMenu /> }
                  />
                  <StyledNavAction
                    label="Profile"
                    value={ PATHS.USER_PROFILE }
                    icon={ <AccountCircle /> }
                  />
                  {/* <StyledNavAction
                  label="Recipes"
                  value="recipes"
                  icon={<Icon>folder</Icon>}
                /> */}
                </BottomNavigation>
              </NavWrapper>
            )
            );
          }}
      </Location>
          );
        }
      }

      export default Navbar;
