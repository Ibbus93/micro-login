import { call, put, takeLatest } from 'redux-saga/effects';

import { TYPES, receivedUser, errorUser } from './actions';
import { signIn } from '../../api';

function* signInUser({ username, password }) {
    try {
        const user = (yield call(signIn, { username, password }));

        yield put(receivedUser({ user }));
    } catch (e) {
        console.log(e);
        yield put(errorUser(e));
    }
}

const userSagas = [
    takeLatest(TYPES.REQUEST_USER, signInUser)
];

export default userSagas;
