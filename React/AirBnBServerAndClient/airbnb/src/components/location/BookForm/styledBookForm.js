import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Form = styled.form`
display: flex;
flex-direction: column;
text-align: left;
width: 400px;
z-index: 11;
flex-flow: wrap;
//background:rgba(255,0,0,0.8);
// position: relative;
// top: -70px;
// opacity: 0.8;
height:300px;
position:sticky;
top: 0px;
`;

export const BorderDiv = styled.div`
border: 1px solid lightgrey;
width: 100%;
`;

export const Submit = styled.input`
width: 85%;
height: 50px;
background-color: #FF4963;
color: #fff;
border-radius: 4px;
align-self: center;
margin: 0 30px;
border: 1px solid #ff5a5f;
font-size: 20px;
`;

export const Label = styled.label`padding-bottom: 8px;`;

export const StyledDatePicker = styled(DatePicker)`
width: 100%;
height: 35px;
text-align: center;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

export const Price = styled.div`
background: #484848;
width: 100%;
padding: 10px;
height: 40px;
`;