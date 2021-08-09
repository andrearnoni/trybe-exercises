import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  registered: registerReducer,
  log: loginReducer, 
});

export default rootReducer;