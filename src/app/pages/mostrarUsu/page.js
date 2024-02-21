"use client"

import React, { useState, useEffect } from 'react';
import Topbar from '@/app/components/Topbar';
import Swal from 'sweetalert2';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.min.css';

function mostrarUsu() {

   /*
    const initialState = {
        tituloActividad: '',
        ObjetivoPei: '',
        resultadoEsperado: '',
        // Agrega más campos según sea necesario
    };

    */
    // Estado para almacenar la lista de usuarios
    const [users, setUsers] = useState([]);
    // Estado para almacenar el nuevo usuario
    const [newUser, setNewUser] = useState({});

    // Función para cargar los usuarios al montar el componente
    useEffect(() => {
        getRandomUsers();
    }, []);

    // Función para obtener usuarios aleatorios desde la API de Random User
    const getRandomUsers = () => {
        axios.get('https://randomuser.me/api/?results=5')
            .then(response => {
                setUsers(response.data.results);
            })
            .catch(error => {
                console.error('Error al obtener usuarios aleatorios:', error);
            });
    };

    // Función para crear un nuevo usuario
    const createUser = () => {
        axios.post('https://randomuser.me/api/', newUser)
            .then(response => {
                const newUserList = [...users, response.data.results[0]];
                setUsers(newUserList);
                setNewUser({});
            })
            .catch(error => {
                console.error('Error al crear nuevo usuario:', error);
            });
    };

    // Función para actualizar un usuario existente
    const updateUser = (userId, updatedUserData) => {
        const updatedUserList = users.map(user => {
            if (user.login.uuid === userId) {
                return { ...user, ...updatedUserData };
            }
            return user;
        });

        setUsers(updatedUserList);

        axios.put(`https://randomuser.me/api/?results=5/${userId}`, updatedUserData)
            .then(response => {
                console.log('Usuario actualizado correctamente:', response.data);
            })
            .catch(error => {
                console.error('Error al actualizar usuario:', error);
            });
    };

    // Función para eliminar un usuario
    const deleteUser = (userId, event) => {
        event.preventDefault();
    
        const updatedUserList = users.filter(user => user.login.uuid !== userId);
        setUsers(updatedUserList);
    
        axios.delete(`https://randomuser.me/api/?results=5/${userId}`)
          .then(response => {
            console.log('Usuario eliminado correctamente:', response.data);
          })
          .catch(error => {
            console.error('Error al eliminar usuario:', error);
          });
      };

/*
    //////////////////////Formulario
    const [formData, setFormData] = useState(initialState);
    const handleInputChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (formData.tituloActividad.trim() === '' || formData.ObjetivoPei.trim() === '' || formData.resultadoEsperado.trim() === '') {
            // Cambiar el color del campo a rojo si algún campo está vacío
            setFormData({
                ...formData,
                tituloActividadEmpty: formData.tituloActividad.trim() === '',
                ObjetivoPeiEmpty: formData.ObjetivoPei.trim() === '',
                resultadoEsperadoEmpty: formData.resultadoEsperado.trim() === '',
            });

            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
            });
            return;
        }

        // Confirmación antes de enviar
        Swal.fire({
            title: '¿Estás seguro de enviar?',
            text: '¡Una vez hecho esto no se puede revertir!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, envíalo!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Enviar datos al servidor o realizar otras acciones
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Tu archivo se ha enviado.',
                    icon: 'success',
                });
                // Reiniciar el estado del formulario después de enviar
                setFormData(initialState);
            }
        });
    };

    const handlereject = () => {
        // Rechazar el formulario y reiniciar el estado
        Swal.fire({
            title: 'Formulario eliminado',
            icon: 'info',
        });
        setFormData(initialState);
    };
*/

    return (

        <div>
            {/* El div de arriba, contiene el topbar */}
            <Topbar></Topbar>
            {/* Este div de abajo contiene todo el formulario Ingresar PEI */}
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 via-green-900 to-slate-900" >
                <div className="w-full md:w-1/2 shadow-md p-4 border-4 mt-4 bg-gray-100 border md:shadow-2xl md:shadow-stone-500 rounded-lg">
                    <form>
                        <div>
                            <h1>Lista de Usuarios Aleatorios</h1>
                            
                            <button className="w-full md:w-auto bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={createUser}>Agregar Nuevo Usuario</button>
                            <ul>
                                {users.map((user, index) => (
                                    <li key={index}>
                                        <img src={user.picture.medium} alt="User" />
                                        <div>
                                            <p><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
                                            <p><strong>Email:</strong> {user.email}</p>
                                            <p><strong>País:</strong> {user.location.country}</p>
                                            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={(event) => updateUser(user.login.uuid, { name: 'Nuevo Nombre' })}>Actualizar Nombre</button>
                                            <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={(event) => deleteUser(user.login.uuid, event)}>Eliminar Usuario</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default mostrarUsu;