import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import ReviewList from '../ReviewList/ReviewList';
import ReviewForm from '../ReviewForm/ReviewForm';
import faker from 'faker';

class App extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({ reviews: data });
    }

    handleOnSubmit({ title, content, select }) {
        let reviews = this.state.reviews;
        let item = { id: faker.random.number(), image: faker.image.avatar(), Title: title, reviewText: content, rating: select };
        reviews.push(item);
        this.setState(reviews);
    }

    render() {
        let reviews = this.state.reviews;

        return (
            <div className="reviews">
                <ReviewForm handleOnSubmit={this.handleOnSubmit} />
                <ReviewList reviews={reviews} />
            </div>
        );
    }
}

export default App;
