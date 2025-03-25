import { useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function GaleriaImagenes() {

    //Siempre que se modifique un useState se renderizará
    const [imagenes, setImagenes] = useState(['https://i.pinimg.com/736x/b7/63/da/b763da4702c7719e01dcf77819a1909f.jpg',
        'https://debandera.es/218-large_default/bandera-de-espana.jpg',
        'https://as.com/epik/imagenes/2018/05/21/portada/1526902693_412838_1526902885_sumario_normal.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRZ1xb_owAE4-JUQCdwQ3CU16vvXUdsSEwQ&s'
    ]);
    const [imagen, setImagen] = useState("");
    const [contador, setContador] = useState(0);
    const [error, setError] = useState();

    /**
     * Nos guarda lo que escribamos en tiempo real en imagen
     * @param {} e 
     */
    const guardarImagen = (e) => {
        setImagen(e.target.value);
    }

    /**
     * Si la url es mayor a 5 caracteres, nos guarda la tarea en el array,
     * menor a5 no la guarda
     */
    const GuardarImagenes = () => {
        setError(""); //Cuando se vuelva a renderizar el componente, se pondrá vacio
        if (imagen.length > 5) {
            setImagenes([...imagenes, imagen]);
            setImagen("");
        } else {
            setError("Tiene que ser mas de 5 caracteres");
        }
    }

    /**
     * Nos muestra las imagenes del array
     * @returns
     */
    const CambiarImagenes = () => {
        return (
            <>
                
                <img src={imagenes[contador]} alt="" style={{ width: "200px", height: "200px" }} className="mt-5"/> {/**En el array se pone en la posicion del contador */}

                <div>
                    {contador != 0 && <button onClick={() => setContador(contador - 1)} className="btn btn-secondary">Anterior</button>}
                    {contador != imagenes.length - 1 && <button onClick={() => setContador(contador + 1)} className="btn btn-primary">Siguiente</button>}
                </div>

            </>
        )
    }

    return (
        <>  
            <NombreEjercicio titulo='Ejercicio 1'/>
            <input type="text" value={imagen} onChange={guardarImagen} className="mt-3 mb-3" placeholder="Ingresa una url" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={GuardarImagenes} className="btn btn-success ms-3">Guardar imagen</button>

            <div>
                {imagenes.map((imag, index) => (
                    <img style={{ width: "200px", height: "200px" }} src={imag} alt="" key={index} />
                ))}
            </div>

            <CambiarImagenes />

        </>
    )

}