import { handleActions } from 'redux-actions';

import { signInUser, receivedUser, signInError } from './actions';

const defaultState = {
    isLoading: false,
    data: null
};

const reducer = handleActions({
    [signInUser]: state => Object.assign({}, state, { isLoading: true }),
    [receivedUser]: (state, { payload: { user: { data } } }) => (
        Object.assign({}, state, { data, isLoading: false})
    ),
    [signInError]: (state, { payload: { error }}) => ({ isLoading: false, error }),
}, defaultState);

const Selector = {
    getUser: state => state.signIn
};

export default reducer;

export { Selector };
