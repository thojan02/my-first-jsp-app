/**
 * src/components/countContainer.js
 */
import React from 'react';
import Counter from './counter';


class CountContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countUp: this.props.startUp,
            countDown: this.props.startDown
        };
        this.counterButtonClicked = this.counterButtonClicked.bind(this);
        this.counterButtonUpClicked = this.counterButtonUpClicked.bind(this);
        this.counterButtonDownClicked = this.counterButtonDownClicked.bind(this);
    }

    counterButtonClicked() {
        console.log('Counter clicked');
        this.setState({
            countUp: this.state.countUp + 1,
            countDown: this.state.countDown - 1
        })
    }

    counterButtonUpClicked() {
        console.log('Count up clicked');
        this.setState({
            countUp: this.state.countUp + 1
        })
    }

    counterButtonDownClicked() {
        console.log('Count down clicked');
        this.setState({
            countDown: this.state.countDown - 1
        })
    }

    render() {
        console.log('In CountContainer render');

        return React.createElement('div', {},
            React.createElement(Counter, {title: 'counting up', count: this.state.countUp}),
            React.createElement(Counter, {title: 'counting down', count: this.state.countDown}),
            React.createElement('button', { onClick: this.counterButtonClicked }, 'Counter'),
            React.createElement('button', { onClick: this.counterButtonUpClicked }, 'Count Up'),
            React.createElement('button', { onClick: this.counterButtonDownClicked }, 'Count Down')
        );
    }
}

CountContainer.propTypes = {
    startUp: React.PropTypes.number.isRequired,
    startDown: React.PropTypes.number.isRequired
};

export default CountContainer;
