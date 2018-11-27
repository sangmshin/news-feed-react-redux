import {SWITCH_TOPIC} from '../actions/actionTypes';

export default function topicReducer(state = {}, { type, payload }) {
  return type === SWITCH_TOPIC ? payload.display : state;
}