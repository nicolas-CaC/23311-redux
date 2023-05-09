import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducers/counterReducer";
import { criptoReducer } from "../reducers/criptoReducer";
import { apiQuery } from "../../api/api";

const reducer = {
    counter: counterReducer,
    cripto: criptoReducer,
    [apiQuery.reducerPath]: apiQuery.reducer
}

const middleware = (middleware) => middleware().concat(apiQuery.middleware)

export const store = configureStore({ reducer, middleware })