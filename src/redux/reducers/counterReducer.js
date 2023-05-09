import { createSlice } from "@reduxjs/toolkit";
import { counterIncrease, counterIncreaseByAmout, counterdecrease } from "../actions/counterActions";

const name = 'counter'

const initialState = { count: 0, timer: 0 }

const reducers = {
    increase: counterIncrease,
    decrease: counterdecrease,
    byAmount: counterIncreaseByAmout
}



const slice = createSlice({ name, initialState, reducers })



export const { increase, decrease, byAmount } = slice.actions
export const counterReducer = slice.reducer