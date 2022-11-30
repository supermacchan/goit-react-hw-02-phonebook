import { Component } from "react";
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export class ContactListItem extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })).isRequired,
    };

    render() {
        return (
            <>
            {this.props.contacts.map(contact => {
                return (
                    <li
                        key={contact.id}
                        className={css.contacts__listItem}
                    >
                        {contact.name}: {contact.number}
                    </li>
                );
            })}
            </>
        );
    };
}