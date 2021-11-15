import { combineReducers } from 'redux';
import usersRedusers from './Reducer';

const rootReducer = combineReducers({
    data: usersRedusers
});

export default rootReducer;