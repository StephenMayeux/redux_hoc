import { combineReducers } from 'redux';
import authenticationReducer froom './authentication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
