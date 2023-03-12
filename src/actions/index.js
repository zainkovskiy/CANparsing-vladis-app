import { createAction } from "@reduxjs/toolkit";
import { getData } from "../Api";
import { urlPlatforms } from "../assets/urlPlatforms";

export const setLoader = createAction('setLoader')
export const setData = createAction('setData');

export const loadData = (source) => {
  return (dispatch) => {
    dispatch(setLoader());
    getData({
      url: urlPlatforms[source.city][source.platform],
      platform: source.platform
    }).then((data) => {
      dispatch(setData(data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch(setLoader());
    })
  }
}