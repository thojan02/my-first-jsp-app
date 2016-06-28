/**
 * /src/components/App.jsx
 */

const React = require('react');

const App = React.createClass({
    render() {
        console.log('Where am i...?'); // add a log statement

        const superStyles = {
            backgroundColor: 'yellow'
        };

        return (
            <div style={superStyles}>
                <h2>My Amazing React App!</h2>
            </div>
        );
    }
});

module.exports = App;