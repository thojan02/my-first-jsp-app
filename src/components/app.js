/**
 * src/components/app.js
 */

import React from 'react';
import CountContainer from './countContainer.js';
import Header from './header.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('In App render');

        return (
            React.createElement('div', {},
                React.createElement(Header, {title: 'A simple counter app', ingress: 'This is my first attempt at a small react app beyond simple hello world stuff.'}),
                React.createElement('hr', null),
                React.createElement(CountContainer, {startUp: 0, startDown: 50})
            )
        );

    }
}

export default App;