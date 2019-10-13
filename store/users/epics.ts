import {interval} from 'rxjs'
import {mergeMap, map} from 'rxjs/operators'
import {ofType, ActionsObservable, StateObservable} from 'redux-observable'
import * as actions from './actions'
import * as types from './types'
import {AppState} from '../rootReducer';

const listRequestEpic = (action$: ActionsObservable<types.ListAction>, state$: StateObservable<AppState>) =>
  action$.pipe(
    ofType(types.LIST_REQUEST),
    mergeMap(action => {
      return interval(3000).pipe(
        map(x => actions.listRequest()),
      )
    })
  );

export default [
  listRequestEpic,
]
