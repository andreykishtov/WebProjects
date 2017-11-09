import React from 'react';
import styled from 'styled-components';

const WishWrapper = styled.div`margin-top: 5vh;`;

const Wrapper = styled.div`
  align-items: center;
  justify-content: flex-start;
  min-width: 400px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
  padding: 10px;
  font-size: 15px;
  background: white;
  box-shadow: 2px 2px 5px #888888;
  cursor: pointer;
  :hover {
    color: white;
    background: #568d8a;
  }
`;

const I = styled.i`
  color: white;
  margin-left: 5px;
`;

class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClasses: [false, false, false] };
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass(index) {
    const activeClasses = [
      ...this.state.activeClasses.slice(0, index),
      !this.state.activeClasses[index],
      this.state.activeClasses.slice(index + 1)
    ];
    this.setState({ activeClasses });
  }

  render() {
    let { list, handleOnClose, sortBy, children } = this.props;

    return (
      <Wrapper>
        <div>
          <A
            onClick={() => {
              sortBy('title');
              this.addActiveClass(0);
            }}
            className={this.state.activeClasses[0] ? 'active' : ''}
          >
            <span>Title</span>
            <I className="fa fa-angle-down" />
          </A>
          <A
            onClick={() => {
              sortBy('price');
              this.addActiveClass(1);
            }}
            className={this.state.activeClasses[1] ? 'active' : ''}
          >
            <span>Price</span>
            <I className="fa fa-angle-down" />
          </A>
          <A
            onClick={() => {
              sortBy('rating');
              this.addActiveClass(2);
            }}
            className={this.state.activeClasses[2] ? 'active' : ''}
          >
            <span>Rating</span>
            <I className="fa fa-angle-down" />
          </A>
        </div>
        <WishWrapper>{children}</WishWrapper>
      </Wrapper>
    );
  }
}

export default WishList;

// // Signature may look fancy but it's just
// // a function that takes a component and returns a new component
// const wrapHOC = (WrappedComponent) => (props) => (
//   <div>
//     <div>header</div>
//     <div><WrappedComponent {...props}/></div>
//     <div>footer</div>
//   </div>
// )

// const App = () => <div>Hello</div>;

// const WrappedApp = wrapHOC(App);

//list.map(item => <WishItem {...item} handleOnClose={handleOnClose} />)
