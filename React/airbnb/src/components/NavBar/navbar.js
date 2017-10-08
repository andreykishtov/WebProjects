import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import styled from 'styled-components';
import logo from '../../logo.svg';
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 68px;
`;

const NavInput = styled.input`
    position: relative;
    top: -54px;
    left: 58px;
    width: 1300px;
    height: 64px;
    padding: 0px 50px;
`;

const I = styled.i`
    position: relative;
    top: -53px;
    left: -1327px;
`;

const Li = styled.li`
    padding: 0 10px;
    :hover {
        border-bottom: 1px solid black;
    }
`;

const NavBar = () => (
    <Wrapper>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="iWrapper">
                <NavInput />
                <I className="fa fa-search" aria-hidden="true" />
            </div>
        </div>

        <div>
            <ul>
                <li>
                    <Link to="/Host">Become a Host</Link>
                </li>
                <li>
                    <Link to="/Help">Help</Link>
                </li>
                <li>
                    <Link to="/SignUp">Sign Up</Link>
                </li>
                <li>
                    <Link to="/LogIn">Log In</Link>
                </li>
            </ul>
        </div>
    </Wrapper>
);

export default NavBar;
