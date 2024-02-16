"use client"

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function Actividades() {



    const initialState = {
        // ... otros campos
        actividadUnoVisible: false,
        actividadDosVisible: false,
        actividadTresVisible: false,
        nombreActividadUno: '',  // Nuevo campo para nombre de actividadUno
        nombreActividadDos: '',  // Nuevo campo para nombre de actividadDos
        nombreActividadTres: '',  // Nuevo campo para nombre de actividadTres
        seleccionProyecto: '',
        seleccionComponente: '',
        seleccionProyectoEmpty: false,
        seleccionComponenteEmpty: false,
    };

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.seleccionProyecto.trim() === '' || formData.seleccionComponente.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                seleccionProyectoEmpty: formData.seleccionProyecto.trim() === '',
                seleccionComponenteEmpty: formData.seleccionComponente.trim() === '',
            });

            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
            });
            return;
        }

        // Confirmación antes de enviar
        Swal.fire({
            title: '¿Estás seguro de enviar?',
            text: '¡Una vez hecho esto no se puede revertir!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, envíalo!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Mostrar el nombre debajo del botón correspondiente
                if (formData.actividadUnoVisible) {
                    setFormData({
                        ...formData,
                        actividadUnoVisible: false,
                        nombreActividadUno: formData.nombreActividadUno,
                    });
                } else if (formData.actividadDosVisible) {
                    setFormData({
                        ...formData,
                        actividadDosVisible: false,
                        nombreActividadDos: formData.nombreActividadDos,
                    });
                } else if (formData.actividadTresVisible) {
                    setFormData({
                        ...formData,
                        actividadTresVisible: false,
                        nombreActividadTres: formData.nombreActividadTres,
                    });
                }

                // Enviar datos al servidor o realizar otras acciones
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Tu archivo se ha enviado.',
                    icon: 'success',
                });

                // Reiniciar el estado del formulario principal después de enviar
                setFormData(initialState);
            }
        });
    };

    const mostrarActividad = (actividad) => {
        setFormData({
            ...formData,
            [`${actividad}Visible`]: true,
        });
    };

    const ocultarActividad = (actividad) => {
        setFormData({
            ...formData,
            [`${actividad}Visible`]: false,
        });
    };

    const handlereject = () => {
        // Rechazar el formulario y reiniciar el estado
        Swal.fire({
            title: 'Formulario eliminado',
            icon: 'info',
        });
        setFormData(initialState);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
            <form onSubmit={handleSubmit}>
                <div className="w-full shadow-md p-4 border-4 mt-4 bg-gray-100 border md:shadow-2xl md:shadow-stone-500 rounded-lg">
                    <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>Selección de Proyecto</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className={`flex items-center col-span-2 mt-2`}>
                            <label htmlFor="seleccionProyecto" className="mr-2 text-green-500">Seleccione el Proyecto:</label>
                            <select
                                id="seleccionProyecto"
                                name="seleccionProyecto"
                                value={formData.seleccionProyecto}
                                onChange={handleInputChange}
                                className={`w-full p-2 ${formData.seleccionProyectoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                            >
                                <option value="" className="whitespace-nowrap">Seleccione...</option>
                                <option value="ObjetivoPeiUno" className="whitespace-nowrap">Conservar y usar</option>
                                <option value="ObjetivoPeiDos" className="whitespace-nowrap">Opción 2</option>
                                {/* Opciones del select */}
                            </select>
                        </div>

                        <div className={`flex items-center col-span-2 mt- `}>
                            <label htmlFor="seleccionComponente" className="mr-2 text-green-500">Seleccione el Componente:</label>
                            <select
                                id="seleccionComponente"
                                name="seleccionComponente"
                                value={formData.seleccionComponente}
                                onChange={handleInputChange}
                                className={`w-full p-2 ${formData.seleccionComponenteEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                            >
                                <option value="" className="whitespace-nowrap">Seleccione...</option>
                                <option value="ObjetivoPeiUno" className="whitespace-nowrap">Conservar y usar</option>
                                <option value="ObjetivoPeiDos" className="whitespace-nowrap">Opción 2</option>
                                {/* Opciones del select */}
                            </select>
                        </div>
                    </div>

                </div>

                <div class="mt-1"></div>

                {/* Este div inicia el Segundo cuadro */}
                <div className="w-full shadow-md p-4 border-4 mt-4 bg-gray-100 border md:shadow-2xl md:shadow-stone-500 rounded-lg">

                    <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>Ingreso de Actividades</div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-4">

                        {/* Actividad 1 */}
                        <button
                            type="button"
                            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                            onClick={() => mostrarActividad('actividadUno')}
                        >
                            <span className="pl-2 mx-1">Agregar Actividad Uno</span>
                        </button>

                        {/* Actividad 2 */}
                        <button
                            type="button"
                            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                            onClick={() => mostrarActividad('actividadDos')}
                        >
                            <span className="pl-2 mx-1">Agregar Actividad Dos</span>
                        </button>

                        {/* Actividad 3 */}
                        <button
                            type="button"
                            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                            onClick={() => mostrarActividad('actividadTres')}
                        >
                            <span className="pl-2 mx-1">Agregar Actividad Tres</span>
                        </button>
                    </div>
                    {['actividadUno', 'actividadDos', 'actividadTres'].map((actividad) => (
                        formData[`${actividad}Visible`] && (
                            <div key={actividad} className="fixed z-10 inset-0 overflow-y-auto">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                    <div className="fixed inset-0 transition-opacity">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>

                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                        <div className="bg-white p-4">
                                            <label htmlFor={`nombre${actividad}`} className="mr-2 text-green-500">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                id={`nombre${actividad}`}
                                                name={`nombre${actividad}`}
                                                value={formData[`nombre${actividad}`]}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border-gray-300 border rounded"
                                            />
                                            <div className="mt-4 flex justify-center">
                                                <button
                                                    type="submit"
                                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                                                >
                                                    Agregar
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => ocultarActividad(actividad)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Regresar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}

                    <div className="mt-4 flex justify-center col-span-2 mt-3">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                        >
                            Aceptar
                        </button>
                        <button
                            type="button"
                            onClick={handlereject}
                            className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Rechazar
                        </button>
                    </div>


                </div>
                {/* Este div cierra el segundo cuadro  */}
            </form>
        </div>

    );
}

export default Actividades;