import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth';
import { useAuth } from '../authorization';
import Button from '@mui/material/Button';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome, {user.name}!</p>
            <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
        </div>
    );
};