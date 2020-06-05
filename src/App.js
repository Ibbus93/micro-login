import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import styled from 'styled-components';

import store from './store';

import { SignIn } from './features';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
`;

const App = ({ handler, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppWrapper>
        <SignIn handler={handler} />
      </AppWrapper>
    </Router>
  </Provider>
);

App.propTypes = {
  handler: PropTypes.func.isRequired,
  history: PropTypes.any,
};

App.defaultProps = {
  // handler: () => {},
  history: createBrowserHistory(),
};

export default App;
