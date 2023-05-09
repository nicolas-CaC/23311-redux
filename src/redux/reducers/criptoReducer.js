import { createSlice } from "@reduxjs/toolkit"
import { criptoEndLoading, criptoGetPrice, criptoSetCrypt, criptoSetService, criptoStartLoading } from "../actions/criptoActions"


const name = 'cripto'

const initialState = {
    crypt: 'bitcoin',
    loading: false,
    state: null,
    price: 0
}

const reducers = {
    setCrypt: criptoSetCrypt,
    startLoading: criptoStartLoading,
    endLoading: criptoEndLoading,
    stateService: criptoSetService,
    getPrice: criptoGetPrice
}


const slice = createSlice({ name, initialState, reducers })

export const {
    setCrypt,
    startLoading,
    endLoading,
    stateService,
    getPrice } = slice.actions

export const criptoReducer = slice.reducer