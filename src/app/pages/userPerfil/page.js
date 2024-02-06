import React from 'react';

export default function PersonalProfile() {
  return (
    <div className="flex flex-wrap min-h-screen justify-center items-center bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
      <div className="container justify-center md:shadow-2xl md:shadow-stone-500 bg-gray-200">
        <div className="w-full ">
          <div className="bg-gradient-to-r  text-center text-white p-16">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="my-5 w-24 mx-auto" />
            <h2 className="text-xl px-8">Marie Horwitz</h2>
            <p>Área designada</p>
            <p>Cargo</p>
            <p>Ocpacion</p>
          </div>
        </div>
        <div className="w-full  ">
          <div className="bg-gray-200 p-16 ">
            <h6 className="text-lg mb-6">Información personal</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h6>Télefono</h6>
                <p className="text-gray-500 ">123 456 789</p>
              </div>
              <div>
                <h6>Correo</h6>
                <p className="text-gray-500">info@example.com</p>
              </div>
             
              <div>
                <h6>Dirección</h6>
                <p className="text-gray-500">El Condado</p>
              </div> 
              <div>
                <h6>Número de Emergencia</h6>
                <p className="text-gray-500">0998887450</p>
              </div>
              <div>
                <h6>Tipo de Sangre</h6>
                <p className="text-gray-500">O+</p>
              </div>
              <div>
                <h6> Fecha Nacimiento</h6>
                <p className="text-gray-500">09-12-2004</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
