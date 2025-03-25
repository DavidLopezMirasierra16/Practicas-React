import { Link } from "react-router-dom";

export function Enlaces(){

    return (
        <div className="text-center col-2 border border-black bottom-padding pt-2">
            <h4>Ejercicios</h4>
            <nav>
                {/** Estos son los enlaces de navegacion */}
                <Link to='/' className="d-block">Galeria</Link>
                <Link to='/precios' className="d-block">Precios</Link>
                <Link to='/videos' className="d-block">Videos</Link>
                <Link to='/temporizador' className="d-block">Temporizador</Link>
                <Link to='/temporizadorStopPlay' className="d-block">Stop Play</Link>
                <Link to='/formulario' className="d-block">Formulario</Link>
                <Link to='/comentarios' className="d-block">Comentarios</Link>
                <Link to='/contador' className="d-block">Contador</Link>
                <Link to='/tareas' className="d-block">Lista de tareas</Link>
                <Link to='/dinamico' className="d-block">Formulario Dinámico</Link>
                <Link to='/usuarios' className="d-block">Manejar usuarios</Link>
                <Link to='/notas' className="d-block">Notas</Link>
                <Link to='/formularioHook' className="d-block">Formulario Hook</Link>
                <Link to='/fetch' className="d-block">Peticion fetch</Link>
                <Link to='/contadorHook' className="d-block">Contador Hook</Link>
                <Link to='/toggle' className="d-block">Toggle</Link>
                <Link to='/modal' className="d-block">Modal</Link>
                <Link to='/theme' className="d-block">Color</Link>
                <Link to='/array' className="d-block">Manejar array</Link>
                <Link to='/multiplicacion' className="d-block">Tabla de multiplicar</Link>
            </nav>
        </div>
    )

}