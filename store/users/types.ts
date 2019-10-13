const KEY = "USERS";

/* ACTION */

// LIST
export const LIST_REQUEST = `LIST_${KEY}_REQUEST`;
export const LIST_SUCCESS = `LIST_${KEY}_SUCCESS`;
export const LIST_ERROR = `LIST_${KEY}_ERROR`;

export interface ListRequestAction {
  type: typeof LIST_REQUEST
}

export interface ListSuccessAction {
  type: typeof LIST_SUCCESS
}

export interface ListErrorAction {
  type: typeof LIST_ERROR
}

export type ListAction = ListRequestAction | ListSuccessAction | ListErrorAction

// CREATE
export const CREATE_REQUEST = `CREATE_${KEY}_REQUEST`;
export const CREATE_SUCCESS = `CREATE_${KEY}_SUCCESS`;
export const CREATE_ERROR = `CREATE_${KEY}_ERROR`;

// DETAIL
export const DETAIL_REQUEST = `DETAIL_${KEY}_REQUEST`;
export const DETAIL_SUCCESS = `DETAIL_${KEY}_SUCCESS`;
export const DETAIL_ERROR = `DETAIL_${KEY}_ERROR`;

// UPDATE
export const UPDATE_REQUEST = `UPDATE_${KEY}_REQUEST`;
export const UPDATE_SUCCESS = `UPDATE_${KEY}_SUCCESS`;
export const UPDATE_ERROR = `UPDATE_${KEY}_ERROR`;

// DELETE
export const DELETE_REQUEST = `DELETE_${KEY}_REQUEST`;
export const DELETE_SUCCESS = `DELETE_${KEY}_SUCCESS`;
export const DELETE_ERROR = `DELETE_${KEY}_ERROR`;


/* STATE */

export interface ListState {
  loading: boolean
}

export interface CreateState {
  loading: boolean
}

export interface DetailState {
  loading: boolean
}

export interface UpdateState {
  loading: boolean
}

export interface DeleteState {
  loading: boolean
}


export type UserAction = ListAction
