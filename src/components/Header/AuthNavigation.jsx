import { StyledLink } from '../StyledLink';
import css from './AuthNavigation.module.css'

export const AuthNav = () => {
  return (
    <div className={css.styled}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};