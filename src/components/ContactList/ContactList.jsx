import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts }) => {
        return (
            <ul className={css.contacts__list}>
                <ContactListItem contacts={contacts} />
            </ul>
        );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,
};
