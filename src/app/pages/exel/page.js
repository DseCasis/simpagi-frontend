"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';

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

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('import_file', file);

      axios.post('http://localhost:8000/api/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('File uploaded:', response.data);
          showSuccessAlert();
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.log("Por favor, selecciona un archivo.");
    }

    const showSuccessAlert = () => {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'El archivo se ha subido con éxito.',
      }).then(() => {
        // Recargar la página
        window.location.reload();
      });
    };
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


          <div className="relative">
            <input
              type="file"
              className="absolute opacity-0 top-0 left-0 h-full w-full cursor-pointer"
              onChange={handleUpload}
            />
            <button className="bg-blue-500 text-gray-100 rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 inline-block -mt-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Subir Archivo
            </button>
          </div>

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
