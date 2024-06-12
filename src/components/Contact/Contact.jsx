import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import Button from '@mui/material/Button';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <div>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>
      <Button variant="outlined" color="error" onClick={() => handleDelete()}      >
        Delete
      </Button>
    </div>
  );
};