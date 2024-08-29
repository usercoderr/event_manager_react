import {combineReducers} from "@reduxjs/toolkit";
import {eventsApi} from "../services/eventsApi.ts";

export const rootReducer = combineReducers({
    [eventsApi.reducerPath]: eventsApi.reducer
})
