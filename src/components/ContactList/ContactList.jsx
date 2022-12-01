import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts, onDeleteContact }) => {
        return (
            <ul className={css.contacts__list}>
                <ContactListItem
                    contacts={contacts}
                    onDeleteContact={onDeleteContact}
                />
            </ul>
        );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
