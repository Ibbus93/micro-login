import { all } from 'redux-saga/effects';

import userSagas from './sign-in/saga';

function* rootSaga() {
    yield all([
        ...userSagas
    ]);
}

export default rootSaga;
