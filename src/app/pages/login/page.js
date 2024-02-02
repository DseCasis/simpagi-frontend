"use client"

import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar alguna acción con los datos del formulario si es necesario
    if (isValidEmail) {
      // Tu lógica de manejo del formulario aquí
      console.log("Correo electrónico válido:", email);
    } else {
      console.log("Correo electrónico no válido");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
      <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
        <div className="w-1/2 flex flex-col p-12 space-y-2">
          <h1 className="flex-1 text-xl text-center font-semibold pb-0">
            Sistema Simplificado de Planificación y Gestión de la investigación
          </h1>
          <div class="px-8">
            <img src="/logo.png" alt="Logo" />
          </div>

          <form
            className="w-full space-y-4 flex flex-col justify-center pb-2"
            onSubmit={handleSubmit}
          >
            <a className="text-center text-gray-400">Ingrese sus credenciales</a>

            <TextField
              label="Correo electrónico"
              id="outlined-size-small"
              name="email"
              type="email"
              required
              error={!isValidEmail}
              helperText={!isValidEmail && "Correo electrónico no válido"}
              value={email}
              onChange={handleEmailChange}
            />

            <TextField
              label="Contraseña"
              type="password"
              id="password"
              name="password"
              required
            />

            <Button
              type="submit"
              className="bg-blue-900 p-3"
              variant="contained"
              disableElevation
              size="large"
            >
              Ingresar
            </Button>

            <a className="text-center" href="/pages/recoverPassword">
              ¿Olvidaste la contraseña?
            </a>
          </form>
        </div>
        <div className="w-1/2 rounded-r-md bg-red-500">
          <img
            className="w-full h-full object-cover rounded-r-md"
            src="/trigo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
