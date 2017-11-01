import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Select = styled.select`
    -webkit-appearance: button;
    -webkit-border-radius: 2px;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-user-select: none;
    background-image: url(http://i62.tinypic.com/15xvbd5.png),
        -webkit-linear-gradient(#fafafa, #f4f4f4 40%, #e5e5e5);
    background-position: 97% center;
    background-repeat: no-repeat;
    border: 1px solid #aaa;
    color: #555;
    font-size: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 29px;
    padding-left: 1em;
`;

export const Form = styled.form`
    z-index: 11;
    position: sticky;
    top: 0px;
`;

export const Submit = styled.input`
    margin-top:1em;
    width: 100%;
    height: 50px;
    background-color: #ff4963;
    color: #fff;
    border-radius: 4px;
    border: 1px solid #ff5a5f;
    font-size: 20px;;
`;

export const Label = styled.label`
    display:block;
    padding-top: 1em;
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 100%-4%;
    height: 25px;
    padding-left: 1em;
`;

export const Wrapper = styled.div`
    display: flex;
`;


export const P = styled.p`
    padding-top:1em;
    text-align: center;
`;

export const Price = styled.div`
    padding:1em 0 1em 1em;
    background: #484848;
    color: white;
    width: 100%;
    font-weight:bold;
    font-size: 11;
    text-overflow: ellipsis;
`;

export const PaddingDiv = styled.div`
padding-left: 1em;
`