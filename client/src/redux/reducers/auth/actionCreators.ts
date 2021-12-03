import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';

interface ILoginLoadingAction {
  type: typeof LOGIN_REQUEST;
}

interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface ILoginFailedAction {
  type: typeof LOGIN_FAILED;
  payload: {
    message: string;
  };
}

export type AuthActionTypes =
  | ILoginLoadingAction
  | ILoginSuccessAction
  | ILoginFailedAction;
