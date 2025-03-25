import { useEffect, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function CalcularPrecios(){
    const [opcion, setOpcion] = useState();
    const [dias, setDias] = useState("");
    const [precio, setPrecio] = useState("");

    /**
     * En funcion de la opcion que señalemos
     * nos calcula lo que cuesta el alquiler
     */
    const alquilar = () =>{
        switch (opcion) {
            case "coche":
                if(dias <= 5){
                    setPrecio(dias*60);
                }else if(dias > 5){
                    setPrecio(dias*50);
                }else if(dias > 8){
                    setPrecio(dias*45);
                }

                break;
            case "piso":
                if(dias <= 7){
                    setPrecio(dias*50);
                }else if(dias > 7){
                    setPrecio(dias*45);
                }else if(dias > 12){
                    setPrecio(dias*40);
                }

                break;
            case "hotel":
                if(dias <= 3){
                    setPrecio(dias*40);
                }else if(dias > 3){
                    setPrecio(dias*35);
                }else if(dias > 7){
                    setPrecio(dias*30);
                }

                break;
            default:
                break;
        }

    }

    /**
     * Se ejecuta una vez, si cambian las
     * dependencias se renderiza otra vez
     */
    useEffect(()=>{
        alquilar()
    }, [opcion,dias]); //Se ejecutara otra vez si cambian estas dos dependencias

    return (
        <div className="bg-body-secondary mt-5 p-4 col-3 m-auto rounded shadow">
            <NombreEjercicio titulo='Ejercicio 2'/>
            
            <select name="opciones" id="opciones" onChange={(e)=>setOpcion(e.target.value)} className=" mt-4 mb-3 form-select"> {/** Cada vez que cambie se cambiara el setOpcion */}
                <option value="">Selecciona una opcion</option>
                <option value="coche">Alquilar coche</option>
                <option value="piso">Alquilar piso</option>
                <option value="hotel">Noches de Hotel</option>
            </select>
            <div>
                <input type="text" value={dias} onChange={(e)=>setDias(e.target.value)} placeholder="Numero de dias"/> {/** Cada vez que cambie se cambiara el setDias */}
                {precio != "" && <p style={{ color: 'red' }}>Precio: {precio}€</p>}
            </div>

        </div>
    )

}