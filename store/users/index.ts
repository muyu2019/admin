import * as types from './types';
import {combineReducers} from "redux";

export const ReducerKey = `users`;

const initialListState: types.ListState = {
  loading: false,
};

function list(state = initialListState, action: types.ListAction): types.ListState {
  switch (action.type) {
    case types.LIST_REQUEST:
    case types.LIST_SUCCESS:
    case types.LIST_ERROR:
    default:
      return state;
  }
}

const userReducer = combineReducers({
  list,
});

export type UserState = {
  list: types.ListState,
};

export default userReducer;

