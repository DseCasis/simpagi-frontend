"use client"

import React, { useState } from 'react';


const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
 
  const handleUpload = () => {
    if (selectedFile) {
      // Aquí puedes realizar la lógica para subir el archivo al servidor
      console.log("Archivo seleccionado:", selectedFile);
    } else {
      console.log("Por favor, selecciona un archivo.");
    }
  };

  return (
  <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-slate-200 ">
  <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
    <div className="w-1/2 flex justify-center flex-col p-12 space-y-4 ">
        <h1 className="flex-1 text-xl text-center font-semibold pb-0 ">Sistema Simplificado de Planificación y Gestión de la investigación
        </h1> 
        <div className="px-2">
        <img 
        src="/logo.png"
        />
        </div>

    <div>
      <input type="file" onChange={handleFileChange} />
      <button className='bg-green-900 p-3' variant="contained" disableElevation size="large">Subir Archivo</button>
      <button className='bg-green-900 p-3' variant="contained" disableElevation size="large">Subir Archivo</button>
      <button className='bg-green-900 p-3' variant="contained" disableElevation size="large">Subir Archivo</button>
      <button className='bg-green-900 p-3' variant="contained" disableElevation size="large">Subir Archivo</button>
      
    </div>
        </div>
            </div>
               </div>
  );
};



export default FileUpload;