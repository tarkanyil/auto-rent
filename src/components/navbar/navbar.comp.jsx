import { useState } from 'react';
import { useRouter } from 'next/router';

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
  StyledDropdownItem,
  Hamburger
} from './navbar.styles';

import { useAuth } from '../../utils/auth';

// Material-UI components
import CloseIcon from '@material-ui/icons/Close';
import LogoIcon from '@material-ui/icons/DriveEta';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';

// window is not defined error
// import Spacer from '../_spacer/spacer.comp';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();

  const router = useRouter();

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  const signOut = () => {
    handleDropdownClick();
    auth.signout().then(() => {
      console.log('Logged out');
      router.push('/');
    });
  };

  console.log(auth.user);

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
        <LogoIcon /> XiCar {auth.user && auth.user.email}
      </NavLink>

      <NavMenu className={styles.flexParent}>
        <CollapsableLinks className={styles.flexParent}>
          <NavLink href='/' className={styles.flexItem}>
            Our cars
          </NavLink>
          <NavLink href='/'>About XiCar</NavLink>
        </CollapsableLinks>
        {!auth.user && (
          <LoginLinks className={styles.flexParent}>
            <NavLink href='/signin'>Log In</NavLink>
            <NavLink href='/signup'>Sign Up</NavLink>
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
                  About XiCar
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
              {auth.user && (
                <StyledDropdownItem onClick={signOut}>
                  Log out
                </StyledDropdownItem>
              )}
            </NavDropdown>
          </OutsideClickHandler>
        </NavDropdownContainer>
      )}
    </Nav>
  );
};

export default Navbar;
