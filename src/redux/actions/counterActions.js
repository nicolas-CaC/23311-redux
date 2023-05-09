export const counterIncrease = state => { state.count++ }

export const counterdecrease = state => {
    state.count -= 2
    state.timer++
}

export const counterIncreaseByAmout = (state, action) => {
    state.count += action.payload
    state.timer += action.payload ** 2
}