/**
 * src/components/app2.js
 */

import React from 'react';
import Header from './header.js';
import Map from './map.js'
var mapImage = require('../resources/Norway_municipalities_2012_blank.svg');

class App2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('In App2 render');

        return (
            React.createElement('div', {},
                React.createElement(Header, {title: 'A simple Nowegian municipality map app', ingress: 'This is the first small steps toward a fully Elasticsearch backed statistics view.'}),
                React.createElement('hr', null),
                React.createElement(Map, {title: 'Norgeskart med kommuner', alt:'Kart over Norges kommuner', mapFile:mapImage})
            )
        );

    }
}

export default App2;