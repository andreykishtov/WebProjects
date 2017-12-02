import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const StyledStarRatingComponent = styled(StarRatingComponent)`font-size: 25px;`;

const Wrapper = styled.div`
  background: white;
  width: 300px;
  padding: 30px;
`;

const Description = styled.p`
  color: #b1b1b1;
  background-color: #white;
  overflow: auto;
  white-space: wrap;
  height: 100px;
  padding:5px;
  ::-webkit-scrollbar
{
  width: 6px;  /* for vertical scrollbars */
  height: 6px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  border-radius:2px;
  background:grey
  ${'' /* background: rgba(0, 0, 0, 0.1); */}
}

::-webkit-scrollbar-thumb
{
 background:white;
 border:1px solid lightGrey;
  ${'' /* background: rgba(0, 0, 0, 0.5); */}
}


`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.input`
  min-width: 20px;
  min-height: 20px;
  cursor: pointer;
  background: #968484;
  &:after {
    position: relative;
    top: 3px;
    left: 5px;
  }
  &:hover::after {
    opacity: 0.5;
  }
`;

const MainTitle = styled.h2`
  font-weight: 200;
  color: #7e7e7e;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
  width: 12em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.h3`
  font-weight: 200;
  color: #7e7e7e;
  padding: 0px;
  margin: 0px;
`;
const StarRatingDiv = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`padding-top: 3px;`;

const Book = ({ title, author, description, price, rating, checked, handleOnCheck }) => {
  
  return (
    <Wrapper>
      <Header>
        <MainTitle>{title}</MainTitle>
        <CheckBox checked={!!checked} onClick={e => handleOnCheck(e.target.checked)} type="checkbox" />
      </Header>
      <hr />
      <SubTitle>{author}</SubTitle>
      <Description>{description}</Description>
      <StarRatingDiv>
        <P>Rating:</P>
        <StyledStarRatingComponent
          name="rate1"
          starCount={5}
          value={parseInt(rating)}
          emptyStarColor={'#E6E6E6'}
        />
      </StarRatingDiv>
      <p>Price: ${price}</p>
    </Wrapper>
  );
};

export default Book;
