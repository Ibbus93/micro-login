import { createActions } from 'redux-actions';

const DOMAIN = "@sign-in";

const TYPES = {
    SIGN_IN_USER: `${DOMAIN}/SIGN_IN_USER`,
    RECEIVED_USER: `${DOMAIN}/RECEIVED_USER`,
    SIGN_IN_ERROR: `${DOMAIN}/SIGN_IN_ERROR`
};

const { signInUser, receivedUser, signInError } = createActions({
    [TYPES.SIGN_IN_USER]: null,
    [TYPES.RECEIVED_USER]: ({ user }) => ({ user }),
    [TYPES.SIGN_IN_ERROR]: ({ error }) => ({ error })
}).signIn;

export {
    TYPES,
    signInError,
    signInUser,
    receivedUser
};
