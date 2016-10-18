/**
 * src/entry.js
 */

console.log('We are live!');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import App2 from './components/app2';

ReactDOM.render(React.createElement(App2), document.getElementById('root'));