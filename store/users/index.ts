import * as types from './types';
import {combineReducers} from 'redux-immutable';

export const ReducerKey = `users`;

const initialListState: types.ListState = {
  loading: false,
  total: 0,
  filters: {
    id: 0,
    pageSize: 10,
    current: 1,
  },
  items: [],
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

export type UserState = ReturnType<typeof userReducer>

export default userReducer;

