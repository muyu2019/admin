import {combineEpics} from "redux-observable";

import userEpics from './users/epics';

const rootEpic = combineEpics(
  ...userEpics,
);

export default rootEpic;
