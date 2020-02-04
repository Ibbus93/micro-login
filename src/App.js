import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import { SignIn } from './features';

const AppWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto;
    background: #c9d9de;
`;

const App = ({ handler }) => (
    <Provider store={store}>
        <AppWrapper>
            <SignIn handler={handler} />
        </AppWrapper>
    </Provider>
);

export default App;
