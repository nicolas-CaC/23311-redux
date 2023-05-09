import { endLoading, getPrice, startLoading, stateService } from "../reducers/criptoReducer";


export const getStateServiceThunk = () =>

    async (dispatch) => {

        // setTimeout(async () => {

        const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
        const data = await fetch(url)
        dispatch(stateService(data.status))

        dispatch(endLoading())
        // }, 1000);
    }

const url = (crypto) => `https://api.coingecko.com/api/v3/coins/${crypto}`

export const getDataThunk = () =>

    async (dispatch, getState) => {

        const crypto = getState().cripto.crypt

        try {
            dispatch(startLoading())
            let data;
            data = await fetch(url(crypto))
            data = await data.json()
            dispatch(getPrice(data))
        }
        catch (err) {
            alert('No se encuentra la cripto mencionada')
        }
        finally { dispatch(endLoading()) }
    }