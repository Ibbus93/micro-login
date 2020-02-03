import { createActions } from 'redux-actions';

const DOMAIN = "@user";

const TYPES = {
    REQUEST_USER: `${DOMAIN}/REQUEST_USER`,
    RECEIVED_USER: `${DOMAIN}/RECEIVED_USER`,
    ERROR_USER: `${DOMAIN}/ERROR_USER`
};

const { requestUser, receivedUser, errorUser } = createActions({
    [TYPES.REQUEST_USER]: null,
    [TYPES.RECEIVED_USER]: ({ user }) => ({ user }),
    [TYPES.ERROR_USER]: ({ error }) => ({ error })
}).user;

export {
    TYPES,
    errorUser,
    requestUser,
    receivedUser
};
