import axios from 'axios';
import { GET_SPORTS_NEWS_BEGIN } from "./actionTypes";
import { GET_SPORTS_NEWS_SUCCESS } from "./actionTypes";
import { GET_SPORTS_NEWS_ERROR } from "./actionTypes";

const API_KEY = '2e3cf3b657fc4636a94adbf21359d3d1'
const sportsNews_API = `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=${API_KEY}`

export function getSportsNews() {
  return dispatch => {

    dispatch(getSportsNewsBegin());

    return axios
      .get(sportsNews_API)
      .then(res => {
        // console.log("SUCCESS! Here is the data>>", res.data);
        dispatch(getSportsNewsSuccess(res.data.articles));
        return res.data.articles;
      })
      .catch(err => dispatch(getSportsNewsError(err)));
  }
}

export const getSportsNewsBegin = () => ({
  type: GET_SPORTS_NEWS_BEGIN
});

export const getSportsNewsSuccess = articles => ({
  type: GET_SPORTS_NEWS_SUCCESS,
  payload: { articles }
});

export const getSportsNewsError = error => ({
  type: GET_SPORTS_NEWS_ERROR,
  payload: { error }
});