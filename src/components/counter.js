/**
 * src/components/counter.js
 */
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('In Counter render');

        return React.createElement('h2', {}, this.props.title + ' : ' + this.props.count);
    }
}

Counter.propTypes = {
    count: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Counter;