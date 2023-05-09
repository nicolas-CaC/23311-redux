export const criptoStartLoading = state => { state.loading = true }

export const criptoEndLoading = state => { state.loading = false }

export const criptoSetService = (state, action) => { state.state = action.payload }

export const criptoSetCrypt = (state, action) => { state.crypt = action.payload }

export const criptoGetPrice = (state, action) => {
    const { ars, usd } = state.price = action.payload.market_data.current_price;
}
