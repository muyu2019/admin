import * as types from './types';
import {Filters} from "./types";

export function listRequest(data: Filters, onSuccess: () => void): types.ListRequestAction {
  return {
    type: types.LIST_REQUEST,
    payload: data,
  };
}

export function listSuccess(): types.ListSuccessAction {
  return {
    type: types.LIST_SUCCESS,
  };
}

export function listError(): types.ListErrorAction {
  return {
    type: types.LIST_ERROR,
  };
}
