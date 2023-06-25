import { configureStore } from "@reduxjs/toolkit";

import { ticketsReducer } from "../redux/features/tickets/index"
import { movieApi } from "../redux/services/movieApi"

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
});