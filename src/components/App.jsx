import { Component } from 'react';
import PhoneForm from './PhoneForm/PhoneForm';
import MyContacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({ name }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name }],
      };
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onSubmit={this.addContact} contacts={this.state.contacts} />

        <MyContacts />
      </div>
    );
  }
}
