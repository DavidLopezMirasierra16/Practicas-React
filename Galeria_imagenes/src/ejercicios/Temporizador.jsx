import { useEffect, useState } from "react"
import { NombreEjercicio } from "../Ejercicio";

export function Temporizador(){

    const [time, setTime] = useState(0);

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setTime(tiempoActual => tiempoActual  +1);
        }, 1000);

        return () => clearInterval(intervalo);    
    }, []); //No le pasamos una dependencia ya que se está cambiando el estado de 'time'

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 4'/>
            <p className="bg-body-secondary mt-5 p-4 col-3 m-auto rounded shadow">Temporizador: {time}</p>
        </>
    )

}