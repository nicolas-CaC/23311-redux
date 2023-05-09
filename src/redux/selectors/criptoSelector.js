export const criptoSelector = state => {
    return {
        crypt: state.cripto.crypt,
        loading: state.cripto.loading,
        state: state.cripto.state,
        price: state.cripto.price
    }
}