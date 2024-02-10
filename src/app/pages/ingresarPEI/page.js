"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function ingresarPei() {

    const initialState = {
        tituloActividad: '',
        ObjetivoPei: '',
        resultadoEsperado: '',
        // Agrega más campos según sea necesario
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
        if (formData.tituloActividad.trim() === '' || formData.ObjetivoPei.trim() === '' || formData.resultadoEsperado.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                tituloActividadEmpty: formData.tituloActividad.trim() === '',
                ObjetivoPeiEmpty: formData.ObjetivoPei.trim() === '',
                resultadoEsperadoEmpty: formData.resultadoEsperado.trim() === '',
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
                // Enviar datos al servidor o realizar otras acciones
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Tu archivo se ha enviado.',
                    icon: 'success',
                });
                // Reiniciar el estado del formulario después de enviar
                setFormData(initialState);
            }
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

        <div>
            {/* El div de arriba, contiene el topbar */}
            <Topbar></Topbar>
            {/* Este div de abajo contiene todo el formulario Ingresar PEI */}
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900" >
                <div className="w-full md:w-1/2 shadow-md p-4 border-4 mt-4 bg-gray-100 border md:shadow-2xl md:shadow-stone-500 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>INGRESAR PEI</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className={`flex items-center col-span-2 mt- `}>
                                <label htmlFor="tituloActividad" className="mr-2 text-green-500">Titulo de la Actividad:</label>
                                <input
                                    type="text"
                                    id="tituloActividad"
                                    name="tituloActividad"
                                    value={formData.tituloActividad}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.tituloActividadEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="ObjetivoPei" className="mr-2 text-green-500">Objetivo PEI:</label>
                                <select
                                    id="ObjetivoPei"
                                    name="ObjetivoPei"
                                    value={formData.ObjetivoPei}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.ObjetivoPeiEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}

                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="ObjetivoPeiUno" className="whitespace-nowrap">Conservar y usar</option>
                                    <option value="ObjetivoPeiDos" className="whitespace-nowrap">Opción 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="resultadoEsperado" className="mr-2 text-green-500">Resultado Esperado:</label>
                                <select
                                    id="resultadoEsperado"
                                    name="resultadoEsperado"
                                    value={formData.resultadoEsperado}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.resultadoEsperadoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="resultadoEsperado" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="resultadoEsperado" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                        </div>

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

                    </form>
                </div>
            </div>
        </div>
    );
}

export default ingresarPei;