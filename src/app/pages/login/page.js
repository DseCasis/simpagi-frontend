"use client"


import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";     
 

export default function Page(){

    return(
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
            <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
                <div className="w-1/2 flex flex-col p-12 space-y-4">
                    <h1 className="flex-1 text-xl text-center font-semibold pb-0">Sistema Simplificado de Planificacion y Gestion de la investigacion
                    </h1> 
                    <div class="px-8">
                    <img 
                    src="/logo.png"
                    />
                    </div>

                    <form className="w-full space-y-2 flex flex-col justify-center">
                    <a className="text-center text-gray-400" >Ingrese sus credenciales</a> 
                    
                        <TextField
                            label="Correo electronico"
                            id="outlined-size-small"
                            name="email"
                            type="email"
                            required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            
                        />
                        

                        <TextField
                            label="Contraseña"
                            type="password"
                            id="password"
                            name="password"
                            required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        />
                    </form>
        
                    <Button type="submit" className='bg-blue-900 p-3' variant="contained" disableElevation size="large">
                        Ingresar
                    </Button>
                    <a className= "text-center" href="#" > ¿Olvidaste la contraseña?</a>
                </div>
                <div className="w-1/2 rounded-r-md bg-red-500">
                    <img className="w-full h-full object-cover rounded-r-md" src="/trigo.png" alt=""/>
                </div>
            </div>
        </div>
    )
}