import {of} from 'rxjs'
import {mergeMap, map, catchError} from 'rxjs/operators'
import {ofType, ActionsObservable, StateObservable} from 'redux-observable'
import * as actions from './actions'
import * as types from './types'
import {AppState} from '../rootReducer';
import {request} from 'universal-rxjs-ajax';

const listRequestEpic = (action$: ActionsObservable<types.ListAction>, state$: StateObservable<AppState>) =>
  action$.pipe(
    ofType(types.LIST_REQUEST),
    mergeMap(action => {
      // filters = state$.value.users.list.filters;
      return request({
        url: `http://localhost:8000/api/userList`,
        method: 'POST' // and so on...
      }).pipe(
        map(response => {
          console.log(response);
          return actions.listSuccess(
            // response.response,
            // action.payload.isServer
          )
        }),
        catchError(error =>
          of(
            actions.listError(
              // error.xhr.response,
              // action.payload.isServer
            )
          )
        )
      )

    })
  );

export default [
  listRequestEpic,
]
