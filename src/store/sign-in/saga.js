import { call, put, takeLatest } from 'redux-saga/effects';

import { TYPES, receivedUser, signInError } from './actions';
import { signIn } from '../../api';

function* signInUser({ username, password }) {
    try {
        const user = (yield call(signIn,{ username, password }));

        yield put(receivedUser({ user }));
    } catch (e) {
        console.log(e);
        yield put(signInError(e));
    }
}

const userSagas = [
    takeLatest(TYPES.SIGN_IN_USER, signInUser)
];

export default userSagas;
