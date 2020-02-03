import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

window.renderSignIn = (containerId, history) => {
    ReactDOM.render(<App history={history} />, document.getElementById(containerId))
};

window.unmountSignIn = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
};
