import { NombreEjercicio } from "../Ejercicio";
import { useTheme } from "./hooks/useTheme";

export function CambiarTheme() {

    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{backgroundColor: theme=='light' ? 'white' : 'black'}}>
            <NombreEjercicio titulo='Ejercicio 18'/>
            <button onClick={toggleTheme} className="mt-5 mb-5">Cambiar el fondo {theme=='dark' ? 'oscuro' : 'claro'}</button>
        </div>
    )   

}