import axios from 'axios';
import { GET_US_NEWS_BEGIN } from "./actionTypes";
import { GET_US_NEWS_SUCCESS } from "./actionTypes";
import { GET_US_NEWS_ERROR } from "./actionTypes";

const API_KEY = '2e3cf3b657fc4636a94adbf21359d3d1'

const usNews_API = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`

export function getUsNews() {
  return dispatch => {

    dispatch(getUsNewsBegin());

    return axios
      .get(usNews_API)
      .then(res => {
        // console.log("SUCCESS! Here is the data>>", res.data);
        dispatch(getUsNewsSuccess(res.data.articles));
        return res.data.articles;
      })
      .catch(err => dispatch(getUsNewsError(err)));
  }
}

export const getUsNewsBegin = () => ({
  type: GET_US_NEWS_BEGIN
});

export const getUsNewsSuccess = articles => ({
  type: GET_US_NEWS_SUCCESS,
  payload: { articles }
});

export const getUsNewsError = error => ({
  type: GET_US_NEWS_ERROR,
  payload: { error }
});