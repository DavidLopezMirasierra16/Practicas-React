import { useEffect, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";
import { useForm } from "./hooks/useForm";

export function FormularioHook() {

    const { valores, handleChange, resetForm } = useForm({ nombre: '' }); //Le pasamos un objeto solo con nombre
    const [datos, setDatos] = useState([]);
    const [newData, setNewData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setDatos([...datos, valores]);
    }

    const handleData = (e, index, nombre) => {
        const { value } = e.target;
        setNewData({ 'valor': value, 'indice': index, 'nombre': nombre });
    }

    const GuardarNewData = (e, index) => {
        e.preventDefault();
        const newDatos = [...datos]; //Duplicamos primero el array
        newDatos[index] = newData; //Buscamos en el duplicado la posicion index y le metemos los valores
        setDatos(newDatos);
    }

    const showJSON = (e) => {
        e.preventDefault();
        console.log("Datos del formulario: "+JSON.stringify(datos));
    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 13" />
            <form onSubmit={handleSubmit} className="col-4 m-auto mt-5">
                <label className="form-label">Ingresa el campo que quieres crear</label><br />
                {/* Le pasamos al useForm un objeto que contiene nombre, en el hook se va a guardar en la variable valores, por lo 
                tanto, cuando llamemos al hook, la variable valores que retorna tendrá el objeto por eso ponemos => valores.nombre, para poder
                asignarle el value de este input a esa variable */}
                <input type="text" name="nombre" value={valores.nombre} onChange={handleChange} className="form-control" />
                <br />
                <input type="submit" value="Añadir" className="btn btn-primary" />
            </form>
            {valores.nombre.length!=0 && <input type="submit" value="Limpiar" onClick={resetForm} className="mt-1 btn btn-danger" />}
            
            <form>

                {datos.map((data, index) => {
                    return (
                        <div className="bg-body-secondary mt-5 p-4 col-4 m-auto rounded shadow" key={index}>
                            <input type="text" placeholder={"Introduce " + data.nombre} className="mt-3" onChange={(e) => handleData(e, index, data.nombre)} />
                            <input type="submit" value="Guardar" className="btn btn-primary ms-2" onClick={(e) => GuardarNewData(e, index)} />
                        </div>
                    )
                })}

                {datos.length != 0 && <input type="submit" value="Mostrar JSON" className="mt-5" onClick={showJSON} />}

            </form>

        </>
    )

}