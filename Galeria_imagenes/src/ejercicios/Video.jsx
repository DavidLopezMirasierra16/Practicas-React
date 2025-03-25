import { useRef, useState, useEffect } from 'react'
import video from '../assets/demo.mp4'
import { NombreEjercicio } from '../Ejercicio'

export function ReproductorVideo() {

    const video_referencia = useRef();
    const [estadoVideo, setEstado] = useState(true);

    /**
     * El estado del video se encuentra por defecto en visible (true),
     * cada vez que entre aqui comprobará si está en true, si se encuentra
     * pausará el video, sino se reproducirá, y finalmente cambiará el estado
     * del video a lo contrario de cómo se encuentre
     */
    useEffect(() => {
        if (estadoVideo) {
            video_referencia.current.pause();
        } else {
            video_referencia.current.play();
        }

    }, [estadoVideo]);

    return (

        <>
            <NombreEjercicio titulo='Ejercicio 3' />
            <video className='mt-3 col-11' ref={video_referencia}>
                <source src={video} type='video/mp4' />
            </video>

            <div className='mb-5'>
                {/* <button onClick={()=>video_referencia.current.pause()}>Pausar</button> */}
                {/* <button onClick={()=>video_referencia.current.play()}>Reproducir</button> */}
                <button onClick={() => setEstado(!estadoVideo)} className={estadoVideo ? 'btn btn-success' : 'btn btn-danger'}>{estadoVideo ? 'Play' : 'Stop'}</button>
            </div>
        </>

    )

}