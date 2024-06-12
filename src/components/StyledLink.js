import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
    border-radius: 5px;
    color: blue;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    background-color: white;
    border: 1px solid blue;

    &:hover,
    &:focus {
        background-color: grey;
        outline: none;
    }

    &:active {
        background-color: darkgrey;
    }
`;