

import {
  GET_TECH_NEWS_BEGIN,
  GET_TECH_NEWS_SUCCESS,
  GET_TECH_NEWS_ERROR
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null
};

export default function techNewsReducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_TECH_NEWS_BEGIN:

      return {
        isLoading: true,
        error: null
      };

    case GET_TECH_NEWS_SUCCESS:

      return {
        isLoading: false,
        news: payload.articles
      };

    case GET_TECH_NEWS_ERROR:

      return {
        isLoading: false,
        error: payload.error,
      };

    default:

      return state;
  }
}