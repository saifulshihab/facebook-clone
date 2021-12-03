import { AuthActionTypes } from './actionCreators';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';

interface IAuthFinal {
  loginLoading: boolean;
  isAuthenticated: boolean;
  loginError: string;
}

const initializer: IAuthFinal = {
  loginLoading: false,
  isAuthenticated: true,
  loginError: '',
};

let initialState = initializer;

export default (state = initialState, action: AuthActionTypes): IAuthFinal => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loginLoading: true };

    case LOGIN_SUCCESS:
      return { ...state, loginLoading: false, isAuthenticated: true };

    case LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload.message,
      };

    default:
      return state;
  }
};
