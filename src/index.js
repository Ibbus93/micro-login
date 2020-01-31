import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

import './index.css';

window.renderSignIn = (containerId, history) => {
    render(<App history={history} />, document.getElementById(containerId))
};
