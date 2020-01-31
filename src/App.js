import React from 'react';
import {SignIn} from './features';

import styled from 'styled-components';

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
    <AppWrapper>
        <SignIn/>
    </AppWrapper>
);

export default App;
