"use client"

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function Planificador() {

    const initialState = {
        seleccionTipoActividad: '',
        seleccionProyecto: '',
        seleccionComponente: '',
        responsableActividad: '',
        nombreActividad: '',
    };

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    // Para ocultar los checkboxes
    const toggleCheckboxesVisibility = (selectedOption) => {
        const contenedorCheckboxes = document.getElementById('contenedorCheckboxes');

        if (selectedOption === 'seleccionTipoActividadDos') {
            // Ocultar el contenedor de checkboxes si la opción es "Extra-Poa"
            contenedorCheckboxes.style.display = 'none';
        } else {
            // Mostrar el contenedor de checkboxes para otras opciones
            contenedorCheckboxes.style.display = 'flex';
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.seleccionTipoActividad.trim() === '' || formData.seleccionProyecto.trim() === ''
            || formData.seleccionComponente.trim() === ''
            || formData.responsableActividad.trim() === ''
            || formData.nombreActividad.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                seleccionTipoActividadEmpty: formData.seleccionTipoActividad.trim() === '',
                seleccionProyectoEmpty: formData.seleccionProyecto.trim() === '',
                seleccionComponenteEmpty: formData.seleccionComponente.trim() === '',
                responsableActividadEmpty: formData.responsableActividad.trim() === '',
                nombreActividadEmpty: formData.nombreActividad.trim() === '',
            });

            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
            });
            return;
        }
        
        //Checkbox
        if (formData.seleccionTipoActividad === 'seleccionTipoActividadUno') {
            const checkbox1 = document.getElementById('checkbox1');
            const checkbox2 = document.getElementById('checkbox2');
            const checkbox3 = document.getElementById('checkbox3');

            if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
                // Mostrar mensaje de error con SweetAlert2 si ningún checkbox está seleccionado
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, selecciona al menos un checkbox.',
                    icon: 'error',
                });
                return;
            }
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
                if (formData.seleccionTipoActividad === 'seleccionTipoActividadUno') {
                    checkbox1.checked = false;
                    checkbox2.checked = false;
                    checkbox3.checked = false;
                }
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
        if (formData.seleccionTipoActividad === 'seleccionTipoActividadUno') {
            checkbox1.checked = false;
            checkbox2.checked = false;
            checkbox3.checked = false;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 px-20">
            <form onSubmit={handleSubmit}>
                <div className="w-full shadow-md p-4 border-4 border-green-800 mt-4 bg-gray-100 border md:shadow-1xl md:shadow-stone-700 rounded-lg">
                    <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>Selección de Proyecto</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        <div className={`flex items-center col-span-2 justify-center mt-2`}>
                            <label htmlFor="seleccionTipoActividad" className="mr-2 text-green-500">Seleccione el Tipo de Actividad:</label>
                            <select
                                id="seleccionTipoActividad"
                                name="seleccionTipoActividad"
                                value={formData.seleccionTipoActividad}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    toggleCheckboxesVisibility(e.target.value);
                                }}
                                className={`w-full p-1 ${formData.seleccionTipoActividadEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 appearance-none`}
                            >
                                <option value="" className="whitespace-nowrap">Seleccione...</option>
                                <option value="seleccionTipoActividadUno" className="whitespace-nowrap">POA</option>
                                <option value="seleccionTipoActividadDos" className="whitespace-nowrap">Extra-Poa</option>
                                {/* Opciones del select */}
                            </select>
                        </div>

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
                                <option value="seleccionProyectoUno" className="whitespace-nowrap">Opción 1</option>
                                <option value="seleccionProyectoDos" className="whitespace-nowrap">Opción 2</option>
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
                                <option value="seleccionComponenteUno" className="whitespace-nowrap">Opción 1</option>
                                <option value="seleccionComponenteDos" className="whitespace-nowrap">Opción 2</option>
                                {/* Opciones del select */}
                            </select>
                        </div>
                    </div>

                </div>

                <div class="mt-1"></div>

                {/* Este div inicia el Segundo cuadro */}
                <div className="w-full shadow-md p-4 border-4 border-green-800 mt-4 bg-gray-100 border md:shadow-1xl md:shadow-stone-700 rounded-lg">

                    <div className='mt-4 text-2xl text-green-600 text-center font-semibold font-sans'>Ingreso de Actividades</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

                        {/* Actividad 1 */}
                        <div className={`flex items-center col-span-2`}>
                            <label htmlFor="responsableActividad" className="mr-2 text-green-500">Responsable de Actividad:</label>
                            <input
                                type="text"
                                id="responsableActividad"
                                name="responsableActividad"
                                value={formData.responsableActividad}
                                onChange={(event) => {
                                    const inputValue = event.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                        handleInputChange(event);
                                    }
                                }}
                                className={`w-full border ${formData.responsableActividadEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                            />
                        </div>

                        {/* Actividad 2 */}
                        <div className={`flex items-center col-span-2`}>
                            <label htmlFor="nombreActividad" className="mr-2 text-green-500">Nombre Actividad:</label>
                            <input
                                type="text"
                                id="nombreActividad"
                                name="nombreActividad"
                                value={formData.nombreActividad}
                                onChange={(event) => {
                                    const inputValue = event.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                        handleInputChange(event);
                                    }
                                }}
                                className={`w-full border ${formData.nombreActividadEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                            />
                        </div>

                        {/* Actividad 3 */}
                        <div id="contenedorCheckboxes" className="" >
                            <label className="mr-2 text-green-500">Implementos:</label>

                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" id="checkbox1" />
                            <label htmlFor="checkbox1" className="ml-2">Coches</label>

                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 ml-4" id="checkbox2" />
                            <label htmlFor="checkbox2" className="ml-2">Personal</label>

                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 ml-4" id="checkbox3" />
                            <label htmlFor="checkbox3" className="ml-2">Otros</label>
                        </div>


                        <div className="mt-4 flex justify-center col-span-2 mt-3">
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


                    </div>
                    {/* Este div cierra el segundo cuadro  */}
                </div>
            </form>
        </div>

    );
}

export default Planificador;