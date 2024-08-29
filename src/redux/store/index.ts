import { configureStore } from '@reduxjs/toolkit';
import {eventsApi} from "../services/eventsApi.ts";
import {rootReducer} from "../reducers";

export const setUpStore = () =>{
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(eventsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
