import signIn from './sign-in/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    signIn
});

export default rootReducer;
