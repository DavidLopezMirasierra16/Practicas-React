import { useState } from "react";
import { NombreEjercicio } from "../Ejercicio";
import { useFetch } from "./hooks/useFetch";

export function FetchDatos() {

    const [pagina, setPagina] = useState(1);
    let url = `https://biblioteca.guappi.com/api/libros/pagina/${pagina}`;
    const { data, loading, error } = useFetch(url);

    const Avanzar = () => {
        setPagina((prevPag) => prevPag + 1);
    }

    const Retroceder = () => {
        setPagina((prevPag) => prevPag - 1);
    }

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 14' />
            {loading && <p>Cargando...</p>}
            {error && <p>{error.error}</p>}

            <div className={loading ? "d.none" : "bg-body-secondary mt-5 p-4 col-4 m-auto rounded shadow"}>
                {!loading && <h5 className="mb-4">Pagina {pagina}</h5>}
                {data.map((dato, index) => {
                    return <p key={index}>Titulo: {dato.titulo}</p>
                })}
                
                {data.length > 0 && <button onClick={Avanzar} className="btn btn-primary me-1">Adelante</button>}
                {pagina != 1 && <button onClick={Retroceder} className="btn btn-success">Atras</button>}
            </div>

        </>
    )

}