import { useAuth } from '../authorization';
import { AuthNav } from './AuthNavigation';
import { UserMenu } from './Menu';
import { Navigation } from './Nav';

export const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            <h1>Phonebook</h1>
            <div>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    );
};