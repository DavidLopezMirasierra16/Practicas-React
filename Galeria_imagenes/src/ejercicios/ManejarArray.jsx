import { useEffect, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";
import { useArray } from "./hooks/useArray";

export function ManejarArray() {

    const [arrayDatos, setArrayDatos] = useState([]);
    const [datos, setDatos] = useState("");
    const { array, addItem, removeItem, updateItem } = useArray(arrayDatos);
    const [editar, setEditar] = useState(false);
    const [userEdit, setUserEdit] = useState();

    const handleDatos = (e) => {
        setDatos(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editar) {
            const editarDato = { id: userEdit.id, datos: datos };
            updateItem(editarDato);
            setEditar(false);
            Limpiar();
        } else {
            const newDato = { id: Date.now(), datos: datos };
            addItem(newDato);
            setDatos("");
        }

    }

    const EditarDato = (dat) => {
        setUserEdit(dat);
        setDatos(dat.datos);
        setEditar(true);
    }

    useEffect(() => {
        console.log(userEdit);
    }, [userEdit]);

    const Limpiar = () => {
        setDatos("");
        setEditar(false);
    }

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 19' />

            <form onSubmit={handleSubmit} className="mt-5">
                <label htmlFor="">Datos</label><br />
                <input type="text" value={datos} onChange={handleDatos} /><br /><br />

                <input type="submit" className="btn btn-success me-1" value="Guardar" />
                {datos.length > 0 && <button className="btn btn-primary" onClick={Limpiar}>Limpiar</button>}
            </form>

            <div className="mt-5">

                {array.map((dat, index) => {
                    return (
                        <div key={index} className="bg-body-secondary mb-4 p-4 col-3 m-auto rounded shadow">
                            <p>Dato: <b>{dat.datos}</b></p>
                            <button onClick={() => removeItem(dat.id)} className="btn btn-danger me-1">Eliminar</button>
                            <button onClick={() => EditarDato(dat)} className="btn btn-warning">Editar</button>
                        </div>
                    )
                })}

            </div>

        </>
    )

}