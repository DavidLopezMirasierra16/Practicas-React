import { useState } from "react";
import { NombreEjercicio } from "../Ejercicio";

export function TablaMultiplicar() {

    const [primerNumero, setPrimerNumero] = useState(); //La primera tabla
    const [ultimoNumero, setUltimoNumero] = useState(); //Numero de tablas
    const [num, setNum] = useState(10); //Numero por el que se va a multiplicar la tabla
    const [tabla, setTabla] = useState([]); //Guardamos las tablas
    const [error, setError] = useState(false);

    const GenerarTablas = (e) => {
        e.preventDefault();
        let guardarTabla = [];

        //Parseamos a int porque sino cuando ponemos que vaya de la tabla 12 a la 5 no da error (eso está mal).
        const primerNum = parseInt(primerNumero, 10);
        const ultimoNum = parseInt(ultimoNumero, 10);

        if (primerNum > ultimoNum) {
            setError(true);
            setTabla([]);
        } else {
            setError(false);

            for (let index = primerNumero; index <= ultimoNumero; index++) {
                let resultado = [];
                
                for (let i = 0; i <= num; i++) {
                    resultado.push(`${index}x${i} = ` + index * i); //Guardamos cada multiplicacion de la tabla
                }
                const newTabla = { 'multiplicar': index, 'resultado': resultado }
                guardarTabla.push(newTabla); //Guardamamos cada la tabla
            }
            setTabla(guardarTabla); //Guardamos las tablas
        }

    }

    const Pintar = ({ tablas, indice }) => {

        return (
            <div key={indice} className="bg-body-secondary mb-4 p-3 col-3 m-auto rounded shadow col">
                <h5 className="mb-3">Tabla del {tablas.multiplicar}</h5>
                {tablas.resultado.map(resul => {
                    return <p>{resul}</p>
                })}
            </div>
        )

    }

    return (
        <>
            <NombreEjercicio titulo="Ejercicio 20" />

            <form onSubmit={GenerarTablas} className="mt-5 mb-5">
                <div className="mb-3">
                    <label htmlFor="" className="me-2">Numero donde empieza</label>
                    <input type="number" onChange={(e) => setPrimerNumero(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="me-2">Numero donde acaba</label>
                    <input type="number" onChange={(e) => setUltimoNumero(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Personaliza hasta cuanto multiplicar</label>
                    <input type="number" onChange={(e) => setNum(e.target.value)} />
                </div>

                <input type="submit" value="Calcular" className="mt-5" />
                {error && <p style={{ color: 'red' }}>No puede ser el inicio mayor al final</p>}

            </form>

            <div className="row gap-1">
                {tabla.map((tab, index) => {
                    return (
                        <Pintar tablas={tab} indice={index} />
                    )
                })}
            </div>

        </>
    )

}