import { useReducer, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

const manejarLista = (listaEstado, action) => {
    switch (action.type) {
        case "añadir":
            return [...listaEstado, action.item]; //LE AÑADIMOS EL OBJETO ITEM AL ARRAY
        case "eliminar":
            return listaEstado.filter(tarea => tarea.id !== action.id); //SOLO LE PASAMOS EL ID EN EL OBJETO ITEM
        case "completar":
            return listaEstado.map(tarea => tarea.id === action.id ? { ...tarea, completada: tarea.completada === 0 ? 1 : 0 } : tarea); //BUSCAMOS EN EL ARRAY LA TAREA QUE COINCIDE
                                                                                                                                        //CON EL ID, SI COINCIDE CAMBIAMOS COMPLETADA
        default:
            break;
    }
};

export function ListaTareas() {

    const [listaTareas, setLista] = useReducer(manejarLista, []);
    const [tarea, setTarea] = useState("");
    const [error, setError] = useState(false);

    const guardarTarea = (e) => {
        setTarea(e.target.value);
    };

    const AñadirTarea = (e) => {
        e.preventDefault();
        if(tarea.length<=0){
            setError(true);
        }else{
            const newTarea = { id: Date.now(), titulo: tarea, completada: 0 }
            setLista({ type: "añadir", item: newTarea });
            setTarea("");
            setError(false);
        }
    };

    const EliminarTarea = (id) => {
        setLista({ type: "eliminar", id: id });
    };

    const CompletarTarea = (id_tarea) => {
        setLista({ type: "completar", id: id_tarea });
    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 9" />
            <form onSubmit={AñadirTarea} className="col-4 m-auto mt-5">
                <label className="form-label">Tarea</label><br />
                <input type="text" name="tarea" value={tarea} onChange={guardarTarea} className="form-control" placeholder="Añade una tarea" /><br />
                {error && <p style={{color: 'red'}}>No se permiten tareas vacias</p>}
                <input type="submit" value="Guardar" className="btn btn-primary"/>
            </form>
            <ul className="mt-3 list-unstyled">
                {listaTareas.map((tarear, index) => {
                    return (
                        <>
                            <li key={tarear.id} className="bg-body-secondary mb-4 p-4 col-3 m-auto rounded shadow">
                                <p><b>Tarea:</b> {tarear.titulo}</p>
                                <p><b>Estado:</b> {tarear.completada ? "Completada" : "No completada"}</p>
                                <button onClick={() => EliminarTarea(tarear.id)} className="btn btn-danger me-1">Eliminar</button>
                                <button onClick={() => CompletarTarea(tarear.id)} className={tarear.completada ? "btn btn-warning" : "btn btn-success"}>{tarear.completada ? "Descompletar" : "Completar"}</button>
                            </li>
                        </>
                    )
                })
                }
            </ul>
        </>
    )

}