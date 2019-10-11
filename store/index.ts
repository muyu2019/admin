import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import reducer from './reducer'
import {rootEpic} from './epic'

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store
}
