import { PropTypes } from 'prop-types';
import React from 'react';
import { PhoneBook, NewContact, DelButton } from './Contact.styled';

export const ContactList = ({ items, onDelete }) => (
  <PhoneBook>
    {items.map(({ id, name, number }) => (
      <NewContact key={id}>
        {name}: {number}
        <DelButton type="button" onClick={() => onDelete(id)}>
          Delete
        </DelButton>
      </NewContact>
    ))}
  </PhoneBook>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
