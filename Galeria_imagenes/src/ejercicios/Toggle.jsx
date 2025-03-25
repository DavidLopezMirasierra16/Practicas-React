import { NombreEjercicio } from "../Ejercicio";
import { useToggle } from "./hooks/useToggle";

export function ToogleDinamico() {

    const [toggle, HandleToggle] = useToggle();
    let imagen = 'https://images.daznservices.com/di/library/DAZN_News/d5/52/ferrari-sf25_lwsaxodr0cim1jo7iz6nb2ar7.jpg?t=453026013';

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 16' />
            <button onClick={HandleToggle} className={toggle ? "btn btn-danger mt-5" : "btn btn-primary mt-5"}>{toggle ? 'Ocultar' : 'Mostrar'}</button>
            <br/><br/>
            {toggle && <img src={imagen} className="col-5 mb-2"/>}
        </>
    )

}