import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import styled from 'styled-components';
import logo from '../../logo.svg';
import {Wrapper} from '../../consts/styledConsts';

const NavInput = styled.input`
    border: none;
    width: 1000px;
    height: 64px;
    align-self:center;
    padding: 0px 10px;
`;

const I = styled.i`
    align-self:center;
`;

const Li = styled.li`
    padding: 0 10px;
    :hover {
        border-bottom: 1px solid black;
    }
`;

const Img = styled.img`
align-self:center;
`

const NavBar = () => (
    <Wrapper>
        <Link to="/"><Img src={logo} className="App-logo" alt="logo" /></Link>        
        <I className="fa fa-search" aria-hidden="true" />
        <NavInput placeholder="Search" />
        <div>
            <ul>
                <Li>
                    <Link to="/Host">Become a Host</Link>
                </Li>
                <Li>
                    <Link to="/Help">Help</Link>
                </Li>
                <Li>
                    <Link to="/SignUp">Sign Up</Link>
                </Li>
                <Li>
                    <Link to="/LogIn">Log In</Link>
                </Li>
            </ul>
        </div>
    </Wrapper>
);

export default NavBar;
