import { useReducer, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

const ejecutarUsuarios = (estadoUsuarios, action) => {
    switch (action.type) {
        case "agregar_usuario":
            return [...estadoUsuarios, action.user];
        case "eliminar_usuario":
            return estadoUsuarios.filter(usuario => usuario.email !== action.email);
        case "editar_usuario":
            return estadoUsuarios.map(usuario => usuario.id === action.user.id ? { ...usuario, ...action.user } : usuario);
        default:
            break;
    }
}

export function ManejarUsuarios() {

    const [usuarios, setUsuarios] = useReducer(ejecutarUsuarios, []);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState(false);
    const [editar, setEditar] = useState(false);
    const [editarUsuario, setEditarUsuario] = useState();

    const GuardarNombre = (e) => {
        setNombre(e.target.value);
    }

    const GuardarCorreo = (e) => {
        setCorreo(e.target.value);
    }

    const AñadirUsuario = (e) => {
        e.preventDefault();

        if (editar) {
            const editUsuario = { ...editarUsuario, name: nombre, email: correo }
            setUsuarios({ type: "editar_usuario", user: editUsuario });
            VaciarCampos();
            setEditar(false);

        } else {
            const comprobar_email = usuarios.find(usuario => usuario.email === correo);

            if (comprobar_email) {
                setError(true);
            } else {
                const newUsuario = { id: Date.now(), name: nombre, email: correo };
                setUsuarios({ type: "agregar_usuario", user: newUsuario });
                VaciarCampos();
                setError(false);
            }

        }

    }

    const EliminarUsuario = (email_eliminar) => {
        setUsuarios({ type: "eliminar_usuario", email: email_eliminar });
    }

    const MostrarDatosUsuario = (user) => {
        setEditarUsuario(user);
        setNombre(user.name);
        setCorreo(user.email);
        setEditar(true);
    }

    const VaciarCampos = () => {
        setNombre("");
        setCorreo("");
    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 11" />
            <form onSubmit={AñadirUsuario} className="col-4 m-auto mt-5">
                <label className="form-label">Nombre</label><br />
                <input type="text" name="nombre" value={nombre} className="form-control" onChange={GuardarNombre} placeholder="Añade un nombre"/><br />

                <label className="form-label">Correo</label><br />
                <input type="email" name="correo" value={correo} className="form-control" onChange={GuardarCorreo} placeholder="Añade un correo"/><br />

                <button className="btn btn-primary me-1" type="submit">{editar ? "Editar" : "Agregar"}</button>

                {error && <p style={{ color: 'red' }}>Correo ya registrado</p>}
            </form>

            {usuarios.map((user) => {
                return (
                    <div key={user.id} className="bg-body-secondary mt-3 p-4 col-3 m-auto rounded shadow">
                        <h4>Usuario</h4>
                        <p>Nombre: {user.name}</p>
                        <p>Correo: {user.email}</p>
                        <button onClick={() => EliminarUsuario(user.email)} className="btn btn-danger me-1">Eliminar</button>
                        <button onClick={() => MostrarDatosUsuario(user)} className="btn btn-success">Editar</button>
                    </div>
                )
            })}

        </>
    )

}