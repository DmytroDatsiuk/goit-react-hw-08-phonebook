import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getUser } from 'redux/thunks/operations';
import { NavBar } from 'components/NavBar/NavBar';
import { Register } from 'components/Register/Register';
import { Login } from 'components/Login/Login';
import { Contacts } from 'components/Contacts/Contacts';
import { Loader } from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyele';

export const App = () => {
  const isLoadingAuth = useSelector(state => state.auth.isLoading);
  const isLoadingContacts = useSelector(state => state.items.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      {(isLoadingContacts || isLoadingAuth) && <Loader />}
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Phonebook</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <ToastContainer autoClose={1000} />
      {/* {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </Layout>
  );
};
