"use client"

import React, { useState } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Button from "@mui/material/Button";


function Formulario() {

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
  };
  //Aqui se asignan las validaciones, para que vayan por separado, o si no uno valida a todos los campos
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarCampos = () => {
    const camposVacios = {
      nombresEmpty: formData.nombres.trim() === '',
      formacionAcademicaEmpty: formData.formacionAcademica.trim() === '',
      grupoEtnicoEmpty: formData.grupoEtnico.trim() === '',
      apellidosEmpty: formData.apellidos.trim() === '',
      nacionalidadEmpty: formData.nacionalidad.trim() === '',
      sexoEmpty: formData.sexo.trim() === '',
      grupoPrioritarioEmpty: formData.grupoPrioritario.trim() === '',
      tipoCuartoNivelEmpty: formData.tipoCuartoNivel.trim() === '',
      fechaNacimientoEmpty: formData.fechaNacimiento.trim() === '',
      localidadAsosiadaEmpty: formData.localidadAsosiada.trim() === '',
      localidadLaboralEmpty: formData.localidadLaboral.trim() === '',
      provinciaEmpty: formData.provincia.trim() === '',
      cantonEmpty: formData.canton.trim() === '',
      origenFondoEmpty: formData.origenFondo.trim() === '',
      remuneracionEmpty: formData.remuneracion.trim() === '',
      fondosEmpty: formData.fondos.trim() === '',
      telefonoInstiEmpty: formData.telefonoInsti.trim() === '',
      correoInstiEmpty: formData.correoInsti.trim() === '',
      viaticoResidenciaEmpty: formData.viaticoResidencia.trim() === '',
      extensionTelefEmpty: formData.extensionTelef.trim() === '',
      puestoEmpty: formData.puesto.trim() === '',
      fechaIngresoEmpty: formData.fechaIngreso.trim() === '',
      numeroImposicionesEmpty: formData.numeroImposiciones.trim() === '',
      partidaOcupadaEmpty: formData.partidaOcupada.trim() === '',
      numeroRegistroEmpty: formData.numeroRegistro.trim() === '',
      actividadEmpty: formData.actividad.trim() === '',
      procesoEmpty: formData.proceso.trim() === '',
    };

    setFormData({
      ...formData,
      ...camposVacios,
    });

    return Object.values(camposVacios).some((campoVacio) => campoVacio);
  };

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

    <div className='bg-gradient-to-r from-slate-900 via-green-900 to-slate-900'>

      {/* El div de arriba, contiene el topbar */}
      <Topbar></Topbar>

      {/* Este div de abajo contiene todo el formulario Ingresar PEI */}
        
      <div className="px-20 ">
        <p class="p-4 text-4xl text-white text-center font-semibold font-sans">
          REGISTRO DE USUARIO
        </p>
        <div className='py-2'>
        <img  className=" float-left px-1  " style={{ width: '45px', height: '33px'}} src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12818535/image/2347bfda38b1ace37cd7cc4777aa454a" alt=""/>
        <Button className=' bg-green-800 p-1 text-gray-100 w-24 min-w-full md:min-w-0' variant="contained" href='/pages/exel' disableElevation size="lg">
         ARCHIVOS </Button>
         </div>

        <div className="">
          <form onSubmit={handleSubmit}>

            <div className="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg mt-4 bg-gray-100">
              <div className="text-black font-semibold font-sans grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                <div className="flex items-center">
                  <label htmlFor="nombres" className="mr-2">Nombres:</label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full border ${formData.nombresEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="formacionAcademica" className="mr-2">Formación Académica:</label>
                  <select
                    id="formacionAcademica"
                    name="formacionAcademica"
                    value={formData.formacionAcademica}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.formacionAcademicaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="formacionAcademicaUno" className="whitespace-nowrap">Ejemplo</option>
                    <option value="formacionAcademicaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="grupoEtnico" className="mr-2">Grupo Étnico:</label>
                  <select
                    id="grupoEtnico"
                    name="grupoEtnico"
                    value={formData.grupoEtnico}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.grupoEtnicoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 `}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="grupoEtnicoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="grupoEtnicoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="apellidos" className="mr-2">Apellidos:</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.apellidosEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="nacionalidad" className="mr-2">Nacionalidad:</label>
                  <select
                    id="nacionalidad"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.nacionalidadEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="nacionalidadUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="nacionalidadDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="sexo" className="mr-2">Sexo:</label>
                  <select
                    id="sexo"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.sexoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}

                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="sexoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="sexoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="grupoPrioritario" className="mr-2">Grupo Prioritario:</label>
                  <input
                    type="text"
                    id="grupoPrioritario"
                    name="grupoPrioritario"
                    value={formData.grupoPrioritario}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.grupoPrioritarioEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="tipoCuartoNivel" className="mr-2">Tipo Cuarto Nivel:</label>
                  <select
                    id="tipoCuartoNivel"
                    name="tipoCuartoNivel"
                    value={formData.tipoCuartoNivel}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.tipoCuartoNivelEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="tipoCuartoNivelUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="tipoCuartoNivelDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="fechaNacimiento" className="mr-2">Fecha Nacimiento:</label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.fechaNacimientoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>
              </div>
            </div>

            {/*Este div con class m4 hace un espacio entre los bordes hay como 5 iguales en el código*/}
            <div class="mt-4"></div>

            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

              <div class="text-black font-semibold font-sans grid grid-cols-4 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="localidadAsosiada" className="mr-2">Localidad Asosiada:</label>
                  <select
                    id="localidadAsosiada"
                    name="localidadAsosiada"
                    value={formData.localidadAsosiada}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.localidadAsosiadaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="localidadAsosiadaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="localidadAsosiadaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="localidadLaboral" className="mr-2">Localidad Laboral:</label>
                  <select
                    id="localidadLaboral"
                    name="localidadLaboral"
                    value={formData.localidadLaboral}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.localidadLaboralEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="localidadLaboralUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="localidadLaboralDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="provincia" className="mr-2">Provincia:</label>
                  <select
                    id="provincia"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.provinciaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="provinciaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="provinciaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="canton" className="mr-2">Canton:</label>
                  <select
                    id="canton"
                    name="canton"
                    value={formData.canton}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.cantonEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}

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
            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

              <div class="text-black font-semibold font-sans grid grid-cols-3 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="origenFondo" className="mr-2">Origen Fondo:</label>
                  <select
                    id="origenFondo"
                    name="origenFondo"
                    value={formData.origenFondo}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.origenFondoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="origenFondoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="origenFondoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="remuneracion" className="mr-2">Remuneración:</label>
                  <input
                    type="text"
                    id="remuneracion"
                    name="remuneracion"
                    value={formData.remuneracion}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.remuneracionEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="fondos" className="mr-2">Fondos:</label>
                  <select
                    id="fondos"
                    name="fondos"
                    value={formData.fondos}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.fondosEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
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
            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

              <div class="text-black font-semibold font-sans grid grid-cols-3 grid-rows-2 gap-4">


                <div className="flex items-center">
                  <label htmlFor="telefonoInsti" className="mr-2">Télefono Institucional:</label>
                  <input
                    type="text"
                    id="telefonoInsti"
                    name="telefonoInsti"
                    value={formData.telefonoInsti}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.telefonoInstiEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="correoInsti" className="mr-2">Correo Institucional:</label>
                  <input
                    type="text"
                    id="correoInsti"
                    name="correoInsti"
                    value={formData.correoInsti}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.correoInstiEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="viaticoResidencia" className="mr-2">Viatico Residencia:</label>
                  <select
                    id="viaticoResidencia"
                    name="viaticoResidencia"
                    value={formData.viaticoResidencia}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.viaticoResidenciaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="viaticoResidenciaUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="viaticoResidenciaDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="extensionTelef" className="mr-2">Extensión Telefónica:</label>
                  <input
                    type="text"
                    id="extensionTelef"
                    name="extensionTelef"
                    value={formData.extensionTelef}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.extensionTelefEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

              </div>

            </div>
            {/*El Div de acá arriba cierra todo el 4to formulario*/}
            <div class="mt-4"></div>
            {/*El Div de acá abajo abre todo el 5to formulario*/}
            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

              <div class="text-black font-semibold font-sans grid grid-cols-3 grid-rows-2 gap-4">

                <div className="flex items-center">
                  <label htmlFor="puesto" className="mr-2">Puesto:</label>
                  <select
                    id="puesto"
                    name="puesto"
                    value={formData.puesto}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.puestoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  >
                    <option value="" className="whitespace-nowrap">Seleccione...</option>
                    <option value="puestoUno" className="whitespace-nowrap">Ejemplo 1</option>
                    <option value="puestoDos" className="whitespace-nowrap">Ejemplo 2</option>
                    {/* Opciones del select */}
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="fechaIngreso" className="mr-2">Fecha de Ingreso:</label>
                  <input
                    type="date"
                    id="fechaIngreso"
                    name="fechaIngreso"
                    value={formData.fechaIngreso}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.viaticoResidenciaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="numeroImposiciones" className="mr-2">Número Imposiciones:</label>
                  <input
                    type="text"
                    id="numeroImposiciones"
                    name="numeroImposiciones"
                    value={formData.numeroImposiciones}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.numeroImposicionesEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="partidaOcupada" className="mr-2">Partida Ocupada:</label>
                  <select
                    id="partidaOcupada"
                    name="partidaOcupada"
                    value={formData.partidaOcupada}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.partidaOcupadaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
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
            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

              <div class="text-black font-semibold font-sans grid grid-cols-3 grid-rows-1 gap-4">

                <div className="flex items-center">
                  <label htmlFor="numeroRegistro" className="mr-2">Número de Registro Senescyt:</label>
                  <input
                    type="text"
                    id="numeroRegistro"
                    name="numeroRegistro"
                    value={formData.numeroRegistro}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                        handleInputChange(event);
                      }
                    }}
                    className={`w-full p-2 ${formData.numeroRegistroEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="actividad" className="mr-2">Actividad:</label>
                  <input
                    type="text"
                    id="actividad"
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.actividadEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="proceso" className="mr-2">Proceso:</label>
                  <select
                    id="proceso"
                    name="proceso"
                    value={formData.proceso}
                    onChange={handleInputChange}
                    className={`w-full p-2 ${formData.procesoEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
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

            <div class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">
              <div class="flex justify-center">
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
            <div className='mt-4'><p>xd</p></div>
          </form>
          {/*Fin */}

        </div>
      </div>
    </div>
  );
}

export default Formulario;