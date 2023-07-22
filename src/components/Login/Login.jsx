import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/thunks/operations';
import { Button, Form, Input, Label } from './Login.styled';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const inputOperator = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        throw new Error('Unexpected value');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <Form onSubmit={formSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={inputOperator}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={inputOperator}
          />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
