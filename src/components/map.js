/**
 * src/components/map.js
 */
import React from 'react';


class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('In Map render');


        return React.createElement('div', {},
            React.createElement('h2', {}, this.props.title),
            React.createElement('img', {src: mapImage, alt: this.props.alt})
        );
    }
}

Map.propTypes = {
    title: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    mapFile: React.PropTypes.string.isRequired
};

export default Map;