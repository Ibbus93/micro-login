import React from 'react';
import { SignIn } from './features';

import styled from 'styled-components';

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    background: lightblue;
`;

const App = () => (
    <AppWrapper>
        <SignIn />
    </AppWrapper>
);

export default App;
