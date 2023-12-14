"use client"


import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";

export default function Home(){


    return(
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border-black">
                <div className="w-1/2 flex flex-col p-12 space-y-4">
                    <h1 className="text-xl font-semibold pb-8">Sistema Simplificado de Planificacion y Gestion de la investigacion</h1>
                    <a className="text-gray-400">Por favor ingrese sus credenciales</a>
                    <form className="w-full space-y-4 flex flex-col justify-center pb-8">
                        <TextField
                            label="Nombres"
                            id="outlined-size-small"
                        />
                        <TextField
                            label="Nombres"
                            id="outlined-size-small"
                        />
                    </form>
                    <Button className='bg-blue-900 p-3' variant="contained" disableElevation size="large">
                        Aceptar
                    </Button>
                    <a>Olvidaste la contrasenha?</a>
                </div>
                <div className="w-1/2 rounded-r-md bg-red-500">
                    <img className="w-full h-full object-cover rounded-r-md" src="/trigo.jpg"/>
                </div>
            </div>
        </div>
    )
}