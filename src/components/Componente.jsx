import { useDispatch, useSelector } from "react-redux"
import { counterSelector } from "../redux/selectors/counterSelector"
import { useState } from "react"
import { ComponenteLayout } from "../layout/ComponenteLayout"
import { byAmount, decrease, increase } from "../redux/reducers/counterReducer"

export const Componente = () => {

    const { count, timer } = useSelector(counterSelector)
    const dispatch = useDispatch()

    const [value, setValue] = useState(0)

    const changeValue = newValue => setValue(newValue)

    const css = "btn btn-primary"

    const funcion = () => dispatch(increase())

    return (
        <ComponenteLayout>

            <div>Count: { count }</div>
            <div>Timer: { timer }</div>

            <button
                className={ css }
                onClick={ funcion }
            >
                Incrementar + 1
            </button>

            <button
                className={ css }
                onClick={ () => dispatch(decrease()) }
            >
                Decrementar - 1
            </button>

            <div className="bg-secondary rounded p-3">
                <button
                    className={ css }
                    onClick={ () => dispatch(byAmount(value)) }
                >
                    Incrementar con...
                </button>

                <input
                    type="number"
                    className="form-control mt-3"
                    placeholder="Ingrese un número"
                    onChange={ e => changeValue(Number(e.target.value)) }
                />

            </div>

        </ComponenteLayout>
    )
}