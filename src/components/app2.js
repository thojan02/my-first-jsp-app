/**
 * src/components/app2.js
 */

import React from 'react';
import Header from './header.js';
import Map from './map.js'
var municipalityMapImage = require('../resources/Norway_municipalities_2012_blank.svg');
var countyMapImage = require('../resources/Norway_counties_blank.svg');

class App2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('In App2 render');

        const municipalStyle = {
            float: 'left',
            width: '50%'
        };

        const countyStyle = {
            float: 'left',
            width: '50%'
        };

        return (
            React.createElement('div', {},
                React.createElement(Header, {title: 'A simple Nowegian municipality and county map app', ingress: 'This is the first small steps toward a fully Elasticsearch backed statistics view.'}),
                React.createElement('hr', null),
                React.createElement(Map, {mapStyle:municipalStyle, title: 'Norgeskart med kommuner', alt:'Kart over Norges kommuner', mapFile:municipalityMapImage}),
                React.createElement(Map, {mapStyle:countyStyle ,title: 'Norgeskart med fylker', alt:'Kart over Norges fylker', mapFile:countyMapImage})
            )
        );

    }
}

export default App2;