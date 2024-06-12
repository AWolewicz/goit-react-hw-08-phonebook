import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth';
import { Helmet } from 'react-helmet-async';
import Button from '@mui/material/Button';
import css from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
        logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
    );
    form.reset();
    };

    return (
        <main>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Login page of the phonebook."/>
            <meta name="keywords" content="phonebook" />
        </Helmet>
        <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login-email">
                    Email
                </label>
                <input
                className={css.input}
                type="email"
                name="email"
                id="login-email"
                />
            </div>
            <div>
                <label htmlFor="login-password">
                    Password
                </label>
                <input
                className={css.input}
                type="password"
                name="password"
                id="login-password"
                />
            </div>
            <Button variant="contained" type="submit">
                Log in
            </Button>
        </form>
        </div>
    </main>
    );
};

export default Login;