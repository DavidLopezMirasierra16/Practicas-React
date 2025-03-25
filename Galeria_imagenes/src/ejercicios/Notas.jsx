import { useReducer, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

const ejecutarNotas = (estadoNotas, action) => {
    switch (action.type) {
        case "agregar_nota":
            return [...estadoNotas, action.note];
        case "eliminar_nota":
            return estadoNotas.filter(nota => nota.id !== action.id);
        case "editar_nota":
            return estadoNotas.map(nota => nota.id === action.note.id ? { ...nota, ...action.note } : nota);
        default:
            break;
    }
}

export function ManejarNotas() {

    const [notas, setNotas] = useReducer(ejecutarNotas, []);
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [error, setError] = useState(false);
    const [editar, setEditar] = useState(false);
    const [notaEditar, setNotaEditar] = useState();

    const GuardarTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const GuardarContenido = (e) => {
        setContenido(e.target.value);
    }

    const GuardarNota = (e) => {
        e.preventDefault();

        if (titulo.length == 0 || contenido.length == 0) {
            setError(true);
        } else {

            if (editar) {
                const noteEdit = { ...notaEditar, title: titulo, content: contenido };
                setNotas({ type: "editar_nota", note: noteEdit });
                vaciarCampos();
                setError(false);
                setEditar(false);
            } else {
                setError(false);
                const newNota = { id: Date.now(), title: titulo, content: contenido };
                setNotas({ type: "agregar_nota", note: newNota });
                vaciarCampos();
            }
        }
    }

    const EliminarNota = (id_eliminar) => {
        setNotas({ type: "eliminar_nota", id: id_eliminar });
    }

    const MostrarNota = (nota) => {
        setNotaEditar(nota);
        setTitulo(nota.title);
        setContenido(nota.content);
        setEditar(true);
    }

    const vaciarCampos = () => {
        setTitulo("");
        setContenido("");
    }

    const Restablecer = () => {
        vaciarCampos();
        setEditar(false);
    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 12" />
            <form className="col-4 m-auto mt-5" onSubmit={GuardarNota}>
                <label className="form-label">Titulo</label><br />
                <input type="text" name="titulo" value={titulo} onChange={GuardarTitulo} className="form-control" placeholder="Añade una titulo" /><br />

                <label className="form-label">Contenido</label><br />
                <input type="text" name="contenido" value={contenido} onChange={GuardarContenido} className="form-control" placeholder="Añade una descripcion" /><br />

                <button type="submit" value="Guardar" className="btn btn-primary">{editar ? "Editar" : "Guardar"}</button>
                {error && <p style={{ color: 'red' }}>No se permiten campos vacios</p>}
            </form>
            <br/>
            {editar && <button className="btn btn-warning" onClick={() => Restablecer()}>Restablecer</button>}

            {notas.map(nota => {
                return <div key={nota.id} className="bg-body-secondary mt-3 p-4 col-3 m-auto rounded shadow">
                    <h4>Nota</h4>
                    <p>Titulo: {nota.title}</p>
                    <p>Contenido: {nota.content}</p>
                    <button onClick={() => EliminarNota(nota.id)} className="btn btn-danger me-1">Eliminar</button>
                    <button onClick={() => MostrarNota(nota)} className="btn btn-success">Editar</button>
                </div>
            })}

        </>
    )

}