import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import rootReducer, {AppState} from './rootReducer'
import rootEpic from './rootEpic'

export function initStore(initialState: AppState) {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  const store = createStore(rootReducer, initialState, reduxMiddleware);

  epicMiddleware.run(rootEpic as any);

  return store
}
