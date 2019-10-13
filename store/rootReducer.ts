import {combineReducers} from "redux";
import userReducer, {ReducerKey as UsersReducerKey} from "./users";

const rootReducer = combineReducers({
  [UsersReducerKey]: userReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>

