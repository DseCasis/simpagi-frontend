"use client"

<<<<<<< HEAD
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
    } else {
      console.log("Por favor, selecciona un archivo.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
      <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200">
        <div className="w-1/2 flex  flex-col p-12 space-y-4">
          <h1 className="flex-1 text-xl text-center font-semibold pb-0">
            Sistema Simplificado de Planificación y Gestión de la investigación
          </h1>
          <div className="px-2">
            <img src="public/logo.png" alt="Logo" />
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
=======
import React, { useState } from "react";
import FormLogin from "/src/app/components/auth/Formlogin";
import Alert from "/src/app/alerts/alert";
import Layout from "@/app/layout/Layout";

export default function Auth({userLogin}) {
  const [isLogin, setIsLogin]=useState(true);
  const [logged, setLogged ]= useState(false)

  const handleIsLogin=()=>{
    setIsLogin(!isLogin);
  }

  const handleErrorLogin =()=>{
    setLogged(!logged)
    setTimeout(()=>{
      setLogged(false)
    },5000)
  }

  return (
    <Layout>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
        <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200">
              {isLogin ? (
                  <FormLogin handleIsLogin={handleIsLogin} userLogin={userLogin} handleErrorLogin={handleErrorLogin}/>
              ) : (
                  <FormRegister handl_eIsLogin={handleIsLogin} isLogin={handleIsLogin}/>
              )}
              {logged && (
                  <Alert>
                      <p className="font-bold">Mensaje Informativo</p>
                      <p className="text-sm">Las credenciales no son válidas</p>
                  </Alert>
              )}
          </div>
      </div>
    </Layout>  
  )
}
>>>>>>> 7f8b17e7d5a29dde2320967304c3f135e1fd97d6
