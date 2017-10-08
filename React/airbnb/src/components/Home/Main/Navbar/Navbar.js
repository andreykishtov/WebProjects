import React from 'react';
import styled from 'styled-components';

const Routes = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        border-bottom: 1px solid black;
    }
`;

const Nav = styled.nav`
    font-size: 20px;
    text-decoration: none;
`;

const NavBar = () => {
    return (
        <Nav>
            <Routes href="#">Overview</Routes> ·
            <Routes href="#">Reviews</Routes> ·
            <Routes href="#">The Host</Routes> ·
            <Routes href="#">Location</Routes>
        </Nav>
    );
};

export default NavBar;
