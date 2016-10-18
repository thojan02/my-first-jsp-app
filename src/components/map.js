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

        const mapStyle = {
            background: 'PowderBlue',
            height: '80%',
            width: '80%',
            align: 'centre'
        };

        return React.createElement('div', {style: this.props.mapStyle},
            React.createElement('h2', {}, this.props.title),
            React.createElement('img', {src: this.props.mapFile, alt: this.props.alt, style: mapStyle})
        );
    }
}

Map.propTypes = {
    mapStyle: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    mapFile: React.PropTypes.string.isRequired
};

export default Map;