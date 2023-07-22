import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/thunks/operations';
import { Button, Form, Input, Label } from './Register.styled';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  const inputOperator = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <>
        <Form onSubmit={formSubmit}>
          <Label>
            Username
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={inputOperator}
            />
          </Label>
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
          <Button type="submit">Register</Button>
        </Form>
      </>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
