import React from 'react';
import { createBrowserHistory } from 'history';

import { SignIn } from './features';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
    <SignIn />
);

export default App;
