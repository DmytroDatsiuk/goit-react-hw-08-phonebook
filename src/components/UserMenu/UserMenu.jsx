import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/thunks/operations';
import { Btn, Menu, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.name);
  const dispatch = useDispatch();

  return (
    <Menu>
      <Name>{name}</Name>
      <Btn type="button" onClick={() => dispatch(logout())}>
        Sign Out
      </Btn>
    </Menu>
  );
};
