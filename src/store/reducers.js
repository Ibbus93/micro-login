import user from './user/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user
});

export default rootReducer;
