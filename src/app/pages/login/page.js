"use client"

import TextField from "@mui/material/TextField";
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Login() {
    const initialState = {
        email: '',
        password: '',
        emailEmpty: false,
        passwordEmpty: false,
    };
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.email.trim() === '' || formData.password.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                emailEmpty: formData.email.trim() === '',
                passwordEmpty: formData.password.trim() === '',
            });

            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingresa tus credenciales.',
                icon: 'error',
            });
            return;
        }

        // Simulación de autenticación (tiempo de espera de 1 segundo)
        try {
            // Simular una solicitud asincrónica (por ejemplo, utilizando fetch o axios)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Si la simulación tiene éxito, mostrar mensaje de éxito
            Swal.fire({
                title: '¡Ingresado!',
                text: 'Has ingresado correctamente :)',
                icon: 'success',
            });
        } catch (error) {
            // Si hay un error durante la autenticación, mostrar mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema durante la autenticación.',
                icon: 'error',
            });
        }
    };

    return (
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gray-200">
            <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
                <div className="w-1/2 flex flex-col p-12 space-y-4">
                    <h1 className="flex-1 text-xl text-center font-semibold pb-0">Sistema Simplificado de Planificacion y Gestion de la investigacion
                    </h1>
                    <div class="px-8">
                        <img
                            src="/logo.png"
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-2 flex flex-col justify-center">
                        <a className="text-center text-gray-400" >Ingrese sus credenciales</a>

                        <TextField
                            onChange={handleInputChange}
                            label="Correo electrónico"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            className={`w-full p-2 ${formData.emailEmpty ? 'border-red-500' : ''}`}
                        />


                        <TextField
                            onChange={handleInputChange}
                            label="Contraseña"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            className={`w-full p-2 ${formData.passwordEmpty ? 'border-red-500' : ''}`}
                        />
                    </form>

                    <Button type="submit" onClick={handleSubmit}
                        className='bg-blue-900 p-3' variant="contained" disableElevation size="large">
                        Ingresar
                    </Button>

                    <a className="text-center" href="#" > ¿Olvidaste la contraseña?</a>
                </div>
                <div className="w-1/2 rounded-r-md bg-red-500">
                    <img className="w-full h-full object-cover rounded-r-md" src="/trigo.png" alt="" />
                </div>
            </div>
        </div>

    );
}
export default Login;