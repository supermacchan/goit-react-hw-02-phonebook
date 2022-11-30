import { Component } from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from "./ContactListItem";

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf({}).isRequired,
    };

    render() {
        return (
            <ul className={css.contacts__list}>
                <ContactListItem contacts={this.props.contacts} />
            </ul>
        );
    };
}