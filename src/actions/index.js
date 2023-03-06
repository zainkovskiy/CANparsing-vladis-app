import { createAction } from "@reduxjs/toolkit";
import { getData } from "../Api";

export const setLoader = createAction('setLoader')
export const setData = createAction('setData');

export const loadData = () => {
  return (dispatch) => {
    getData().then((data) => {
      dispatch(setData(data));
      console.log(data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(setLoader());
    })
  }
}