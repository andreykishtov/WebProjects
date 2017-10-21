import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    width: 1200px;
    padding: 0 20px;
`;

const HomesGrid = ({ homes }) => {
    return <Container> {homes.map((home, index) => <Home key={index} home={home} index={index} />)}</Container>;
};

export default HomesGrid;
