import React, { Component } from 'react';
import '../../static/App.css';
import ReviewList from '../ReviewList';
import ReviewForm from '../ReviewForm';
import faker from 'faker';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewList: Array.apply(null, Array(10)).map(() => {
                return {
                    name: faker.name.firstName(),
                    text: faker.lorem.words(),
                    rating: faker.random.number(5)
                };
            })
        };
    }

    render() {
        return (
            <div>
                <ReviewForm />
                <ReviewList reviewList={this.state.reviewList} />
            </div>
        );
    }
}

App.propTypes = {};

export default App;
