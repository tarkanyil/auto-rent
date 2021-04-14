import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import OutsideClickHandler from 'react-outside-click-handler';
import styles from './Navbar.module.scss';

import {
  Nav,
  NavLink,
  NavMenu,
  CollapsableLinks,
  LoginLinks,
  NavDropdownContainer,
  NavDropdown,
  ItemsFromMain,
  NavDropdownItem,
  Hamburger
} from './navbar.styles';

// Material-UI components
import CloseIcon from '@material-ui/icons/Close';
import LogoIcon from '@material-ui/icons/DriveEta';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from '@material-ui/core/Button';

// window is not defined error
// import Spacer from '../_spacer/spacer.comp';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  // const UserButton = withStyles({
  //   root: {
  //     fontFamily: ['Roboto', 'sans-serif'].join(','),
  //     fontWeight: '700',
  //     textTransform: 'none',
  //     fontSize: '12px'
  //   }
  // })(Button);

  return (
    <Nav>
      <NavLink href='/'>
        <LogoIcon />
      </NavLink>

      <NavMenu className={styles.flexParent}>
        <CollapsableLinks className={styles.flexParent}>
          <NavLink href='/' className={styles.flexItem}>Our cars</NavLink>
          <NavLink href='/'>How it works</NavLink>
        </CollapsableLinks>
        {!isLoggedIn && (
          <LoginLinks className={styles.flexParent}>
            <NavLink href='/'>Log In</NavLink>
            <NavLink href='/'>Sign Up</NavLink>
          </LoginLinks>
        )}

        {!open ? (
          <Hamburger onClick={handleDropdownClick}>
            <AccountIcon />
          </Hamburger>
        ) : (
          <CloseIcon />
        )}
      </NavMenu>
      {open && (
        <NavDropdownContainer>
          <OutsideClickHandler onOutsideClick={handleDropdownClick}>
            <NavDropdown className={styles.flexParentDd}>
              <ItemsFromMain className={styles.flexParentDd}>
                <NavDropdownItem href='/' onClick={handleDropdownClick}>
                  Our cars
                </NavDropdownItem>
                <NavDropdownItem href='/' onClick={handleDropdownClick}>
                  How it works
                </NavDropdownItem>
              </ItemsFromMain>
              <NavDropdownItem href='/' onClick={handleDropdownClick}>
                My Profile
              </NavDropdownItem>
              <NavDropdownItem href='/' onClick={handleDropdownClick}>
                My Bookings
              </NavDropdownItem>
              <NavDropdownItem href='/' onClick={handleDropdownClick}>
                Some stuff
              </NavDropdownItem>
              <NavDropdownItem href='/' onClick={handleDropdownClick}>
                Some other stuff
              </NavDropdownItem>
              {isLoggedIn && (
                <NavDropdownItem href='/' onClick={handleDropdownClick}>
                  Log out
                </NavDropdownItem>
              )}
            </NavDropdown>
          </OutsideClickHandler>
        </NavDropdownContainer>
      )}
    </Nav>
  );
};

export default Navbar;
