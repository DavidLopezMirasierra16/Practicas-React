import { useEffect, useState } from "react";

export function useArray(man_array) {

    const [array, setArray] = useState(man_array);

    const addItem = (datos) => {
        const newDato = [...array, datos]
        setArray(newDato);
    }

    //Compruebo en consola que se añada al array
    useEffect(()=>{
        console.log(array);
    }, [array]);

    const removeItem = (id) => {
        const delete_dato = array.filter(dato => dato.id != id);
        setArray(delete_dato);
    }

    const updateItem = (editarDato) => {
        const newDatos = array.map((dato) => dato.id === editarDato.id ? {...dato, datos: editarDato.datos} : dato);
        setArray(newDatos);
    }

    return { array, addItem, removeItem, updateItem }

}