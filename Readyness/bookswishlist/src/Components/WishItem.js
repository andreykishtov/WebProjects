import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  margin-bottom: 10px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 5px #888888;
  padding-right: 10px;
  justify-content: space-between;
`;

const Line = styled.div`
  min-height: 100%;
  min-width: 10px;
  background: #d9853c;
`;

const Text = styled.div`
  white-space: nowrap;
  width: 12em;
  overflow: hidden;
  text-overflow: ellipsis;
  padding:5px;
`;

const CloseButton = styled.input`
  color: white;
  min-width: 20px;
  min-height: 20px;
  cursor: pointer;
  background: #968484;
  box-shadow: 1px 1px 0px #d0c9c9;
  border: none;
`;

const WishItem = ({ title, handleOnClose }) => {
  return (
    <Wrapper>
      <Line />
      <Text>{title}</Text>
      <CloseButton type="button" onClick={() => handleOnClose(title)} value="X" />
    </Wrapper>
  );
};

export default WishItem;
