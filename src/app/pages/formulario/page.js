"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';

function Formulario() {
  const [formData, setFormData] = useState({
    nombres: '',
    formacionAcademica: '',
    grupoEtnico: '',
    apellidos: '',
    nacionalidad: '',
    sexo: '',
    grupoPrioritario: '',
    tipoCuartoNivel: '',
    fechaNacimiento: '',
    localidadAsosiada: '',
    localidadLaboral: '',
    provincia: '',
    canton: '',
    origenFondo: '',
    remuneracion: '',
    fondos: '',
    telefonoInsti: '',
    correoInsti: '',
    viaticoResidencia: '',
    extensionTelef: '',
    puesto: '',
    fechaIngreso: '',
    numeroImposiciones: '',
    partidaOcupada: '',
    numeroRegistro: '',
    actividad: '',
    proceso: '',
  });
  const initialState = {
    nombres: '',
    formacionAcademica: '',
    grupoEtnico: '',
    apellidos: '',
    nacionalidad: '',
    sexo: '',
    grupoPrioritario: '',
    tipoCuartoNivel: '',
    fechaNacimiento: '',
    localidadAsosiada: '',
    localidadLaboral: '',
    provincia: '',
    canton: '',
    origenFondo: '',
    remuneracion: '',
    fondos: '',
    telefonoInsti: '',
    correoInsti: '',
    viaticoResidencia: '',
    extensionTelef: '',
    puesto: '',
    fechaIngreso: '',
    numeroImposiciones: '',
    partidaOcupada: '',
    numeroRegistro: '',
    actividad: '',
    proceso: '',
    // Agrega más campos según sea necesario
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const camposRequeridos = [
      { campo: 'nombres', mensaje: 'Por favor, ingrese sus Nombres.' },
      { campo: 'formacionAcademica', mensaje: 'Por favor, seleccione su Formación Académica.' },
      { campo: 'grupoEtnico', mensaje: 'Por favor, seleccione el Grupo Étnico' },
      { campo: 'apellidos', mensaje: 'Por favor, ingrese sus Apellidos.' },
      { campo: 'nacionalidad', mensaje: 'Por favor, seleccione su Nacionalidad.' },
      { campo: 'sexo', mensaje: 'Por favor, seleccione su Sexo.' },
      { campo: 'grupoPrioritario', mensaje: 'Por favor, escriba su Grupo Prioritario.' },
      { campo: 'tipoCuartoNivel', mensaje: 'Por favor, seleccione Tipo de Cuarto Nivel.' },
      { campo: 'fechaNacimiento', mensaje: 'Por favor, seleccione su Fecha de Nacimiento.' },
      { campo: 'localidadAsosiada', mensaje: 'Por favor, seleccione su Localidad Asosiada.' },
      { campo: 'localidadLaboral', mensaje: 'Por favor, seleccione su Localidad Laboral.' },
      { campo: 'provincia', mensaje: 'Por favor, seleccione su Provincia.' },
      { campo: 'canton', mensaje: 'Por favor, seleccione su Cantón.' },
      { campo: 'origenFondo', mensaje: 'Por favor, seleccione su Origen Fondo.' },
      { campo: 'remuneracion', mensaje: 'Por favor, escriba su Remuneracion.' },
      { campo: 'fondos', mensaje: 'Por favor, seleccione sus Fondos.' },
      { campo: 'telefonoInsti', mensaje: 'Por favor, ingrese el Teléfono Institucional.' },
      { campo: 'correoInsti', mensaje: 'Por favor, ingrese el Correo Institucional' },
      { campo: 'viaticoResidencia', mensaje: 'Por favor, seleccione el Viatico.' },
      { campo: 'extensionTelef', mensaje: 'Por favor, ingrese la Extension telefónica.' },
      { campo: 'puesto', mensaje: 'Por favor, seleccione el Puesto.' },
      { campo: 'fechaIngreso', mensaje: 'Por favor, seleccione la Fecha de Ingreso.' },
      { campo: 'numeroImposiciones', mensaje: 'Por favor, seleccione el Número de Imposiciones.' },
      { campo: 'partidaOcupada', mensaje: 'Por favor, seleccione Partida Ocupada.' },
      { campo: 'numeroRegistro', mensaje: 'Por favor, ingrese el número de Registro Senescyt.' },
      { campo: 'actividad', mensaje: 'Por favor, ingrese la Actividad.' },
      { campo: 'proceso', mensaje: 'Por favor, seleccione el Proceso.' }
    ];

    // Validación de campos requeridos
    for (const campoInfo of camposRequeridos) {
      const valorCampo = formData[campoInfo.campo];

      // Verificar si el campo existe y es una cadena antes de llamar a trim()
      if (!valorCampo || (typeof valorCampo === 'string' && valorCampo.trim() === '')) {
        alert(campoInfo.mensaje);
        return;
      }
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

    <div className='bg-gray-200'>
      {/* El div de arriba, contiene el topbar */}
      <Topbar></Topbar>
      {/* Este div de abajo contiene todo el formulario Ingresar PEI */}
      <div className="mt-4">
        <p class="text-4xl text-green-500 text-center font-bold">
          REGISTRO DE USUARIO
        </p>
        <div className="">
          <form onSubmit={handleSubmit}>

            <div className="shadow-md p-4 border border-gray-300 mt-4 bg-white 500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                <div className="flex items-center">
                  <label htmlFor="nombres" className="mr-2 text-green-500">Nombres:</label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="formacionAcademica" className="mr-2 text-green-500">Formación Académica:</label>
                  <select
                    id="formacionAcademica"
                    name="formacionAcademica"
                    value={formData.formacionAcademica}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="formacionAcademicaUno" className="whitespace-nowrap">Ejemplo</option>
                    <option value="formacionAcademicaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="grupoEtnico" className="mr-2 text-green-500">Grupo Étnico:</label>
                  <select
                    id="grupoEtnico"
                    name="grupoEtnico"
                    value={formData.grupoEtnico}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="grupoEtnicoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="grupoEtnicoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="apellidos" className="mr-2 text-green-500">Apellidos:</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="nacionalidad" className="mr-2 text-green-500">Nacionalidad:</label>
                  <select
                    id="nacionalidad"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="nacionalidadUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="nacionalidadDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="sexo" className="mr-2 text-green-500">Sexo:</label>
                  <select
                    id="sexo"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="sexoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="sexoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="grupoPrioritario" className="mr-2 text-green-500">Grupo Prioritario:</label>
                  <input
                    type="text"
                    id="grupoPrioritario"
                    name="grupoPrioritario"
                    value={formData.grupoPrioritario}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="tipoCuartoNivel" className="mr-2 text-green-500">Tipo Cuarto Nivel:</label>
                  <select
                    id="tipoCuartoNivel"
                    name="tipoCuartoNivel"
                    value={formData.tipoCuartoNivel}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="tipoCuartoNivelUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="tipoCuartoNivelDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="fechaNacimiento" className="mr-2 text-green-500">Fecha Nacimiento:</label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>
              </div>
            </div>

            {/*Este div con class m4 hace un espacio entre los bordes hay como 5 iguales en el código*/}
            <div class="mt-4"></div>

            <div class="shadow-md p-4 border border-gray-300 bg-white 500">

              <div class="grid grid-cols-4 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="localidadAsosiada" className="mr-2 text-green-500">Localidad Asosiada:</label>
                  <select
                    id="localidadAsosiada"
                    name="localidadAsosiada"
                    value={formData.localidadAsosiada}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="localidadAsosiadaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="localidadAsosiadaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="localidadLaboral" className="mr-2 text-green-500">Localidad Laboral:</label>
                  <select
                    id="localidadLaboral"
                    name="localidadLaboral"
                    value={formData.localidadLaboral}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="localidadLaboralUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="localidadLaboralDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="provincia" className="mr-2 text-green-500">Provincia:</label>
                  <select
                    id="provincia"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="provinciaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="provinciaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="canton" className="mr-2 text-green-500">Canton:</label>
                  <select
                    id="canton"
                    name="canton"
                    value={formData.canton}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="cantonUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="cantonDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>
              </div>

            </div>


            <div class="mt-4"></div>
            {/*El Div de acá abajo tiene todo el 3er formulario*/}
            <div class="shadow-md p-4 border border-gray-300 bg-white 500">

              <div class="grid grid-cols-3 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="origenFondo" className="mr-2 text-green-500">Origen Fondo:</label>
                  <select
                    id="origenFondo"
                    name="origenFondo"
                    value={formData.origenFondo}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="origenFondoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="origenFondoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="remuneracion" className="mr-2 text-green-500">Remuneración:</label>
                  <input
                    type="text"
                    id="remuneracion"
                    name="remuneracion"
                    value={formData.remuneracion}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="fondos" className="mr-2 text-green-500">Fondos:</label>
                  <select
                    id="fondos"
                    name="fondos"
                    value={formData.fondos}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="fondosUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="fondosDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>
              </div>

            </div>
            {/*El Div de acá arriba cierra todo el 3er formulario*/}
            <div class="mt-4"></div>
            {/*El Div de acá abajo inicia todo el 4to formulario*/}
            <div class="shadow-md p-4 border border-gray-300 bg-white 500">

              <div class="grid grid-cols-3 grid-rows-2 gap-4">


                <div className="flex items-center">
                  <label htmlFor="telefonoInsti" className="mr-2 text-green-500">Télefono Institucional:</label>
                  <input
                    type="text"
                    id="telefonoInsti"
                    name="telefonoInsti"
                    value={formData.telefonoInsti}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="correoInsti" className="mr-2 text-green-500">Correo Institucional:</label>
                  <input
                    type="text"
                    id="correoInsti"
                    name="correoInsti"
                    value={formData.correoInsti}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="viaticoResidencia" className="mr-2 text-green-500">Viatico Residencia:</label>
                  <select
                    id="viaticoResidencia"
                    name="viaticoResidencia"
                    value={formData.viaticoResidencia}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="viaticoResidenciaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="viaticoResidenciaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="extensionTelef" className="mr-2 text-green-500">Extensión Telefónica:</label>
                  <input
                    type="text"
                    id="extensionTelef"
                    name="extensionTelef"
                    value={formData.extensionTelef}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

              </div>

            </div>
            {/*El Div de acá arriba cierra todo el 4to formulario*/}
            <div class="mt-4"></div>
            {/*El Div de acá abajo abre todo el 5to formulario*/}
            <div class="shadow-md p-4 border border-gray-300 bg-white 500">

              <div class="grid grid-cols-3 grid-rows-2 gap-4">

                <div className="flex items-center">
                  <label htmlFor="puesto" className="mr-2 text-green-500">Puesto:</label>
                  <select
                    id="puesto"
                    name="puesto"
                    value={formData.puesto}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="puestoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="puestoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="fechaIngreso" className="mr-2 text-green-500">Fecha de Ingreso:</label>
                  <input
                    type="date"
                    id="fechaIngreso"
                    name="fechaIngreso"
                    value={formData.fechaIngreso}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="numeroImposiciones" className="mr-2 text-green-500">Número Imposiciones:</label>
                  <input
                    type="text"
                    id="numeroImposiciones"
                    name="numeroImposiciones"
                    value={formData.numeroImposiciones}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="partidaOcupada" className="mr-2 text-green-500">Partida Ocupada:</label>
                  <select
                    id="partidaOcupada"
                    name="partidaOcupada"
                    value={formData.partidaOcupada}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="partidaOcupadaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="partidaOcupadaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>
              </div>

            </div>
            {/*El Div de acá arriba abre todo el 5to formulario*/}

            <div class="mt-4"></div>
            {/*El Div de acá abajo abre todo el 6to formulario*/}
            <div class="shadow-md p-4 border border-gray-300 bg-white 500">

              <div class="grid grid-cols-3 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="numeroRegistro" className="mr-2 text-green-500">Número de Registro Senescyt:</label>
                  <input
                    type="text"
                    id="numeroRegistro"
                    name="numeroRegistro"
                    value={formData.numeroRegistro}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="actividad" className="mr-2 text-green-500">Actividad:</label>
                  <input
                    type="text"
                    id="actividad"
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="proceso" className="mr-2 text-green-500">Proceso:</label>
                  <select
                    id="proceso"
                    name="proceso"
                    value={formData.proceso}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="procesoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="procesoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>
              </div>

            </div>
            {/*El Div de acá arriba cierra todo el 6to formulario*/}

            <div class="mt-4"></div>
            {/*El Div de acá abajo pertenece a los botones*/}

            <div class="shadow-md p-4 border border-gray-300 bg-white 500">
              <div class="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Aceptar
                </button>
                <button
                  type="button"
                  onClick={handlereject}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Rechazar
                </button>
              </div>
            </div>

          </form>
          {/*Fin */}
        </div>
      </div>
    </div>
  );
}

export default Formulario;