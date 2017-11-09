import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #dff0f5;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  align-items: space-between;
`;

export const H1 = styled.h1``;

export const Input = styled.input`
  box-sizing: border-box;
  width: 70px;
  background: #26c5d0;
  color: black;
  border: none;
  border-radius: 4px;
  :hover {
    background: #00b289;
    cursor: pointer;
  }
`;
