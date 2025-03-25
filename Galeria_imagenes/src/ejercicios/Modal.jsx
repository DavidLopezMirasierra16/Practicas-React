import { NombreEjercicio } from "../Ejercicio";
import { useModal } from "./hooks/useModal";

export function MostrarModal() {

    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <NombreEjercicio titulo='Ejercicio 17' />

            {isOpen &&
                (
                    <div className="modal fade show" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                        <div className="modal-dialog bg-body-secondary col-3 rounded shadow">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Me estoy mostrando</h1>
                                </div>
                                <div className="modal-body">
                                    ¡¡¡Hola, soy un modal!!!
                                </div>
                                <div className="modal-footer">
                                    <button onClick={closeModal} disabled={!isOpen} className="btn btn-warning">Cerrar modal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <button onClick={openModal} disabled={isOpen} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary mt-5">Mostrar modal</button>
        </>

    )

}