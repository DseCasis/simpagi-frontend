import React from "react";
import Button from '@mui/material/Button';

export default function SideBar() {
  return (
<div className="flex min-h-screen">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
    
  {/* Barra lateral */}
  <aside className="bg-green-800 text-white w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center">
    {/* Contenido de la barra lateral */}
    <div className="p-4">
      <img
        src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg?w=740"
        alt="Foto de usuario"
        className="rounded-full h-32 w-32 lg:h-64 lg:w-64 object-cover"
      />
    </div>
    <div className="p-3 flex flex-col items-center">
      <p className="text-center text-white font-bold md:text-lg lg:text-xl">Juanito Andres Perez Ponce</p>
      <p className="text-center text-white md:text-sm lg:text-base">alexjeremy10@hotmail.com</p>
    </div>

    <div>
      <ul className="p-4 text-center text-white md:text-sm lg:text-base">
        <li className="py-2 mb-6 font-bold"><a href="#">Enlace 1</a></li>
        <li className="py-2 mb-6 font-bold"><a href="#">Enlace 2</a></li>
        <li className="py-2 mb-6 font-bold"><a href="#">Enlace 3</a></li>
        <li className="py-2 mb-6 font-bold"><a href="#">Enlace 4</a></li>
      </ul>
    </div>

    <div className="flex-grow"></div>

    <div className="w-full">
      <Button className='bg-red-500 w-full py-6 md:py-4 lg:py-10 px-10 md:px-5 lg:px-5 rounded text-white' variant="contained" color="error">
        <a href="#">
          <i className="fas fa-door-open mr-2"></i> Cerrar Sesión
        </a>
      </Button>
    </div>
  </aside>
  <script src="ruta/al/archivo.js"></script>
</div>

    )
}