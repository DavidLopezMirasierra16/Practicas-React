import { useEffect, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function Registro() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({});

    const envio = (e)=>{
        e.preventDefault();
        if (Object.keys(error).length>0) {
            alert("Error en la validacion");
        }else{
            alert("Datos almacenados correctamente");
        }
    }

    useEffect(()=>{
        const newError = {};
        if(nombre.length<5){
            newError.nombre = "Nombre con al menos 5 caracteres";
        }

        if(!correo.includes('@')){
            newError.correo = "Correo no valido";
        }

        if(pass.length<5){
            newError.pass = "Contraseña no válida, más de 5 caracteres";
        }

        setError(newError);
    },[nombre, correo, pass]);

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 6' />
            <div>
                <form className="mt-5 col-8 m-auto" onSubmit={envio}>
                    <div class="mb-3 col-6 m-auto">
                        <label for="" class="form-label">Nombre</label>
                        <input type="text" class="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                        {error.nombre && <p style={{color: 'red'}}>{error.nombre}</p>}
                    </div>
                    <div class="mb-3 col-6 m-auto">
                        <label for="" class="form-label">Correo</label>
                        <input type="email" class="form-control" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                        {error.correo && <p style={{color: 'red'}}>{error.correo}</p>}
                    </div>
                    <div class="mb-3 col-6 m-auto">
                        <label for="" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                        {error.pass && <p style={{color: 'red'}}>{error.pass}</p>}
                    </div>
                    <button type="submit" class="btn btn-primary">Almacenar</button>
                </form>
            </div>
        </>
    )

}