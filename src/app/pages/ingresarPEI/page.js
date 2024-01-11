"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';

function ingresarPei() {
    const [formData, setFormData] = useState({
        tituloActividad: '',
        ObjetivoPei: '',
        resultadoEsperado: '',
    });
    const initialState = {
        tituloActividad: '',
        ObjetivoPei: '',
        resultadoEsperado: '',
        // Agrega más campos según sea necesario
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.tituloActividad.trim() === '') {
            alert('Por favor, ingrese el nombre de su Proyecto.');
            return;
        }
        if (formData.ObjetivoPei.trim() === '') {
            alert('Por favor, ingrese el Objetivo PEI.');
            return;
        }
        if (formData.resultadoEsperado.trim() === '') {
            alert('Por favor, ingrese el Resultado esperado.');
            return;
        }
        // Confirmación antes de enviar
        const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
        if (!confirmacion) {
            return;
        }

        // Si pasa la validación y se confirma, puedes enviar los datos al servidor o realizar otras acciones
        alert('Formulario enviado:\n' + JSON.stringify(formData, null, 2));
        // Reinicia el estado del formulario después de enviar
        setFormData(initialState);
    };
    const handlereject = () => {
        alert('Formularo eliminado')
        setFormData(initialState);
    };
    return (

        <div>
            {/* El div de arriba, contiene el topbar */}
            <Topbar></Topbar>
            {/* Este div de abajo contiene todo el formulario Ingresar PEI */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100" >
                <div className="w-full md:w-1/2 shadow-md p-4 border border-gray-300 mt-4 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 text-green-500 text-center font-bold'>INGRESAR PEI</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center col-span-2 mt-">
                                <label htmlFor="tituloActividad" className="mr-2 text-green-500">Titulo de la Actividad:</label>
                                <input
                                    type="text"
                                    id="tituloActividad"
                                    name="tituloActividad"
                                    value={formData.tituloActividad}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="ObjetivoPei" className="mr-2 text-green-500">Objetivo PEI:</label>
                                <select
                                    id="ObjetivoPei"
                                    name="ObjetivoPei"
                                    value={formData.ObjetivoPei}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
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
                                    className="w-full p-2 border rounded"
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