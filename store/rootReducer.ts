import {combineReducers} from 'redux-immutable';

import userReducer, {ReducerKey as UsersReducerKey} from "./users";

const rootReducer = combineReducers({
  [UsersReducerKey]: userReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
