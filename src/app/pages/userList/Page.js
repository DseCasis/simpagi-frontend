"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItemCard from '@/app/components/UserItemCard';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from "sweetalert2";


export default function UserList() {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [isLoad, setIsLoad] = useState(false)
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('import_file', file);

            axios.post('http://localhost:8000/api/import', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    // Ocultar el spinner
                    setIsUploading(false);

                    console.log('File uploaded:', response.data);
                    showSuccessAlert();
                })
                .catch((error) => {
                    // Ocultar el spinner
                    setIsUploading(false);

                    console.error('Error uploading file:', error);
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
    useEffect(() => {
        setIsLoad(true)
        axios.get('http://localhost:8000/api/users')
            .then(response => {
                setUsers(response.data.data);
                setIsLoad(false)
                setTotalUsers(response.data.totalUsers)
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="h-screen w-full  flex overflow-hidden">
            <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">

                <div className="flex flex-row  border-b items-center justify-between pb-2">
                    <span className="text-lg font-semibold capitalize dark:text-gray-300">
                        Panel de Usuarios
                    </span>

                </div>

                <div className="mt-8">
                    <img
                        className="h-20 w-25 object-cover"
                        src="logo.png" />
                    <h2
                        className="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
                        Hello Enoshima
                    </h2>
                </div>

                <ul className="mt-2 text-gray-600">
                    <li className="mt-8">
                        <a href="#home" className="flex ">
                            <svg
                                className="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"></path>
                            </svg>
                            <span
                                className="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
                                dashboard
                            </span>
                        </a>
                    </li>

                    <li className="mt-8">
                        <a href="#home" className="flex">
                            <svg
                                className="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"></path>
                            </svg>
                            <span
                                className="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
                                Calendario
                            </span>
                        </a>
                    </li>

                    <li
                        className="mt-8 shadow py-2 bg-white dark:bg-gray-200 rounded-lg
				-ml-4">
                        <a href="#home" className="flex pl-4">
                            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"></path>
                            </svg>
                            <span className="ml-2 capitalize font-medium">Usuarios</span>
                        </a>
                    </li>

                    <li className="mt-8">
                        <a href="#home" className="flex">
                            <svg
                                className="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
                            </svg>
                            <span
                                className="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
                                tasks
                            </span>
                        </a>
                    </li>

                </ul>

                <div className="mt-auto flex items-center text-red-700 dark:text-red-400">
                    <a href="#home" className="flex items-center">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
                        </svg>
                        <span className="ml-2 capitalize font-medium">Cerrar Sesión</span>
                    </a>

                </div>
            </nav>
            <main
                className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto">
                <div className="mx-10 my-2">
                    <nav
                        className="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out">
                        <div className="flex">

                            <a
                                href="users-dashboard/"
                                className="py-2 block text-green-500 border-green-500
						dark:text-green-200 dark:border-green-200
						focus:outline-none border-b-2 font-medium capitalize
						transition duration-500 ease-in-out">
                                Usuarios
                            </a>
                        </div>

                        <div className="flex items-center select-none">
                            <span
                                className="hover:text-green-500 dark-hover:text-green-300
						cursor-pointer mr-3 transition duration-500 ease-in-out">

                                <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                                    <path
                                        d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </span>

                            <input
                                className="w-12 bg-transparent focus:outline-none"
                                placeholder="Search"/>

                        </div>

                    </nav>
                    <h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
                        Lista de Usuarios
                    </h2>
                    <div className="relative flex justify-between">
                        <button
                            className="mt-8 flex items-center justify-start py-3 px-2 text-white dark:text-gray-200 bg-green-400 dark:bg-green-500 rounded-lg shadow"
                        >
                            <span>Agregar Usuario</span>
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                        </button>

                        <div className="relative">
                            {isUploading && <CircularProgress/>}
                            {!isUploading && (
                                <input
                                    type="file"
                                    className="absolute opacity-0 top-0 left-0 h-full w-full cursor-pointer"
                                    onChange={handleUpload}
                                />
                            )}
                            {!isUploading && (
                                <button
                                    className="bg-blue-500 text-gray-100 rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                    <img src="excel-icon.png"/>
                                    Subir Archivo
                                </button>
                            )}
                        </div>

                    </div>


                    <br/>

                    <div
                        className="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600">

                        <div>
                            <span>
                                <span className="text-green-500 dark:text-green-200">
                                    {totalUsers + ' '}
                                </span>
                                users;
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-4 gap-4 justify-between text-gray-600 dark:text-gray-400">

                        <div className="col-span-1 ml-10 pl-2 flex capitalize items-center">
                            <span className="ml-8">Cédula</span>
                            <svg
                                className="ml-1 h-5 w-5 fill-current text-green-500 dark:text-green-200"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
                            </svg>
                        </div>

                        <div className="col-span-1 flex items-center">
                            <span className="ml-24">Nombre</span>
                            <svg
                                className="ml-1 h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
                            </svg>
                        </div>

                        <div className="col-span-1 flex items-center">
                            <span className="ml-24">Email</span>
                            <svg
                                className="ml-1 h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
                            </svg>
                        </div>

                        <div className="col-span-1 flex items-center">
                            <span className="ml-24">Fecha De Ingreso</span>
                            <svg
                                className="ml-1 h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
                            </svg>
                        </div>

                    </div>

                    <div className="container mx-auto items-center ">
                        {isLoad ? <CircularProgress/> : null}

                        {users.map((user) => (
                            <UserItemCard key={user.id} {...user} />
                        ))}
                    </div>

                </div>

            </main>

        </div>
    );
}