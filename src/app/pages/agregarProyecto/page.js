"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function agregarProyecto() {

    const initialState = {
        tituloProyecto: '',
        tipoProyecto: '',
        rubro: '',
        institucionEjec: '',
        institucionCoEjec: '',
        responsableProyecto: '',
        areaInvestigacion: '',
        lineaInvestigacion: '',
        fechaInicio: '',
        fechaFin: '',
        estacionExpe: '',
        financiamiento: '',
        entidadFinanciera: '',
    };
    //Aqui se asignan las validaciones, para que vayan por separado, o si no uno valida a todos los campos
    const [formData, setFormData] = useState(initialState);

    //Aqui se asigna para guardar campos
    const [datosGuardados, setDatosGuardados] = useState({
        codigoComponente: '',
        nombreComponente: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validarCampos = () => {
        const camposVacios = {
            tituloProyectoEmpty: formData.tituloProyecto.trim() === '',
            tipoProyectoEmpty: formData.tipoProyecto.trim() === '',
            rubroEmpty: formData.rubro.trim() === '',
            institucionEjecEmpty: formData.institucionEjec.trim() === '',
            institucionCoEjecEmpty: formData.institucionCoEjec.trim() === '',
            responsableProyectoEmpty: formData.responsableProyecto.trim() === '',
            areaInvestigacionEmpty: formData.areaInvestigacion.trim() === '',
            lineaInvestigacionEmpty: formData.lineaInvestigacion.trim() === '',
            fechaInicioEmpty: formData.fechaInicio.trim() === '',
            fechaFinEmpty: formData.fechaFin.trim() === '',
            estacionExpeEmpty: formData.estacionExpe.trim() === '',
            financiamientoEmpty: formData.financiamiento.trim() === '',
            entidadFinancieraEmpty: formData.entidadFinanciera.trim() === '',
        };

        setFormData({
            ...formData,
            ...camposVacios,
        });

        return Object.values(camposVacios).some((campoVacio) => campoVacio);
    };
    ///Funcion de Mostrar ventana y ocultarla
    const [mostrarVentana, setMostrarVentana] = useState(false);

    const mostrarVentanaEmergente = () => {
        setMostrarVentana(true);
    };

    const cerrarVentanaEmergente = () => {
        setMostrarVentana(false);
    };

    const guardarVentanaEmergente = () => {
        // Lógica para guardar la información
        setDatosGuardados({
            codigoComponente: formData.codigoComponente,
            nombreComponente: formData.nombreComponente,
        });

        cerrarVentanaEmergente();
    };

    ///Para el botón de Enviar
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validación de campos
        if (validarCampos()) {
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
                setFormData(initialState)
            // Resetear los datos guardados
            setDatosGuardados({
                codigoComponente: '',
                nombreComponente: '',
            });;
            }
        });
    };
    
    // Rechazar el formulario y reiniciar el estado
    const handlereject = () => {
        Swal.fire({
            title: 'Formulario eliminado',
            icon: 'info',
        });
     
        // Resetear los datos guardados
        setFormData(initialState);
            setDatosGuardados({
                codigoComponente: '',
                nombreComponente: '',
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 px-8" >
            <div className="px-20">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg mt-4 bg-gray-100">
                            <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>Información del Proyecto</div>
                            <div className="text-black font-semibold font-sans grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                                <div className="flex items-center col-span-2">
                                    <label htmlFor="tituloProyecto" className="mr-2">Titulo del Proyecto:</label>
                                    <input
                                        type="text"
                                        id="tituloProyecto"
                                        name="tituloProyecto"
                                        value={formData.tituloProyecto}
                                        onChange={(event) => {
                                            const inputValue = event.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                handleInputChange(event);
                                            }
                                        }}
                                        className={`w-full border ${formData.tituloProyectoEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="tipoProyecto" className="mr-2">Tipo de Proyecto:</label>
                                    <select
                                        id="tipoProyecto"
                                        name="tipoProyecto"
                                        value={formData.tipoProyecto}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.tipoProyectoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                    >
                                        <option value="" className="whitespace-nowrap">Seleccione...</option>
                                        <option value="tipoProyectoUno" className="whitespace-nowrap">Ejemplo</option>
                                        <option value="tipoProyectoDos" className="whitespace-nowrap">Ejemplo 2</option>
                                        {/* Opciones del select */}
                                    </select>
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="rubro" className="mr-2">Rubro:</label>
                                    <select
                                        id="rubro"
                                        name="rubro"
                                        value={formData.rubro}
                                        onChange={(event) => {
                                            const inputValue = event.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                handleInputChange(event);
                                            }
                                        }}
                                        className={`w-full p-2 ${formData.rubroEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 `}
                                    >
                                        <option value="" className="whitespace-nowrap">Seleccione...</option>
                                        <option value="rubroUno" className="whitespace-nowrap">Ejemplo 1</option>
                                        <option value="rubroDos" className="whitespace-nowrap">Ejemplo 2</option>
                                        {/* Opciones del select */}
                                    </select>
                                </div>

                                <div className="flex items-center col-span-2">
                                    <label htmlFor="institucionEjec" className="mr-2">Institución Ejecutora:</label>
                                    <input
                                        type="text"
                                        id="institucionEjec"
                                        name="institucionEjec"
                                        value={formData.institucionEjec}
                                        onChange={(event) => {
                                            const inputValue = event.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                handleInputChange(event);
                                            }
                                        }}
                                        className={`w-full p-2 ${formData.institucionEjecEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                    />
                                </div>

                                <div className="flex items-center col-span-2">
                                    <label htmlFor="institucionCoEjec" className="mr-2">Institución Co-Ejecutora:</label>
                                    <input
                                        type="text"
                                        id="institucionCoEjec"
                                        name="institucionCoEjec"
                                        value={formData.institucionCoEjec}
                                        onChange={(event) => {
                                            const inputValue = event.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                handleInputChange(event);
                                            }
                                        }}
                                        className={`w-full p-2 ${formData.institucionCoEjecEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                    />
                                </div>

                                <div className="flex items-center col-span-2">
                                    <label htmlFor="responsableProyecto" className="mr-2">Responsable del Proyecto:</label>
                                    <input
                                        type="text"
                                        id="responsableProyecto"
                                        name="responsableProyecto"
                                        value={formData.responsableProyecto}
                                        onChange={(event) => {
                                            const inputValue = event.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                handleInputChange(event);
                                            }
                                        }}
                                        className={`w-full p-2 ${formData.responsableProyectoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="areaInvestigacion" className="mr-2">Área de Investigación:</label>
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
                                    <label htmlFor="lineaInvestigacion" className="mr-2">Linea de Investigación:</label>
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
                                    <label htmlFor="fechaInicio" className="mr-2">Fecha de Inicio:</label>
                                    <input
                                        type="date"
                                        id="fechaInicio"
                                        name="fechaInicio"
                                        value={formData.fechaInicio}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.fechaInicioEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="fechaFin" className="mr-2"> Fecha de Fin:</label>
                                    <input
                                        type="date"
                                        id="fechaFin"
                                        name="fechaFin"
                                        value={formData.fechaFin}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.fechaFinEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                    />
                                </div>

                                <div className="flex items-center col-span-2">
                                    <label htmlFor="estacionExpe" className="mr-2">Estación Experimental:</label>
                                    <select
                                        id="estacionExpe"
                                        name="estacionExpe"
                                        value={formData.estacionExpe}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.estacionExpeEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                    >
                                        <option value="" className="whitespace-nowrap">Seleccione...</option>
                                        <option value="estacionExpeUno" className="whitespace-nowrap">Ejemplo 1</option>
                                        <option value="estacionExpeDos" className="whitespace-nowrap">Ejemplo 2</option>
                                        {/* Opciones del select */}
                                    </select>
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="financiamiento" className="mr-2">Financiamiento:</label>
                                    <select
                                        id="financiamiento"
                                        name="financiamiento"
                                        value={formData.financiamiento}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.financiamientoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                    >
                                        <option value="" className="whitespace-nowrap">Seleccione...</option>
                                        <option value="financiamientoUno" className="whitespace-nowrap">Ejemplo 1</option>
                                        <option value="financiamientoDos" className="whitespace-nowrap">Ejemplo 2</option>
                                        {/* Opciones del select */}
                                    </select>
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="entidadFinanciera" className="mr-2">Entidad Financiera:</label>
                                    <select
                                        id="entidadFinanciera"
                                        name="entidadFinanciera"
                                        value={formData.entidadFinanciera}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 ${formData.entidadFinancieraEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                    >
                                        <option value="" className="whitespace-nowrap">Seleccione...</option>
                                        <option value="entidadFinancieraUno" className="whitespace-nowrap">Ejemplo 1</option>
                                        <option value="entidadFinancieraDos" className="whitespace-nowrap">Ejemplo 2</option>
                                        {/* Opciones del select */}
                                    </select>
                                </div>
                                {/* Un div con un Botón largo */}

                                <div class="flex items-center col-span-2 text-center">Componentes</div>
                                <button
                                    type="button"
                                    onClick={mostrarVentanaEmergente}
                                    className="w-full md:w-auto bg-blue-900 hover:bg-green-900 text-white font-bold py-2 px-4 rounded md:mr-4 text-center col-span-2"
                                >
                                    Agregar Componente
                                </button>
                                 {datosGuardados.codigoComponente && datosGuardados.nombreComponente && (
                                    <div className="mt-4 text-green-600 font-semibold font-sans">
                                        Datos Guardados:
                                        <div>Código Componente: {datosGuardados.codigoComponente}</div>
                                        <div>Nombre del Componente: {datosGuardados.nombreComponente}</div>
                                    </div>
                                )}

                                <div className="flex justify-center col-span-2">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                                    >
                                        Enviar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handlereject}
                                        className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Rechazar
                                    </button>

                                </div>

                                {mostrarVentana && (
                                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                                        <div className="bg-white p-4 rounded-md shadow-md">
                                            <div className="mb-4">
                                                <label htmlFor="codigoComponente" className="mr-2">
                                                    Código Componente:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="codigoComponente"
                                                    name="codigoComponente"
                                                    value={formData.codigoComponente}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-300 rounded-md py-1 px-3"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="nombreComponente" className="mr-2">
                                                    Nombre del Componente:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nombreComponente"
                                                    name="nombreComponente"
                                                    value={formData.nombreComponente}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-300 rounded-md py-1 px-3"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={guardarVentanaEmergente}
                                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                )}
                               
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default agregarProyecto;

