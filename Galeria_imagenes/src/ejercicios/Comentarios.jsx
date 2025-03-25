import { useEffect, useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function Reseña(){

    const [usuario, setUsuario] = useState('');
    const [reseña, setReseña] = useState('');
    const [comentario, setComentario] = useState('');
    const [comentarios, setComentarios] = useState([]);
    const [error, setError] = useState(false);
    
    /**
     * Éste useEffect te pilla el localStorage que tengas almacenado cuando renderize
     * el componente solo la primera vez (sobre los datos almacenados trabajo)
     */
    useEffect(()=>{
        const comentarios_storage = JSON.parse(localStorage.getItem('Perfil'));
        if(comentarios_storage){
            setComentarios(comentarios_storage);
        }else{
            console.log("No hay datos en el localstorage");
        }
    }, []);
    
    useEffect(()=>{
        if(comentarios.length > 0){
            localStorage.setItem("Perfil", JSON.stringify(comentarios))
        }else{
            localStorage.removeItem("Perfil");
        }
    }, [comentarios]);

    /**
     * Cuando enviemos el formulario que se guarde en el useState comentarios
     * @param {} e 
     */
    const enviar = (e) =>{
        e.preventDefault();
        //Nos creamos un objeto que englobe todos los datos

        if(usuario.length==0 || reseña.length==0 || comentario.length==0){
            setError(true);
        }else{
            const newPerfil = {
                id: Date.now(),
                usuario,
                reseña,
                comentario,
                like:0,
                dislike:0
            }
    
            //Añadimos al array de comentarios el comentario creado (todos los datos)
            setComentarios([...comentarios, newPerfil]);
            setUsuario('');
            setComentario('');
            setReseña('');
            setError(false);
        }

    }

    const añadirLike = (id) =>{
        const comentario_like = comentarios.map(comentario => comentario.id === id ? {...comentario, like: comentario.like+1} : comentario);
        setComentarios(comentario_like);
    }

    const eliminarLike = (id) =>{
        const comentario_dislike = comentarios.map((comentario)=>comentario.id === id ? {...comentario, dislike: comentario.dislike+1} : comentario);
        setComentarios(comentario_dislike);
    }

    const eliminar = (id) =>{
        const comentario_eliminar = [...comentarios.filter(comentario => comentario.id != id)];
        setComentarios(comentario_eliminar); //No hace falta guardarlo en el localstorage ya que esta cambiandose en el useEffect
    }

    /**
     * Nos pinta la caja del comentario
     * @param {} param0 
     * @returns 
     */
    const CajaMensaje = ({comentario_mostrar}) =>{
        return (
            <div className="bg-body-secondary rounded shadow p-4 col-6 m-auto mb-4">
                <h3>Usuario: {comentario_mostrar.usuario ? comentario_mostrar.usuario : 'No hay usuario'}</h3>
                <h4>Reseña: {comentario_mostrar.reseña ? comentario_mostrar.reseña : 'No hay reseña'}</h4>
                <h5>Comentario: {comentario_mostrar.comentario ? comentario_mostrar.comentario : 'No hay comentario'}</h5>
                <div>
                    <button type="button" className="btn btn-success me-1" onClick={()=>añadirLike(comentario_mostrar.id)}>Like: {comentario_mostrar.like}</button>
                    <button type="button" className="btn btn-warning me-1" onClick={()=>eliminarLike(comentario_mostrar.id)}>Dislike: {comentario_mostrar.dislike}</button>
                    <button type="button" className="btn btn-danger" onClick={()=>eliminar(comentario_mostrar.id)}>Eliminar</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 7'/>

            <div>
                <form className="mt-5 col-8 m-auto mb-5" onSubmit={enviar}>
                    <div className="mb-3 col-6 m-auto">
                        <label className="form-label">Nombre de usuario</label>
                        <input type="text" className="form-control" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
                    </div>
                    <div className="mb-3 col-6 m-auto">
                        <label className="form-label">Reseña</label>
                        <input type="text" className="form-control" value={reseña} onChange={(e)=>setReseña(e.target.value)}/>
                    </div>
                    <div className="mb-3 col-6 m-auto">
                        <label className="form-label">Comentario</label>
                        <input type="text" className="form-control" value={comentario} onChange={(e)=>setComentario(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    {error && <p style={{ color: 'red' }}>No valen campos vacios</p>}
                </form>
            </div>
            
            <div>
                {comentarios.map((coment, index) => {
                    return <CajaMensaje comentario_mostrar={coment} key={index}/>
                })}
            </div>

        </>

    )

}