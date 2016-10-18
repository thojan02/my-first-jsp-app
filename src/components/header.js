/**
 * src/components/header.js
 */
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const superStyles = {
            backgroundColor: 'Blue',
            color: 'White'
        };
        const normalStyles = {
            backgroundColor: 'White',
            color: 'Black'
        };

        console.log('In Header render');

        return React.createElement('div', {},
            React.createElement('h2', {style: superStyles}, this.props.title),
            React.createElement('p', {style: normalStyles}, this.props.ingress)
        );
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    ingress: React.PropTypes.string.isRequired
};

export default Header;