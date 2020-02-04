import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

window.renderSignIn = (containerId, history, handler) => {
    ReactDOM.render(
        <App history={history} handler={handler} />,
        document.getElementById(containerId)
    );
};

window.unmountSignIn = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
};
