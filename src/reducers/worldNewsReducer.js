// import {GET_WORLD_NEWS} from '../actions/actionTypes';

// export default function worldNewsReducer(state = [], { type, payload }) {
//   return type === GET_WORLD_NEWS ? payload.worldNews : state;
// }

import {
  GET_WORLD_NEWS_BEGIN,
  GET_WORLD_NEWS_SUCCESS,
  GET_WORLD_NEWS_ERROR
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null
};

export default function worldNewsReducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_WORLD_NEWS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        isLoading: true,
        error: null
      };

    case GET_WORLD_NEWS_SUCCESS:

      return {
        isLoading: false,
        news: payload.articles
      };

    case GET_WORLD_NEWS_ERROR:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        isLoading: false,
        error: payload.error,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}