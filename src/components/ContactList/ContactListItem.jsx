import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contacts }) => {
    return (
        <>
        {contacts.map(contact => {
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


ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
};