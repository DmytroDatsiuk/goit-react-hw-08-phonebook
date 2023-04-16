import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

export const NavWrapper = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  margin: 2px;
  border: 1px solid lightblue;
  border-radius: 3px;
  color: lightblue;
`;
