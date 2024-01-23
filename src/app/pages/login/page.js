"use client"


import TextField from "@mui/material/TextField";
import React,  { useState }  from "react";
import Button from "@mui/material/Button";     
 
        const Formulario = () => {
        // Estado para almacenar el valor del correo electrónico
        const [correo, setCorreo] = useState('');
        // Estado para almacenar el estado de validación
        const [error, setError] = useState('');
      
        // Función para manejar cambios en el campo de correo electrónico
        const handleCorreoChange = (event) => {
          setCorreo(event.target.value);
          validateEmail(event.target.value);
        };
      
        // Función para validar el correo electrónico
        const validateEmail = (value) => {
          // Expresión regular para validar un correo electrónico
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
          // Validación del correo electrónico
          if (!emailRegex.test(value)) {
            setError('Ingrese un correo electrónico válido.');
          } else {
            setError('');
          }
        };

return(
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-slate-200">
            <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-gray-500 bg-gray-200 ">
                <div className="w-1/2 flex flex-col p-12 space-y-4">
                    <h1 className="flex-1 text-xl text-center font-semibold pb-0">Sistema Simplificado de Planificación y Gestión de la investigación
                    </h1> 
                    <div class="px-4">
                    <img 
                    src="/logo.png"
                    />
                    </div>

                    <form className="w-full space-y-2 flex flex-col justify-center">
                    <a className="text-center text-gray-400 p-2 ">Ingrese sus credenciales</a> 

                    
                        <TextField
                            label="Correo electrónico"
                            id="outlined-size-small"
                            name="email"
                            type="email"
                            required
                            variant="outlined"
                            size="small"
                            value={correo}
                            onChange={handleCorreoChange}
                            helperText={error}
                            error={Boolean(error)}
                            
                        />
                        

                        <TextField
                            label="Contraseña"
                            type="password"
                            id="password"
                            name="password"
                            required 
                            size="small"
                        />   
                    </form>


                    <Button type="submit" className='bg-green-900 p-3 ' variant="contained" disableElevation size="large">
                        Ingresar
                    </Button>
                    <a className= " text-center" href="/pages/recoverPassword" ><strong>¿Olvidaste la contraseña?</strong> </a>
                </div>
                <div className="w-1/2 rounded-r-md bg-red-500">
                    <img className="w-full h-full object-cover rounded-r-md" src="/trigo.png" alt=""/>
                </div>
            </div>
        </div>
    
    )
}
export default Formulario