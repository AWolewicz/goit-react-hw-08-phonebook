import { StyledLink } from '../StyledLink';
import { useAuth } from '../authorization';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">Contacts</StyledLink>)}
    </nav>
  );
};