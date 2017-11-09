import React from 'react';
import styled from 'styled-components';

const I = styled.i`
margin:0 10px;
font-size: 1.5rem;
color:#1E1E1E;
`

const Icon = ({ handleOnClick , style }) => {
  return <I onClick={()=>handleOnClick()} className={style} />;
};

export default Icon;
