"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';

function objetivoPei() {
    const [formData, setFormData] = useState({
        tituloObjetivo: '',
        areaInvestigacion: '',
        lineaInvestigacion: '',
        programaDepartamento: '',
        rubro: '',
        indicadorResultado: '',
        responsable: '',
    });
    const initialState = {
        tituloObjetivo: '',
        areaInvestigacion: '',
        lineaInvestigacion: '',
        programaDepartamento: '',
        rubro: '',
        indicadorResultado: '',
        responsable: '',
        // Agrega más campos según sea necesario
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.tituloObjetivo.trim() === '') {
            alert('Por favor, el Título del objetivo.');
            return;
        }
        if (formData.areaInvestigacion.trim() === '') {
            alert('Por favor, seleccione el Área de investigación.');
            return;
        }
        if (formData.lineaInvestigacion.trim() === '') {
            alert('Por favor, seleccione la Línea de investigación.');
            return;
        }
        if (formData.programaDepartamento.trim() === '') {
            alert('Por favor, seleccione el Programa o departamento.');
            return;
        }
        if (formData.rubro.trim() === '') {
            alert('Por favor, seleccione el rubro.');
            return;
        }
        if (formData.indicadorResultado.trim() === '') {
            alert('Por favor, seleccione el Indicador de resultado.');
            return;
        }
        if (formData.responsable.trim() === '') {
            alert('Por favor, ingrese el Responsable.');
            return;
        }
        // Confirmación antes de enviar
        const confirmacion = window.confirm('¿Estás seguro de enviar el objetivo PEI?');
        if (!confirmacion) {
            return;
        }

        // Si pasa la validación y se confirma, puedes enviar los datos al servidor o realizar otras acciones
        alert('Formulario enviado:\n' + JSON.stringify(formData, null, 2));
        // Reinicia el estado del formulario después de enviar
        setFormData(initialState);
    };
    const handlereject = () => {
        const confirmacioneliminar = window.confirm('¿Estás seguro de eliminar todo?');
        if (!confirmacioneliminar) {
            return;
        }
        alert('Se ha eliminado el formulario')
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
                        <div className='mt-4 text-green-500 text-center font-bold'>Ingresar Objetivo PEI</div>
                        <div className="grid grid-cols-5 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center col-span-2 mt-">
                                <label htmlFor="tituloObjetivo" className="mr-2 text-green-500">Titulo Del Objetivo:</label>
                                <input
                                    type="text"
                                    id="tituloObjetivo"
                                    name="tituloObjetivo"
                                    value={formData.tituloObjetivo}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="areaInvestigacion" className="mr-2 text-green-500">Área Investigación:</label>
                                <select
                                    id="areaInvestigacion"
                                    name="areaInvestigacion"
                                    value={formData.areaInvestigacion}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="areaInvestigacionUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="areaInvestigacionDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="lineaInvestigacion" className="mr-2 text-green-500">Línea de Investigación:</label>
                                <select
                                    id="lineaInvestigacion"
                                    name="lineaInvestigacion"
                                    value={formData.lineaInvestigacion}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="lineaInvestigacionUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="lineaInvestigacionDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="programaDepartamento" className="mr-2 text-green-500">Programa o Departamento:</label>
                                <select
                                    id="programaDepartamento"
                                    name="programaDepartamento"
                                    value={formData.programaDepartamento}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="programaDepartamentoUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="programaDepartamentoDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="rubro" className="mr-2 text-green-500">Rubro:</label>
                                <select
                                    id="rubro"
                                    name="rubro"
                                    value={formData.rubro}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="rubroUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="rubroDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>
                            <div className="col-span-2 flex items-center mx-auto">
                                <label htmlFor="indicadorResultado" className="mr-2 text-green-500">Indicador Resultado:</label>
                                <select
                                    id="indicadorResultado"
                                    name="indicadorResultado"
                                    value={formData.indicadorResultado}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="indicadorResultadoUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="indicadorResultadoDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>
                            <div className="col-span-2 flex items-center mx-auto">
                                <label htmlFor="responsable" className="mr-2 text-green-500">Responsable:</label>
                                <input
                                    type="text"
                                    id="responsable"
                                    name="responsable"
                                    value={formData.responsable}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                                />
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

export default objetivoPei;