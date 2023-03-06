import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setLoader, setData } from '../actions';

const initialState = new Map({
  loader: true,
  data: [],
  renderData: []
})

export const main = createReducer(initialState, (builder) => {
  builder
  .addCase(setLoader, (state, action) => {
    return state.set('loader', !state.get('loader'))
  })
  .addCase(setData, (state, action) =>{
    return state.set('data', action.payload)
  })
})