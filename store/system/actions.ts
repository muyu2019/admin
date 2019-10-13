import { SystemState, UPDATE_SESSION } from "./actionTypes";

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}
