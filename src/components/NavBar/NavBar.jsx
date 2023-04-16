import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header, Link, NavWrapper } from './NavBar.styled';

export const NavBar = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <Header>
      <Link to="/">Home</Link>
      <NavWrapper>
        {!isAuth && <Link to="/register">Register</Link>}
        {isAuth && <Link to="/contacts">Contacts</Link>}
        {!isAuth && <Link to="/login">Log In</Link>}
        {isAuth && <UserMenu />}
      </NavWrapper>
    </Header>
  );
};
