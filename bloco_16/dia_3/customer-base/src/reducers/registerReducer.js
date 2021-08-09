import { ADD_REGISTER } from '../actions/index';

const INITIAL_STATE = {
  registerData: []
};

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REGISTER:
      return {
        ...state,
        registerData: [ ...state.registerData, action.payload.registerData ]
      }
    default:
      return state;
  }
}

export default registerReducer;