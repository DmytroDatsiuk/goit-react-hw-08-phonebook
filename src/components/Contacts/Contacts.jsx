import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Message, Wrapper } from './Contacts.styled';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (isAuth) {
    return (
      <Wrapper>
        <ContactForm />
        <Filter />
        <ContactList />
      </Wrapper>
    );
  } else {
    return <Message>authorization is required!</Message>;
  }
};
