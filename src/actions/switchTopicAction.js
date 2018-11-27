import {
  SWITCH_TOPIC
} from './actionTypes';

export default function switchTopicAction(column) {

  return column === 1
  ? {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: true,
          isUsVisible: false,
          isSportsVisible: false,
          isTechVisible: false,
        }
      }
    }
  : column === 12
  ? {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: true,
          isUsVisible: true,
          isSportsVisible: false,
          isTechVisible: false,
        }
      }
    }
  : column === 2
  ? {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: false,
          isUsVisible: true,
          isSportsVisible: false,
          isTechVisible: false,
        }
      }
    }
  : column === 3
  ? {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: false,
          isUsVisible: false,
          isSportsVisible: true,
          isTechVisible: false,
        }
      }
    }
  : column === 34
  ? {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: false,
          isUsVisible: false,
          isSportsVisible: true,
          isTechVisible: true,
        }
      }
    }
  : column === 4
  && {
      type: SWITCH_TOPIC,
      payload: {
        display: {
          isWorldVisible: false,
          isUsVisible: false,
          isSportsVisible: false,
          isTechVisible: true,
        }
      }
    }

}