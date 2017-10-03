import React from 'react';
import Rating from '../Rating';

class componentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" value="" />Enter name
                    <textarea name="name" type="text" value="" />Enter Review
                    <Rating value={3} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

componentName.propTypes = {};

export default componentName;
