import './App.css'
import { GaleriaImagenes } from './ejercicios/Galeria'
import { CalcularPrecios } from './ejercicios/Precios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Enlaces } from './ejercicios/Navegacion'
import { Error } from './ejercicios/NotFound'
import { ReproductorVideo } from './ejercicios/Video'
import { Temporizador } from './ejercicios/Temporizador'
import { StopPlay } from './ejercicios/Temporizador_stop'
import { Registro } from './ejercicios/Formulario'
import { Reseña } from './ejercicios/Comentarios'
import { ContadorReducer } from './ejercicios/Contador'
import { ListaTareas } from './ejercicios/Tareas'
import { FormDinamico } from './ejercicios/FormularioDinamico'
import { ManejarUsuarios } from './ejercicios/Usuarios'
import { ManejarNotas } from './ejercicios/Notas'
import { FormularioHook } from './ejercicios/FormularioDinamicoHook'
import { FetchDatos } from './ejercicios/Fetch'
import { ContadorDinamicoHook } from './ejercicios/ContadorHook'
import { ToogleDinamico } from './ejercicios/Toggle'
import { MostrarModal } from './ejercicios/Modal'
import { CambiarTheme } from './ejercicios/Theme'
import { ManejarArray } from './ejercicios/ManejarArray'
import { TablaMultiplicar } from './ejercicios/Multiplicar'

function App() {

  return (
    <>
      <header className='text-center p-2'>
        <h1>React - David López Mirasierra</h1>
      </header>

      <BrowserRouter>

        <div className='d-flex col-12'>
          <Enlaces />

          <section className='text-center col-10 border border-black p-2'>
            <Routes>
              <Route path='/' element={<GaleriaImagenes />}></Route>
              <Route path='/precios' element={<CalcularPrecios />}></Route>
              <Route path='/videos' element={<ReproductorVideo />}></Route>
              <Route path='/temporizador' element={<Temporizador />}></Route>
              <Route path='/temporizadorStopPlay' element={<StopPlay />}></Route>
              <Route path='/formulario' element={<Registro />}></Route>
              <Route path='/comentarios' element={<Reseña />}></Route>
              <Route path='/contador' element={<ContadorReducer />}></Route>
              <Route path='/tareas' element={<ListaTareas />}></Route>
              <Route path='/dinamico' element={<FormDinamico />}></Route>
              <Route path='/usuarios' element={<ManejarUsuarios />}></Route>
              <Route path='/notas' element={<ManejarNotas />}></Route>
              <Route path='/formularioHook' element={<FormularioHook />}></Route>
              <Route path='/fetch' element={<FetchDatos />}></Route>
              <Route path='/contadorHook' element={<ContadorDinamicoHook />}></Route>
              <Route path='/toggle' element={<ToogleDinamico />}></Route>
              <Route path='/modal' element={<MostrarModal />}></Route>
              <Route path='/theme' element={<CambiarTheme />}></Route>
              <Route path='/array' element={<ManejarArray />}></Route>
              <Route path='/multiplicacion' element={<TablaMultiplicar />}></Route>

              <Route path='*' element={<Error />}></Route>
            </Routes>
          </section>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
