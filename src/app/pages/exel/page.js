"use client"

import React, { useState, lazy } from 'react';
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button onClick={handleClick} disabled={loading} className='bg-blue-500 text-gray-100 rounded-lg'>
      {loading ? <CircularProgress size={24} color="inherit" /> : 'Subir Archivo'}
    </Button>
  );
};

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Archivo seleccionado:", selectedFile);
    } else {
      console.log("Por favor, selecciona un archivo.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
      <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
        <div className="w-1/2 flex flex-col p-12 space-y-4 ">
          <h1 className="flex-1 text-xl text-center font-semibold pb-0 ">
            Sistema Simplificado de Planificación y Gestión de la investigación
          </h1>
          <div className="px-2">
            <img src="/logo.png" alt="Logo" />
          </div>

          
          <input className="block w-full text-sm text-gray-900 border border-green-200 rounded-lg bg-gray-50" 
            id="file_input" 
            type="file"
          />

         <LoadingSpinner><Button onClick={handleUpload}>Subir Archivo</Button></LoadingSpinner>

          <Button className='bg-green-600 p-1 text-gray-100 rounded-lg' variant="contained" disableElevation size="medium">Exportar</Button>

          <Button className='bg-red-600 p-1 text-gray-100' variant="contained" disableElevation size="sm" href="/pages/formulario">Cancelar</Button>

          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
