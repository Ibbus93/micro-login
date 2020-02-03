import { handleActions } from 'redux-actions';

import { requestUser, receivedUser, errorUser } from './actions';

const defaultState = {
    isLoading: false,
    data: null
};

const reducer = handleActions({
    [requestUser]: state => Object.assign({}, state, { isLoading: true }),
    [receivedUser]: (state, { payload: { user: { data } } }) => {
        // const user = payload && payload.user ? payload.user.data : null;
        console.log(data);
        return Object.assign({}, state, { data, isLoading: false});
    },
    [errorUser]: (state, { payload: { error }}) => ({ isLoading: false, error }),
}, defaultState);

const Selector = {
    getUser: state => state.user
};

export default reducer;

export { Selector };
