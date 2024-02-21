"use client"

import React, { useState, useEffect } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

function sistematizacionPei() {
    const initialState = {
        estacion: '',
        programaDep: '',
        rubro: '',
        liderNombre: '',
        area: '',
        linea: '',
        objetivo: '',
        indicadorResultado: '',
        actividad: '',
        resultadoEsp: '',
        unidad: '',
        meta: '',
        anio: '',
        control: '',
        fondos: '',
        presupuesto: '',
        provincia: '',
        // Agrega más campos según sea necesario
    };

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };



    const validarCampos = () => {
        const camposVacios = {
            estacionEmpty: formData.estacion.trim() === '',
            programaDepEmpty: formData.programaDep.trim() === '',
            rubroEmpty: formData.rubro.trim() === '',
            liderNombreEmpty: formData.liderNombre.trim() === '',
            areaEmpty: formData.area.trim() === '',
            lineaEmpty: formData.linea.trim() === '',
            objetivoEmpty: formData.objetivo.trim() === '',
            indicadorResultadoEmpty: formData.indicadorResultado.trim() === '',
            actividadEmpty: formData.actividad.trim() === '',
            resultadoEspEmpty: formData.resultadoEsp.trim() === '',
            unidadEmpty: formData.unidad.trim() === '',
            metaEmpty: formData.meta.trim() === '',
            anioEmpty: formData.anio.trim() === '',
            controlEmpty: formData.control.trim() === '',
            fondosEmpty: formData.fondos.trim() === '',
            presupuestoEmpty: formData.presupuesto.trim() === '',
            provinciaEmpty: formData.provincia.trim() === '',
        };

        setFormData({
            ...formData,
            ...camposVacios,
        });

        return Object.values(camposVacios).some((campoVacio) => campoVacio);
    };

    ///Cargar Datos
    const [provincia, setProvincia] = useState([]);

    useEffect(() => {
        // 1er solicitud Axios
        axios.get('http://127.0.0.1:8000/api/provinces')
            .then(response => {
                const provincias = response.data;
                setProvincia(provincias);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
    }, []);

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

        //Confirmación antes de enviar
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
                //Evento POST
                axios.post('http://127.0.0.1:8000/api/users', formData)
                    .then(response => {
                        console.log('Respuesta del servidor:', response.data);
                        // Mostrar mensaje de éxito con SweetAlert2
                        Swal.fire({
                            title: '¡Enviado!',
                            text: 'Tu archivo se ha enviado.',
                            icon: 'success',
                        });
                        // Reiniciar el estado del formulario después de enviar
                        setFormData(initialState);
                    })
                    .catch(error => {
                        console.error('Error al enviar el formulario:', error);
                        // Mostrar mensaje de error con SweetAlert2
                        Swal.fire({
                            title: 'Error',
                            text: 'Ocurrió un error al enviar el formulario.',
                            icon: 'error',
                        });
                    });
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

                            <div className="flex items-center">
                                <label htmlFor="estacion" className="mr-2 text-green-500">Estación:</label>
                                <select
                                    id="estacion"
                                    name="estacion"
                                    value={formData.estacion}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.estacionEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="estacionUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="estacionDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="programaDep" className="mr-2 text-green-500">Programa o Departamento:</label>
                                <select
                                    id="programaDep"
                                    name="programaDep"
                                    value={formData.programaDep}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.programaDepEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="programaDepUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="programaDepDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="rubro" className="mr-2 text-green-500">Rubro</label>
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

                            <div className="flex items-center">
                                <label htmlFor="area" className="mr-2 text-green-500">Área</label>
                                <select
                                    id="area"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.areaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="areaUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="areaDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>


                            <div className="flex items-center col-span-2">
                                <label htmlFor="liderNombre" className="mr-2 text-green-500">Líder</label>
                                <select
                                    id="liderNombre"
                                    name="liderNombre"
                                    value={formData.liderNombre}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.liderNombreEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="areaUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="areaDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>


                            <div className="flex items-center col-span-2">
                                <label htmlFor="linea" className="mr-2 text-green-500">Línea</label>
                                <select
                                    id="linea"
                                    name="linea"
                                    value={formData.linea}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.lineaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="areaUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="areaDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>



                            <div className="flex items-center col-span-2">
                                <label htmlFor="objetivo" className="mr-2 text-green-500">Objetivo:</label>
                                <input
                                    type="text"
                                    id="objetivo"
                                    name="objetivo"
                                    value={formData.objetivo}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.objetivoEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>

                            <div className="flex items-center col-span-2">
                                <label htmlFor="indicadorResultado" className="mr-2 text-green-500">Indicador de Resultado:</label>
                                <select
                                    id="indicadorResultado"
                                    name="indicadorResultado"
                                    value={formData.indicadorResultado}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.indicadorResultadoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="unidadUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="unidadDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center col-span-2">
                                <label htmlFor="actividad" className="mr-2 text-green-500">Actividad:</label>
                                <input
                                    type="text"
                                    id="actividad"
                                    name="actividad"
                                    value={formData.actividad}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.actividadEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>



                            <div className="flex items-center col-span-2 mt-">
                                <label htmlFor="resultadoEsp" className="mr-2 text-green-500">Resultado Esperado:</label>
                                <input
                                    type="text"
                                    id="resultadoEsp"
                                    name="resultadoEsp"
                                    value={formData.resultadoEsp}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.resultadoEspEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="unidad" className="mr-2 text-green-500">Unidad:</label>
                                <select
                                    id="unidad"
                                    name="unidad"
                                    value={formData.unidad}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.unidadEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="unidadUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="unidadDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="meta" className="mr-2 text-green-500">Meta:</label>
                                <select
                                    id="meta"
                                    name="meta"
                                    value={formData.meta}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.metaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="metaUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="metaDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="control" className="mr-2 text-green-500">Control:</label>
                                <select
                                    id="control"
                                    name="control"
                                    value={formData.control}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.controlEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="controlUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="controlDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>


                            <div className="flex items-center">
                                <label htmlFor="fondos" className="mr-2 text-green-500">Fondos:</label>
                                <select
                                    id="fondos"
                                    name="fondos"
                                    value={formData.fondos}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.fondosEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="fondosUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="fondosDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>


                            <div className="flex items-center">
                                <label htmlFor="presupuesto" className="mr-2 text-green-500">Presupuesto:</label>
                                <input
                                    type="text"
                                    id="presupuesto"
                                    name="presupuesto"
                                    value={formData.presupuesto}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                            handleInputChange(event);
                                        }
                                    }}
                                    className={`w-full border ${formData.presupuestoEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                />
                            </div>


                            <div className="flex items-center">
                                <label htmlFor="anio" className="mr-2 text-green-500">Año:</label>
                                <select
                                    id="anio"
                                    name="anio"
                                    value={formData.anio}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.anioEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    <option value="anioUno" className="whitespace-nowrap">Ejemplo 1</option>
                                    <option value="anioDos" className="whitespace-nowrap">Ejemplo 2</option>
                                    {/* Opciones del select */}
                                </select>
                            </div>


                            <div className="col-span-2 flex items-center mx-auto">
                                <label htmlFor="provincia" className="mr-2 text-green-500">Provincia:</label>
                                <select
                                    id="provincia"
                                    name="provincia"
                                    value={formData.provincia}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 ${formData.provinciaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                >
                                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                                    {provincia.map((provincia) => (
                                        <option key={provincia.id} value={provincia.id} className="whitespace-nowrap">{provincia.name}</option>
                                    ))}
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

export default sistematizacionPei;