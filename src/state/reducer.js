import { combineReducers } from 'redux';
import userReducer from './user';
import sessionReducer from './session';
import snackbarReducer from './snackBar';

const rootReducer = combineReducers({
    user: userReducer,
    session: sessionReducer,
    snackbar: snackbarReducer
});

export default rootReducer;