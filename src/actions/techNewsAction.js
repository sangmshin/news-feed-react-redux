import axios from 'axios';
import { GET_TECH_NEWS_BEGIN } from "./actionTypes";
import { GET_TECH_NEWS_SUCCESS } from "./actionTypes";
import { GET_TECH_NEWS_ERROR } from "./actionTypes";

const API_KEY = '2e3cf3b657fc4636a94adbf21359d3d1'
const techNews_API = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`

export function getTechNews() {
  return dispatch => {

    dispatch(getTechNewsBegin());

    return axios
      .get(techNews_API)
      .then(res => {
        console.log("SUCCESS! Here is the data>>", res.data);
        dispatch(getTechNewsSuccess(res.data.articles));
        return res.data.articles;
      })
      .catch(err => dispatch(getTechNewsError(err)));
  }
}

export const getTechNewsBegin = () => ({
  type: GET_TECH_NEWS_BEGIN
});

export const getTechNewsSuccess = articles => ({
  type: GET_TECH_NEWS_SUCCESS,
  payload: { articles }
});

export const getTechNewsError = error => ({
  type: GET_TECH_NEWS_ERROR,
  payload: { error }
});