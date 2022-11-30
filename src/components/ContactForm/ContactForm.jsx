import { Component } from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    static propTypes = {
        input: PropTypes.func.isRequired,
        submit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    hadleInputChange = event => {
        this.setState({
        [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    render() {
        return (
            <form
                className={css.phonebook__form}
                onSubmit={this.props.submit}
            >
                <label
                    htmlFor="nameInputId"
                    className={css.phonebook__label}
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id="nameInputId"
                    required
                    onChange={this.props.input}
                    className={css.phonebook__input}
                />
                <label
                    htmlFor="telInputId"
                    className={css.phonebook__label}
                >
                    Number
                </label>
                < input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id="telInputId"
                    required
                    onChange={this.props.input}
                    className={css.phonebook__input}
                />
                <button
                    type="submit"
                    className={css.phonebook__button}
                >
                    Add Contact
                </button>
            </form>
        )
    };
}