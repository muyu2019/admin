import * as types from './types';

export function listRequest(): types.ListRequestAction {
  return {
    type: types.LIST_REQUEST,
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
