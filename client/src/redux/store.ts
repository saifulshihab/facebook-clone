import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import auth from './reducers/auth/auth';

const reducers = combineReducers({
  auth,
});

const middlewares: any[] = [thunk];

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type AppState = ReturnType<typeof reducers>;
export type GetState = () => ReturnType<typeof reducers>;
export type AsyncDispatch = ThunkDispatch<AppState, void, Action>;

export { store };
