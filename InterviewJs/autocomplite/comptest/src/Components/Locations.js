import React from 'react';
import styled from 'styled-components';
import Location from './Location';

const Table = styled.table`
  margin-top: 20px;
  font-size: 25px;
  letter-spacing: 0.0625em;
`;

const Locations = ({ locations }) => {
  return (
    locations.length !== 0 && (
      <Table>
        <thead>
          <tr>{['companyName', 'Branch', 'Distance'].map(item => <th key={item}>{item}</th>)}</tr>
        </thead>
        <tbody>{locations.map(location => <Location key={location.id} location={location} />)}</tbody>
      </Table>
    )
  );
};

export default Locations;
