import topicReducer from "./topicReducer";
import worldNewsReducer from "./worldNewsReducer";
import usNewsReducer from "./usNewsReducer";
import sportsNewsReducer from "./sportsNewsReducer";
import techNewsReducer from "./techNewsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  display: topicReducer,
  worldNews: worldNewsReducer,
  usNews: usNewsReducer,
  sportsNews: sportsNewsReducer,
  techNews: techNewsReducer,
});

export default rootReducer;
