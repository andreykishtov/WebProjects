import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Book';
import WishList from './WishList';
import listOfBooks from '../Data/listOfBooks.json';
import Icon from './Icon';
import WishItem from './WishItem';

const Wrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #e6e6e6;
  display: flex;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class App extends Component {
  constructor() {
    super();

    this.state = { wishList: [], listOfBooks: [], currentBook: {}, bookId: 0, checked: [] };
    this.handleWishList = this.handleWishList.bind(this);
    this.wishListClose = this.wishListClose.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount = async () => {
    // let response = await fetch('http://s3.amazonaws.com/sundaysky-mock/books/listOfBooks.json');
    // let listOfBooks = await response.json();
    this.setState({
      listOfBooks: listOfBooks.books,
      currentBook: listOfBooks.books[0],
      checked: Array(listOfBooks.books.length).fill(false)
    });
  };

  ChangeBook(direction) {
    let { bookId, listOfBooks } = this.state;

    if (bookId === 0 && direction === 'left') {
      bookId = listOfBooks.length;
    }
    if (bookId === listOfBooks.length - 1 && direction === 'right') {
      bookId = -1;
    }
    direction === 'left' ? bookId-- : bookId++;

    let currentBook = listOfBooks[bookId];
    this.setState({ currentBook, bookId: bookId });
  }

  handleWishList() {
    let { bookId, checked, currentBook } = this.state;
    checked[bookId] = true;

    let wishList = this.state.wishList.filter(item => {
      if (currentBook === item) {
        checked[bookId] = false;
      }
      return currentBook !== item;
    });
    if (checked[bookId]) {
      wishList.push(currentBook);
    }

    this.setState({ wishList, checked });
  }

  wishListClose(title) {
    let { checked, wishList } = this.state;

    let wishListFiltered = wishList.filter((item, index) => {
      if (item.title === title) {
        checked[index] = false;
        return false;
      }
      return true;
    });
    this.setState({ wishList: wishListFiltered, checked });
  }

  sortBy(title) {
    let wishList = [...this.state.wishList];
    wishList.sort((a, b) => a[title].localeCompare(b[title]));
    this.setState({ wishList });
  }

  render() {
    return (
      <Wrapper>
        <BookWrapper>
          <Icon style={'fa fa-chevron-left'} handleOnClick={() => this.ChangeBook('left')} />
          <Book
            {...this.state.currentBook}
            handleOnCheck={this.handleWishList}
            checked={this.state.checked[this.state.bookId]}
          />
          <Icon style={'fa fa-chevron-right'} handleOnClick={() => this.ChangeBook('right')} />
        </BookWrapper>
        <WishList sortBy={this.sortBy}>
          {this.state.wishList.map(item => <WishItem {...item} handleOnClose={this.wishListClose} />)}
        </WishList>
      </Wrapper>
    );
  }
}

export default App;
