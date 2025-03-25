import { useReducer } from "react";
import { NombreEjercicio } from "../Ejercicio";

/**
 * Esta funcion es la que se va a ejecutar cuando queramos cambiar el estado de contador (setContador).
 * Tiene 2 parámetros:
 * - contadorEstado: hace referencia a contador del useReducer
 * - action: es la accion que va a realizar la funcion
 * @param {*} contadorEstado 
 * @param {*} action 
 * @returns 
 */
const cambiarContador = (contadorEstado, action) =>{
    switch (action.calculo) {
        case "aumentar":
            return contadorEstado+1;
        case "disminuir":
            return contadorEstado-1;
        case "reinicio":
            return contadorEstado=0;
        default:
            break;
    }
}

export function ContadorReducer(){

    const [contador, setContador] = useReducer(cambiarContador, 0);

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 8" />
            <div className="bg-body-secondary mt-5 p-4 col-4 m-auto rounded shadow">
                <h3>{contador}</h3>
                <button onClick={()=>setContador({calculo:"aumentar"})} className="btn btn-primary me-1">Incrementar</button>
                <button onClick={()=>setContador({calculo:"disminuir"})} className="btn btn-secondary me-1">Decrementar</button>
                <button onClick={()=>setContador({calculo:"reinicio"})} className="btn btn-danger">Reiniciar</button>
            </div>
        </>
    );

}   