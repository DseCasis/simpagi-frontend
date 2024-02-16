"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function ingresarPoa() {

    const initialState = {
        seleccionarPei: '',
        actividadGeneral: '',
        seleccionarIndicador: '',
        fechaInicio: '',
        fechaFinal: '',
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
        if (formData.seleccionarPei.trim() === '' || 
            formData.actividadGeneral.trim() === '' ||
            formData.seleccionarIndicador.trim() === '' ||
            formData.fechaInicio.trim() === '' ||
            formData.fechaFinal.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                seleccionarPeiEmpty: formData.seleccionarPei.trim() === '',
                actividadGeneralEmpty: formData.actividadGeneral.trim() === '',
                seleccionarIndicadorEmpty: formData.seleccionarIndicador.trim() === '',
                fechaInicioEmpty: formData.fechaInicio.trim() === '',
                fechaFinalEmpty: formData.fechaFinal.trim() === '',
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
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 px-8" >
                <div className="w-full md:w-1/2 shadow-md p-4 border-4 border-green-800 mt-4 bg-gray-100 border md:shadow-1xl md:shadow-stone-700 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>INGRESAR POA</div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">

                            <div className="flex items-center">
                                <label htmlFor="seleccionarPei" className="mr-2 text-green-500">Seleccionar PEI:</label>
                                <select
                                    id="seleccionarPei"
                                    name="seleccionarPei"
                                    value={formData.seleccionarPei}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.seleccionarPeiEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}

                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="seleccionarPeiUno" className="whitespace-nowrap">Opción 1</option>
                                    <option value="seleccionarPeiDos" className="whitespace-nowrap">Opción 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>



                            <div className={`flex items-center`}>
                                <label htmlFor="actividadGeneral" className="mr-2 text-green-500">Actividad General:</label>
                                <input
                                    type="text"
                                    id="actividadGeneral"
                                    name="actividadGeneral"
                                    value={formData.actividadGeneral}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.actividadGeneralEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="seleccionarIndicador" className="mr-2 text-green-500">Seleccionar Indicador:</label>
                                <select
                                    id="seleccionarIndicador"
                                    name="seleccionarIndicador"
                                    value={formData.seleccionarIndicador}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.seleccionarIndicadorEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}

                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="seleccionarIndicadorUno" className="whitespace-nowrap">Opcíon 1</option>
                                    <option value="seleccionarIndicadorDos" className="whitespace-nowrap">Opción 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="fechaInicio" className="mr-2 text-green-500">Fecha Inicio:</label>
                                <input
                                    type="date"
                                    id="fechaInicio"
                                    name="fechaInicio"
                                    value={formData.fechaInicio}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 border ${formData.fechaInicioEmpty ? 'border-red-500' : 'border-gray-300'} rounded text-green-700 py-1 px-3`}
                                />
                            </div>



                            <div className="flex items-center">
                                <label htmlFor="fechaFinal" className="mr-2 text-green-500">Fecha Final</label>
                                <input
                                    type="date"
                                    id="fechaFinal"
                                    name="fechaFinal"
                                    value={formData.fechaFinal}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 border ${formData.fechaFinalEmpty ? 'border-red-500' : 'border-gray-300'} rounded text-green-700 py-1 px-3`}
                                />
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

export default ingresarPoa;