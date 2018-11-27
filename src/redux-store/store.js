import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { persistState } from "redux-devtools";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}
const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  persistState(getDebugSessionKey())
);


const initialState = {
  display: {
    isWorldVisible: true,
    isUsVisible: true,
    isSportsVisible: true,
    isTechVisible: true,
  },
};

// INITIALIZE STORE
export const store = createStore(rootReducer, initialState, enhancer);
