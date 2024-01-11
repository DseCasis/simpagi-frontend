"use client"

import LowerBar from "@/app/components/LowerBar";
import Topbar from "@/app/components/Topbar";
import React from "react";

export default function Formulario() {
  return (

    <div class="bg-gray-100">
      {/*El Div de acá arriba contiene todo el formulario*/}
      <Topbar></Topbar>
      <div class="mt-4 ">
        <p class="text-4xl text-green-500 text-center font-bold">
          REGISTRO DE USUARIO
        </p>
      </div>
      {/*El Div de acá abajo contiene todo el 1er formulario*/}
      <div className="shadow-md p-4 border border-gray-300 mt-4 bg-white 500">
        <div class="grid grid-cols-3 grid-rows-4 gap-4">

          <div class="flex items-center">
            <label for="nombre" class="mr-2 text-green-500">Nombres:</label>
            <input type="text" id="nombre" maxLength={25} class="w-full border border-gray-300 rounded-md py-1 px-3 text-green-700" />
          </div>

          <div class="flex items-center">
            <label for="formacionAcademica" class="mr-2 text-green-500">Formacion Académica</label>
            <select id="formacionAcademica" name="formacionAcademica" class="w-full p-2 border rounded">
              <option value="formacionAcademicaUno">Colegio</option>
              <option value="formacionAcademicaDos">Bachillerato</option>
              <option value="formacionAcademicaTres">Universitario</option>
            </select>
          </div>

          <div class="flex items-center">
            <label for="grupoEtnico" class="mr-2 text-green-500">Grupo Étnico:</label>
            <select id="grupoEtnico" name="grupoEtnico" class="w-full p-2 border rounded">
              <option value="provinciaUno">Mestiza</option>
              <option value="provinciaDos">Afroecuatoriana</option>
              <option value="provinciaTres">Indígena</option>
            </select>
          </div>

          <div class="flex items-center">
            <label for="apellido" class="mr-2 text-green-500">Apellidos:</label>
            <input type="text" id="apellido" name="apellido" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
          </div>

          <div class="flex items-center">
            <label for="nacionalidad" class="mr-2 text-green-500">Nacionalidad:</label>
            <select id="nacionalidad" name="nacionalidad" class="w-full p-2 border rounded">
              <option value="nacionalidadUno">Ecuatoriano</option>
              <option value="nacionalidadDos">Colombiano</option>
              <option value="nacionalidadTres">Peruano</option>
            </select>
          </div>

          <div class="flex items-center">
            <label for="sexo" class="mr-2 text-green-500">Sexo:</label>
            <select id="sexo" name="sexo" class="w-full p-2 border rounded">
              <option value="sexoUno">Masculino</option>
              <option value="sexoDos">Femenino</option>
              <option value="sexoTres">Otros</option>
            </select>
          </div>

          <div class="flex items-center">
            <label for="grupoPrioritario" class="mr-2 text-green-500">Grupo Prioritario:</label>
            <input type="text" id="grupoPrioritario" name="grupoPrioritario" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
          </div>

          <div class="flex items-center">
            <label for="tipoCuartoNivel" class="mr-2 text-green-500">Tipo Cuarto Nivel:</label>
            <select id="tipoCuartoNivel" name="tipoCuartoNivel" class="w-full p-2 border rounded">
              <option value="tipoCuartoNivel">N/A</option>
              <option value="tipoCuartoNivel">Si</option>
            </select>
          </div>
          <div></div>
          <div class="flex items-center">
            <label for="fechaNacimiento" class="mr-2 text-green-500">Fecha de Nacimiento:</label>
            <input type="date" id="fechaNacimiento" name="fechaNacimiento" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
          </div>
        </div>
      </div>
      {/*El Div de arriba contiene el 1er formulario*/}

      {/*Este div con class m4 hace un espacio entre los bordes hay como 5 iguales en el código*/}
      <div class="mt-4"></div>

      {/*El Div de acá abajo contiene todo el 2do formulario*/}
      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="grid grid-cols-4 grid-rows-1 gap-4">

            <div class="flex items-center">
              <label for="localidadAsosiada" class="mr-2 text-green-500">Localidad Asosiada:</label>
              <select id="localidadAsosiada" name="localidadAsosiada" class="w-full p-2 border rounded">
                <option value="localidadAsosiadaUno">ADM Central</option>
                <option value="localidadAsosiadaDos">ADM Ejemplo</option>
                <option value="localidadAsosiadaTres">ADM Ejemplo</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="localidadLaboral" class="mr-2 text-green-500">Localidad Laboral</label>
              <select id="localidadLaboral" name="localidadLaboral" class="w-full p-2 border rounded">
                <option value="localidadLaboralUno">AV. ELOY ALFARO N30-350 Y AV. AMAZONAS</option>
                <option value="localidadLaboralDos">AV. MARIANA DE JESUS Y AV. 10 AGOSTO</option>
                <option value="localidadLaboralTres">AV. EJEMPLO</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="provincia" class="mr-2 text-green-500">Provincia:</label>
              <select id="provincia" name="provincia" class="w-full p-2 border rounded">
                <option value="provinciaUno">Pichincha</option>
                <option value="provinciaDos">Guayaquill</option>
                <option value="provinciaTres">Cuenca</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="canton" class="mr-2 text-green-500">Cantón:</label>
              <select id="canton" name="canton" class="w-full p-2 border rounded">
                <option value="cantonUno">Quito</option>
                <option value="cantonDos">Puerto Quito</option>
                <option value="cantonTres">Cayambe</option>
              </select>
            </div>

          </div>
        </form>
      </div>
      {/*El Div de acá arriba cierra todo el 2do formulario*/}
      <div class="mt-4"></div>
      {/*El Div de acá abajo tiene todo el 3er formulario*/}
      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="grid grid-cols-3 grid-rows-1 gap-4">

            <div class="flex items-center">
              <label for="origenFondo" class="mr-2 text-green-500">Origen Fondo:</label>
              <select id="origenFondo" name="origenFondo" class="w-full p-2 border rounded">
                <option value="origenFondoUno">AC</option>
                <option value="origenFondoDos">AC</option>
                <option value="origenFondoTres">AC</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="remuneracion" class="mr-2 text-green-500">Remuneración:</label>
              <input type="text" id="remuneracion" name="remuneracion" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="fondos" class="mr-2 text-green-500">Fondos:</label>
              <select id="fondos" name="fondos" class="w-full p-2 border rounded">
                <option value="fondosUno">AC</option>
                <option value="fondosDos">AC</option>
              </select>
            </div>


          </div>
        </form>
      </div>
      {/*El Div de acá arriba cierra todo el 3er formulario*/}
      <div class="mt-4"></div>
      {/*El Div de acá abajo inicia todo el 4to formulario*/}
      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="grid grid-cols-3 grid-rows-2 gap-4">


            <div class="flex items-center">
              <label for="telefonoInsti" class="mr-2 text-green-500">Teléfono Institucional:</label>
              <input type="text" id="telefonoInsti" name="telefonoInsti" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>


            <div class="flex items-center">
              <label for="correoInsti" class="mr-2 text-green-500">Correo Institucional:</label>
              <input type="text" id="correoInsti" name="correoInsti" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="viaticoResidencia" class="mr-2 text-green-500">Viatico Residencia:</label>
              <select id="viaticoResidencia" name="viaticoResidencia" class="w-full p-2 border rounded">
                <option value="viaticoResidenciaUno">Si</option>
                <option value="viaticoResidenciaDos">No</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="extensionTelef" class="mr-2 text-green-500">Extensión Telefónica:</label>
              <input type="text" id="extensionTelef" name="extensionTelef" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>


          </div>
        </form>
      </div>
      {/*El Div de acá arriba cierra todo el 4to formulario*/}
      <div class="mt-4"></div>
      {/*El Div de acá abajo abre todo el 5to formulario*/}
      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="grid grid-cols-3 grid-rows-2 gap-4">

            <div class="flex items-center">
              <label for="puesto" class="mr-2 text-green-500">Puesto:</label>
              <select id="puesto" name="puesto" class="w-full p-2 border rounded">
                <option value="puestoUno">Oficinista 1</option>
                <option value="puestoDos">Oficinista 2</option>
                <option value="puestoTres">Oficinista 3</option>
              </select>
            </div>

            <div class="flex items-center">
              <label for="fechaIngreso" class="mr-2 text-green-500">Fecha de Ingreso:</label>
              <input type="date" id="fechaIngreso" name="fechaIngreso" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="numeroImposiciones" class="mr-2 text-green-500">Numero Imposiciones:</label>
              <input type="text" id="numeroImposiciones" name="numeroImposiciones" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="partidaOcupada" class="mr-2 text-green-500">Partida Ocupada:</label>
              <select id="partidaOcupada" name="viaticoResidencia" class="w-full p-2 border rounded">
                <option value="partidaOcupadaUno">Desocupada</option>
                <option value="partidaOcupadaDos">Ocupada</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {/*El Div de acá arriba abre todo el 5to formulario*/}

      <div class="mt-4"></div>
      {/*El Div de acá abajo abre todo el 6to formulario*/}
      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="grid grid-cols-3 grid-rows-1 gap-4">

            <div class="flex items-center">
              <label for="numeroRegistro" class="mr-2 text-green-500">Número De Registro Senescyt:</label>
              <input type="text" id="numeroRegistro" name="numeroRegistro" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="actividad" class="mr-2 text-green-500">Actividad:</label>
              <input type="text" id="actividad" name="actividad" class="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700"></input>
            </div>

            <div class="flex items-center">
              <label for="proceso" class="mr-2 text-green-500">Proceso:</label>
              <select id="proceso" name="proceso" class="w-full p-2 border rounded">
                <option value="procesoUno">Adjetivo</option>
                <option value="procesoDos">Adjetivo Ejemplo</option>
                <option value="procesoTres">Adjetivo Ejemplo 2</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {/*El Div de acá arriba cierra todo el 6to formulario*/}

      <div class="mt-4"></div>
      {/*El Div de acá abajo pertenece a los botones*/}

      <div class="shadow-md p-4 border border-gray-300 bg-white 500">
        <form>
          <div class="flex justify-center">
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
              Aceptar
            </button>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Rechazar
            </button>
          </div>
        </form>
      </div>

      {/*El Div de acá arriba cierra lo que pertenece a los botones*/}

      {/*El Div de acá abajo cierra todo el formulario*/}
    </div>

  )
}
