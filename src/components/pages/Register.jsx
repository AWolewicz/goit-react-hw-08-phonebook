import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { register } from '../redux/auth';
import css from './Register.module.css';
import Button from '@mui/material/Button';

const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <main>
            <Helmet>
                <title>Register</title>
                <meta name="description" content="Registration page of the phonebook."/>
                <meta name="keywords" content="phonebook"/>
            </Helmet>
            <div>
                <h2>Registration</h2>
                <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label htmlFor="register-name">
                        Username
                    </label>
                    <input
                    className={css.input}
                    type="text"
                    name="name"
                    id="register-name"
                    />
                </div>
                <div>
                    <label htmlFor="register-email">
                        Email
                    </label>
                    <input
                    className={css.input}
                    type="text"
                    name="email"
                    id="register-email"
                    />
                </div>
                <div>
                    <label htmlFor="register-password">
                        Password
                    </label>
                    <input
                    className={css.input}
                    type="text"
                    name="password"
                    id="register-password"
                    />
                </div>
                <Button variant="contained" type="submit">
                    Register
                </Button>
            </form>
        </div>
    </main>
    );
};

export default Register;