import { List, Button, Description, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/thunks/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <List>
          {filteredContacts?.map(({ id, name, number }) => (
            <Item key={id}>
              <Description>
                {name}: {number}
              </Description>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
