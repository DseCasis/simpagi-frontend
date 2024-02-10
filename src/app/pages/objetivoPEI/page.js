"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function objetivoPei() {
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

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.tituloObjetivo.trim() === '' || formData.areaInvestigacion.trim() === '' || formData.lineaInvestigacion.trim() === ''
            || formData.programaDepartamento.trim() === '' || formData.rubro.trim() === '' || formData.indicadorResultado.trim() === ''
            || formData.responsable.trim() === '') {
            setFormData({
                ...formData,
                tituloObjetivoEmpty: formData.tituloObjetivo.trim() === '',
                areaInvestigacionEmpty: formData.areaInvestigacion.trim() === '',
                lineaInvestigacionEmpty: formData.lineaInvestigacion.trim() === '',
                programaDepartamentoEmpty: formData.programaDepartamento.trim() === '',
                rubroEmpty: formData.rubro.trim() === '',
                indicadorResultadoEmpty: formData.indicadorResultado.trim() === '',
                responsableEmpty: formData.responsable.trim() === '',
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
                        <div className='text-3xl text-green-600 text-center font-semibold font-sans'>Ingresar Objetivo PEI</div>
                        <div className="grid grid-cols-5 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center col-span-2 mt-">
                                <label htmlFor="tituloObjetivo" className="mr-2 text-green-500">Titulo Del Objetivo:</label>
                                <input
                                    type="text"
                                    id="tituloObjetivo"
                                    name="tituloObjetivo"
                                    value={formData.tituloObjetivo}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.tituloObjetivoEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="areaInvestigacion" className="mr-2 text-green-500">Área Investigación:</label>
                                <select
                                    id="areaInvestigacion"
                                    name="areaInvestigacion"
                                    value={formData.areaInvestigacion}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.areaInvestigacionEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
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
                                    className={`w-full p-2 ${formData.lineaInvestigacionEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
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
                                    className={`w-full p-2 ${formData.programaDepartamentoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
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
                                    className={`w-full p-2 ${formData.rubroEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
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
                                    className={`w-full p-2 ${formData.indicadorResultadoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
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
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.responsableEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
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