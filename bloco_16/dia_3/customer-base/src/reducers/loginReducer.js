import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  loginData: {}
}

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginData: action.payload.loginData
      }
    default:
      return state;
  }
}

export default loginReducer;