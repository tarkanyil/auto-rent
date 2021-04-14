import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 32px;
  width: 92%;
  margin: 15px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  opacity: 0.7;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CollapsableLinks = styled.div`
  display: none;
  @media screen and (min-width: 374px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LoginLinks = styled(CollapsableLinks)`
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled.a`
  color: black;
  opacity: 0.7;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  &.active {
    color: red;
  }
`;

export const NavLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export const NavDropdownContainer = styled.div`
  position: absolute;
  right: 0;
`;

export const NavDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.1);
  width: 140px;
  /* height: 186px; */
  position: absolute;
  top: 30px;
  right: 0;
  padding: 1rem 0 1rem 0;

  /* animation in */
  animation: mymove 0.5s ease-out forwards;
  animation-iteration-count: 1;
  /* Safari and Chrome */
  -webkit-animation: mymove 0.5s;
  -webkit-animation-iteration-count: 1;
  @keyframes mymove {
    from {
      top: 21px;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes mymove /* Safari and Chrome */ {
    from {
      top: 21px;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }
`;

export const ItemsFromMain = styled.div`
  display: none;
  @media screen and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledDropdownItem = styled(StyledLink)`
  padding: 0 1rem;
`;

export const NavDropdownItem = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledDropdownItem>{children}</StyledDropdownItem>
    </Link>
  );
};
