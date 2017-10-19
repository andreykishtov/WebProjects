import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { Wrapper } from '../../consts/styledConsts';

const StyledLink=styled(Link)`
font-size: 14px;
color: black;
`

const StyledWrapper = styled(Wrapper)`justify-content: space-between;`;

const NavInput = styled.input`
    border: none;
    width: 40em;
    height: 64px;
    align-self: center;
    padding: 0px 10px; :focus{
        outline: none;
    }
`;

const I = styled.i`align-self: center;`;


const Li = styled.li`
    padding: 2px 10px;
    :hover {
        border-bottom: 2px solid black;
    }
`;

const Img = styled.img`align-self: center;`;

const NavBar = () => (
    <StyledWrapper>
        <Wrapper>
            <Link to="/">
                <Img src={logo} className="App-logo" alt="logo" />
            </Link>
            <I className="fa fa-search" aria-hidden="true" />
            <NavInput placeholder="Search" />
        </Wrapper>
        <div>
            <ul>
                <Li>
                    <StyledLink to="/Host">Become a Host</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/Help">Help</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/SignUp">Sign Up</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/LogIn">Log In</StyledLink>
                </Li>
            </ul>
        </div>
    </StyledWrapper>
);

export default NavBar;
