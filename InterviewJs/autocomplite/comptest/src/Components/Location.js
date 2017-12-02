import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
${'' /* margin:4px; */}
`

const Location = ({ location }) => {
  return (
    <Tr key={location.id}>
      <td>{location.companyName}</td>
      <td>{location.name}</td>
      <td>{location.distance} km</td>
    </Tr>
  );
};

export default Location;
