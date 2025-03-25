import { useEffect, useRef, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function StopPlay() {

    const [time, setTime] = useState(0);
    const [estadoCronometro, setCronometro] = useState(true);
    const intervalRef = useRef();

    /**
     * Se ejecuta el contador nada mas se renderize la pagina
     */
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(tiempoActual => tiempoActual + 1);
        }, 1000);
        
        return () => clearInterval(intervalRef.current);
    }, []); //No le pasamos una dependencia ya que se está cambiando el estado de 'time'

    /**
     * El tiempo está funcionando nada más abrir la página, por ello está en true y se para 
     * si click en el boton (se pone a falso), cuando se pone a false al no estar en true entra
     * en el else
     */
    const manejar = () =>{
        if(estadoCronometro){
            clearInterval(intervalRef.current);
        }else{
            intervalRef.current = setInterval(() => {
                setTime(tiempoActual => tiempoActual + 1);
            }, 1000);
        }

        setCronometro(!estadoCronometro);
    }

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 5'/>
            <div className="bg-body-secondary mt-5 p-4 col-3 m-auto rounded shadow">
                <p>Temporizador: {time}</p>
                <button onClick={manejar} className={estadoCronometro ? 'btn btn-danger' : 'btn btn-primary'}>{estadoCronometro ? 'Parar' : 'Reiniciar'}</button>
            </div>
        </>
    )

}