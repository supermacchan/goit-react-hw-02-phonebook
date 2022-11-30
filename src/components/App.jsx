import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
  };

  hadleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const newContact = [{
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }]
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat(newContact),
      };
    });
    event.target[0].value = '';
    event.target[1].value = '';
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm
          input={this.hadleInputChange}
          submit={this.handleFormSubmit}
        />

        <h2 className={css.contacts__title}>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  } 
};
