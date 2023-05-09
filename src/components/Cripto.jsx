import { useDispatch, useSelector } from "react-redux"
import { criptoSelector } from "../redux/selectors/criptoSelector"
import { CriptoLayout } from "../layout/CriptoLayout"
import { useEffect } from "react"
import { getDataThunk, getStateServiceThunk } from "../redux/middleware/criptoMiddleware"
import { setCrypt } from "../redux/reducers/criptoReducer"

export const Cripto = () => {

    const { crypt, loading, state, price } = useSelector(criptoSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStateServiceThunk())
    }, [])

    const handleChange = e =>
        dispatch(setCrypt(e.target.value))

    const handleClick = () =>
        dispatch(getDataThunk())

    return (
        <CriptoLayout>
            <h1>Criptos</h1>
            <h2 className="bg-light text-dark rounded">{ crypt.toUpperCase() }</h2>

            <div className="d-flex gap-2 justify-content-center">
                <h4>Estado del servicio:</h4>
                <h4>{ state
                    ? state === 200
                        ? <div className="badge bg-success">En línea</div>
                        : <div className="badge bg-danger">Error de conexión</div>
                    : <div className="badge bg-warning text-dark">Verificando...</div> }
                </h4>
            </div>

            <div className="bg-secondary-subtle p-4 rounded">
                <h3 className="bg-primary opacity-50 rounded p-1">
                    ARS: { price.ars }
                </h3>
                <h3 className="bg-success opacity-50 rounded p-1">
                    USD: { price.usd }
                </h3>
                <h4></h4>
            </div>

            <h5>Loading:
                <b className={ loading
                    ? 'badge text-bg-warning'
                    : 'badge text-bg-success' }
                >
                    { loading ? 'in progress' : 'finish' }
                </b>
            </h5>

            <input
                type="text"
                className="w-100 form-control text-center bg-light"
                value={ crypt }
                onChange={ handleChange }
            />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Buscar precio
            </button>

        </CriptoLayout>
    )
}