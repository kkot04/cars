import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #404bbf;
  margin-bottom: 50px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  nav {
    display: flex;
    gap: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color:  #2E2F42;
  font-weight: 700;
  &.active {
    color: #F4F4FD;
    text-decoration: underline;
  }
`;

export const StyledLogo = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
 color:#F4F4FD;
`;