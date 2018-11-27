

import {
  GET_US_NEWS_BEGIN,
  GET_US_NEWS_SUCCESS,
  GET_US_NEWS_ERROR
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null
};

export default function usNewsReducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_US_NEWS_BEGIN:

      return {
        isLoading: true,
        error: null
      };

    case GET_US_NEWS_SUCCESS:

      return {
        isLoading: false,
        news: payload.articles
      };

    case GET_US_NEWS_ERROR:

      return {
        isLoading: false,
        error: payload.error,
      };

    default:

      return state;
  }
}