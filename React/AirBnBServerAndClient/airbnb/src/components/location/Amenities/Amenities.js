import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
`;

const Wrapper = styled.div`display: flex;`;

const I = styled.i`margin: 0px 20px;`;

const Amenities = ({ amenities }) => {
    return (
        <div>
            <h3>Amenities</h3>
            <Container>
                {amenities.map((amenity,index) => (
                    <Wrapper key={index}>
                        <I className={`icon fa fa-${amenity}`} />
                        <p>{amenity}</p>
                    </Wrapper>
                ))}
            </Container>
        </div>
    );
};

export default Amenities;
