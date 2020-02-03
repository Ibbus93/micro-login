import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import { SignIn } from './features';


const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto;
    background: #c9d9de;
`;


const App = () => (
    <Provider store={store}>
        <AppWrapper>
            <SignIn />
        </AppWrapper>
    </Provider>
);

export default App;
