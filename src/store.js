import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { main } from "./reducers";

export const store = configureStore({
  reducer: main,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk)
    middleware: [thunk]
})