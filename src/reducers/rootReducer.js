import display from "./topicReducer";
import worldNews from "./worldNewsReducer";
import usNews from "./usNewsReducer";
import sportsNews from "./sportsNewsReducer";
import techNews from "./techNewsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  display,
  worldNews,
  usNews,
  sportsNews,
  techNews,
});

export default rootReducer;
