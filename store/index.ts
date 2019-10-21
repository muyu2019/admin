import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import rootReducer, {AppState} from './rootReducer'
import rootEpic from './rootEpic'
import {composeWithDevTools} from "redux-devtools-extension";

export default function (initialState: AppState) {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);
  
  const store = createStore(rootReducer, initialState, composeWithDevTools(reduxMiddleware));

  epicMiddleware.run(rootEpic as any);

  return store
}
