import {
  SWITCH_TOPIC
} from './actionTypes';

export default function switchTopicAction(column) {
  if (column === 1) {

    return {
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

  } else if (column === 12) {

    return {
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
  } else if (column === 2) {

    return {
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
  } else if (column === 3) {

    return {
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
  } else if (column === 34) {

    return {
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
  } else if (column === 4) {

    return {
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
}