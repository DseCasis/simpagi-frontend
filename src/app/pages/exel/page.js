"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
<<<<<<< HEAD
import axios from 'axios';
=======
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
>>>>>>> 12f2cd60b9b4023add8acd9d1df6ac6a80dd4388

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

<<<<<<< HEAD
  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('/import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data); // Maneja la respuesta del servidor
      } catch (error) {
        console.error(error);
      }
=======
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
>>>>>>> 12f2cd60b9b4023add8acd9d1df6ac6a80dd4388
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
<<<<<<< HEAD
      <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200">
        <div className="w-1/2 flex  flex-col p-12 space-y-4">
          <h1 className="flex-1 text-xl text-center font-semibold pb-0">
=======
      <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
        <div className="w-1/2 flex flex-col p-12 space-y-4 ">
          <h1 className="flex-1 text-xl text-center font-semibold pb-0 ">
>>>>>>> 12f2cd60b9b4023add8acd9d1df6ac6a80dd4388
            Sistema Simplificado de Planificación y Gestión de la investigación
          </h1>
          <div className="px-2">
            <img src="/logo.png" alt="Logo" />
          </div>

<<<<<<< HEAD
          <Button
            component="label"
            className='bg-blue-500 p-1 text-gray-100'
            htmlFor="fileInput"
          >
            Seleccionar Archivo
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(event) => setSelectedFile(event.target.files[0])}
            />
          </Button>

          <Button
            className='bg-green-600 p-1 text-gray-100'
            variant="contained"
            disableElevation
            size="medium"
            onClick={handleUpload}
          >
            Exportar
          </Button>

          <Button
            className='bg-red-600 p-1 text-gray-100'
            variant="contained"
            disableElevation
            size="sm"
            href="/pages/formulario"
          >
            Cancelar
          </Button>
=======

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
>>>>>>> 12f2cd60b9b4023add8acd9d1df6ac6a80dd4388
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
