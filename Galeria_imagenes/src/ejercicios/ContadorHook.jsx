import { NombreEjercicio } from "../Ejercicio";
import { useCounter } from "./hooks/useCounter";

export function ContadorDinamicoHook() {

    const num = 1;
    const { contador, Increment, Decrement, Reset } = useCounter(num);

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 15' />
            <div className="bg-body-secondary mt-5 p-4 col-4 m-auto rounded shadow">
                <h3>{contador}</h3>
                <button onClick={Increment} className="btn btn-primary me-1">Aumentar</button>
                <button onClick={Decrement} className="btn btn-secondary me-1">Disminuir</button>
                <button onClick={Reset} className="btn btn-danger">Restablecer</button>
            </div>
        </>
    )

}