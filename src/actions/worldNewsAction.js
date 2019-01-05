import axios from 'axios';
import { GET_WORLD_NEWS_BEGIN } from "./actionTypes";
import { GET_WORLD_NEWS_SUCCESS } from "./actionTypes";
import { GET_WORLD_NEWS_ERROR } from "./actionTypes";
const API_KEY = '2e3cf3b657fc4636a94adbf21359d3d1'

const worldNews_API = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`

export function getWorldNews() {
  return dispatch => {

    dispatch(getWorldNewsBegin());

    return axios
      .get(worldNews_API)
      .then(res => {
        // console.log("SUCCESS! Here is the data>>", res.data);
        dispatch(getWorldNewsSuccess(res.data.articles));
        return res.data.articles;
      })
      .catch(err => dispatch(getWorldNewsError(err)));
  }
}

export const getWorldNewsBegin = () => ({
  type: GET_WORLD_NEWS_BEGIN
});

export const getWorldNewsSuccess = articles => ({
  type: GET_WORLD_NEWS_SUCCESS,
  payload: { articles }
});

export const getWorldNewsError = error => ({
  type: GET_WORLD_NEWS_ERROR,
  payload: { error }
});