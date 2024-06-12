import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ error }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {error && (
        <p>Failed to fetch data from the server</p>
      )}
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};