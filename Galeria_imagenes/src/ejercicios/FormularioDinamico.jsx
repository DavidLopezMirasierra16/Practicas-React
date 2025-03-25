import { useReducer, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

const cambiarFormulario = (formularioEstado, action) => {
    switch (action.type) {
        case "crear":
            return [...formularioEstado, action.objeto];
        case "eliminar":
            return formularioEstado.filter(campo => campo.name !== action.name);
        default:
            break;
    }
}

export function FormDinamico() {

    const [formulario, setFormulario] = useReducer(cambiarFormulario, []);
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);

    const guardarNombre = (e) => {
        setNombre(e.target.value);
    }

    const AñadirCampo = () => {

        if (nombre.length == 0) {
            setError(true);
        } else {
            const newInput = { id: Date.now(), name: nombre }
            setFormulario({ type: "crear", objeto: newInput });
            setNombre("");
            setError(false);
        }

    }

    const EliminarCampo = (name_eliminar) => {
        setFormulario({ type: "eliminar", name: name_eliminar });
    }

    const Generar = () => {
        if (formulario.length <= 0) {
            console.log("Formulario vacio");
        } else {
            console.log(JSON.stringify(formulario));
        }
    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 10" />

            <input type="text" name="nombre" value={nombre} onChange={guardarNombre} className="me-2 mt-5" placeholder="Escribe lo que quieras"></input>
            <button onClick={() => AñadirCampo()} className="btn btn-primary me-1">Agregar campo</button>
            <button onClick={() => Generar()} className="btn btn-success">Actualizar valor</button>
            {error && <p style={{ color: 'red' }}>No se valen campos vacios</p>}
            <form>

                {formulario.map((campo) => {
                    return (
                        <div key={campo.id} className="mt-3">
                            <input type="text" value={campo.name} disabled />
                            <button onClick={() => EliminarCampo(campo.name)} className="btn btn-danger ms-2">Eliminar</button>
                        </div>
                    )
                })}

            </form>
        </>
    )

}