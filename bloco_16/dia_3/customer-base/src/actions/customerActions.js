import { ADD_REGISTER, LOGIN } from './index';

export function addRegister(registerData) { 
  return {
    type: ADD_REGISTER,
    payload: {
      registerData,
    }
  };
}

export function login(loginData) {
  return {
    type: LOGIN,
    payload: {
      loginData,
    }
  };
}
  