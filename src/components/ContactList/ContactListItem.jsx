import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contacts, onDeleteContact }) => {
    return (
        <>
        {contacts.map(contact => {
            return (
                <li
                    key={contact.id}
                    className={css.contacts__listItem}
                >
                    <span>{contact.name}: {contact.number}</span>
                    <button
                        type="button"
                        className={css.contacts__delBtn}
                        onClick={ () => onDeleteContact(contact.id) }>Delete</button>
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
    onDeleteContact: PropTypes.func.isRequired,
};