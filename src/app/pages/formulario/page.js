"use client"

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import Button from "@mui/material/Button";
import {createUser} from "@/app/services/PrivateServies";
import Layout from "@/app/layout/Layout";


function Formulario() {
    const initialState = {
        dni: '',
        name: '',
        gender: '',
        birthDate: '',
        hiteDate: '',
        contributionNumber: '',
        senescytRegistrationNumber: '',
        academicTitle: '',
        institutionalPhone: '',
        email: '',
        esigefActivity: '',
        salary: '',
        password: '',
        returnedMigrant: '',
        priorityGroup: '',
        nationality: '',
        ethnicGroup: '',
        academicFormation: '',
        fourthLevel: '',
        position: '',
        funding: '',
        regimen: '',
        process: '',
        unit: '',
        management: '',
        area: '',
        area_ta: '',
        associated_location: '',
    };

    ///Cargar Datos
    const [nivelAcademico, setNivelAcademico] = useState([]);
    const [ethnic, setethnic] = useState([]);
    const [nacionalidades, setNacionalidades] = useState([]);
    const [cuartoNivel, setCuartoNivel] = useState([]);
    const [localidadAso, setLocalidadAso] = useState([]);
    const [fondo, setFondo] = useState([]);
    const [posicion, setPosicion] = useState([]);
    const [procesos, setProcesos] = useState([]);
    const [grupoPri, setGrupoPri] = useState([]);
    const [regimens, setRegimens] = useState([]);
    const [unidades, setUnidades] = useState([]);
    const [gestion, setGestion] = useState([]);
    const [areaTa, setAreaTa] = useState([]);
    const [subArea, setSubArea] = useState([]);
    useEffect(() => {
        // 1er solicitud Axios
        axios.get('http://127.0.0.1:8000/api/academics')
            .then(response => {
                const nombreAcademico = response.data.map(academicFormation => academicFormation.name);
                setNivelAcademico(nombreAcademico);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 2da solicitud Axios
        axios.get('http://127.0.0.1:8000/api/ethnics')
            .then(response => {
                const ethnic = response.data.map(ethnicGroup => ethnicGroup.name);
                setethnic(ethnic);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 3er solicitud Axios
        axios.get('http://127.0.0.1:8000/api/nationalities')
            .then(response => {
                const nacionalidades = response.data.map(nationality => nationality.name);
                setNacionalidades(nacionalidades);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 4ta solicitud Axios
        axios.get('http://127.0.0.1:8000/api/fourthLevel')
            .then(response => {
                const cuartoNivel = response.data.map(fourthLevel => fourthLevel.name);
                setCuartoNivel(cuartoNivel);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 5ta solicitud Axios
        axios.get('http://127.0.0.1:8000/api/locations')
            .then(response => {
                const localidadAso = response.data.map(associated_location => associated_location.acronym);
                setLocalidadAso(localidadAso);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 6ta solicitud Axios
        axios.get('http://127.0.0.1:8000/api/funds')
            .then(response => {
                const fondo = response.data.map(funding => funding.name);
                setFondo(fondo);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 7ma solicitud Axios
        axios.get('http://127.0.0.1:8000/api/positions')
            .then(response => {
                const posicion = response.data.map(position => position.name);
                setPosicion(posicion);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 8va solicitud Axios
        axios.get('http://127.0.0.1:8000/api/process')
            .then(response => {
                const procesos = response.data.map(process => process.name);
                setProcesos(procesos);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 9na solicitud Axios
        axios.get('http://127.0.0.1:8000/api/regimen')
            .then(response => {
                const regimens = response.data.map(regimen => regimen.name);
                setRegimens(regimens);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 10ma solicitud Axios
        axios.get('http://127.0.0.1:8000/api/units')
            .then(response => {
                const unidades = response.data.map(unit => unit.name);
                setUnidades(unidades);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 11va solicitud Axios
        axios.get('http://127.0.0.1:8000/api/managements')
            .then(response => {
                const gestion = response.data.map(management => management.name);
                setGestion(gestion);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 12va solicitud Axios
        axios.get('http://127.0.0.1:8000/api/areaTa')
            .then(response => {
                const areaTa = response.data.map(area_ta => area_ta.name);
                setAreaTa(areaTa);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 13va solicitud Axios
        axios.get('http://127.0.0.1:8000/api/subArea')
            .then(response => {
                const subArea = response.data.map(area => area.name);
                setSubArea(subArea);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });
        // 14va solicitud Axios
        axios.get('http://127.0.0.1:8000/api/priorityGroup')
            .then(response => {
                const grupoPri = response.data.map(priorityGroup => priorityGroup.name);
                setGrupoPri(grupoPri);
            })
            .catch(error => {
                console.error('Error al obtener otra data:', error);
            });

    }, []);
    ////Aquí termina

    //Aqui se asignan las validaciones, para que vayan por separado, o si no uno valida a todos los campos
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const validarCampos = () => {
        const camposVacios = {
            dniEmpty: formData.dni.trim() === '',
            nameEmpty: formData.name.trim() === '',
            genderEmpty: formData.gender.trim() === '',
            birthDateEmpty: formData.birthDate.trim() === '',
            hiteDateEmpty: formData.hiteDate.trim() === '',
            contributionNumberEmpty: formData.contributionNumber.trim() === '',
            senescytRegistrationNumberEmpty: formData.senescytRegistrationNumber.trim() === '',
            academicTitleEmpty: formData.academicTitle.trim() === '',
            institutionalPhoneEmpty: formData.institutionalPhone.trim() === '',
            emailEmpty: formData.email.trim() === '',
            esigefActivityEmpty: formData.esigefActivity.trim() === '',
            salaryEmpty: formData.salary.trim() === '',
            passwordEmpty: formData.password.trim() === '',
            returnedMigrantEmpty: formData.returnedMigrant.trim() === '',
            priorityGroupEmpty: formData.priorityGroup.trim() === '',
            nationalityEmpty: formData.nationality.trim() === '',
            ethnicGroupEmpty: formData.ethnicGroup.trim() === '',
            academicFormationEmpty: formData.academicFormation.trim() === '',
            fourthLevelEmpty: formData.fourthLevel.trim() === '',
            positionEmpty: formData.position.trim() === '',
            fundingEmpty: formData.funding.trim() === '',
            regimenEmpty: formData.regimen.trim() === '',
            processEmpty: formData.process.trim() === '',
            unitEmpty: formData.unit.trim() === '',
            managementEmpty: formData.management.trim() === '',
            areaEmpty: formData.area.trim() === '',
            area_taEmpty: formData.area_ta.trim() === '',
            associated_locationEmpty: formData.associated_location.trim() === '',
        };

        setFormData({
            ...formData,
            ...camposVacios,
        });

        return Object.values(camposVacios).some((campoVacio) => campoVacio);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de campos
        if (validarCampos()) {
            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
            });
            return;
        }

        const  {
            dni,
            name,
            gender,
            birthDate,
            hiteDate,
            contributionNumber,
            senescytRegistrationNumber,
            academicTitle,
            institutionalPhone,
            email,
            esigefActivity,
            salary,
            password,
            returnedMigrant,
            priorityGroup,
            nationality,
            ethnicGroup,
            academicFormation,
            fourthLevel,
            position,
            funding,
            regimen,
            process,
            unit,
            management,
            area,
            area_ta,
            associated_location,
        } = formData

        const user = {
            dni,
            name,
            gender,
            birthDate,
            hiteDate,
            contributionNumber,
            senescytRegistrationNumber,
            academicTitle,
            institutionalPhone,
            email,
            esigefActivity,
            salary,
            password,
            returnedMigrant,
            priorityGroup,
            nationality,
            ethnicGroup,
            academicFormation,
            fourthLevel,
            position,
            funding,
            regimen,
            process,
            unit,
            management,
            area,
            area_ta,
            associated_location,
        }

        //Confirmación antes de enviar
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
                createUser(formData)
                    .then(response => {
                        console.log('Respuesta del servidor:', response.data);
                        // Mostrar mensaje de éxito con SweetAlert2
                        Swal.fire({
                            title: '¡Enviado!',
                            text: 'Tu información ha sido enviada correctamente.',
                            icon: 'success',
                        });
                        // Reiniciar el estado del formulario después de enviar
                        setFormData(initialState);
                    })
                    .catch(error => {
                        console.error('Error al enviar el formulario:', error);
                        // Mostrar mensaje de error específico
                        if (error.response && error.response.status === 422) {
                            const erroresServidor = error.response.data.errors;
                            // Mostrar una lista de errores del servidor
                            Swal.fire({
                                title: 'Error',
                                text: 'Por favor, corrige los siguientes errores:',
                                icon: 'error',
                                html: `<ul>${Object.keys(erroresServidor).map(error => `<li>${erroresServidor[error]}</li>`).join('')}</ul>`,
                            });
                        } else {
                            // Mostrar mensaje de error genérico
                            Swal.fire({
                                title: 'Error',
                                text: 'Ocurrió un error al enviar el formulario.',
                                icon: 'error',
                            });
                        }
                    }
                    );
            }
        });
    }

    const handlereject = () => {
        Swal.fire({
            title: 'Formulario eliminado',
            icon: 'info',
        });
        setFormData(initialState);
    }
        return (
        <Layout>
            <div className='bg-gradient-to-r from-slate-900 via-green-900 to-slate-900'>
                <div className="px-20 ">
                    <p class="p-4 text-4xl text-white text-center font-semibold font-sans">
                        REGISTRO DE USUARIO
                    </p>
                    <div className="">
                        <form onSubmit={handleSubmit}>

                            <div
                                className="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg mt-4 bg-gray-100">
                                <div
                                    className="text-black font-semibold font-sans grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                                    <div className="flex items-center">
                                        <label htmlFor="dni" className="mr-2">Cédula:</label>
                                        <input
                                            type="text"
                                            id="dni"
                                            name="dni"
                                            value={formData.dni}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.dniEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="name" className="mr-2">Nombres:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full border ${formData.nameEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="gender" className="mr-2">Género:</label>
                                        <input
                                            type="text"
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full border ${formData.genderEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="birthDate" className="mr-2">Fecha Nacimiento:</label>
                                        <input
                                            type="date"
                                            id="birthDate"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.birthDateEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="hiteDate" className="mr-2">Hite Date:</label>
                                        <input
                                            type="date"
                                            id="hiteDate"
                                            name="hiteDate"
                                            value={formData.hiteDate}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.hiteDateEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="contributionNumber" className="mr-2">Número de
                                            Contribución:</label>
                                        <input
                                            type="text"
                                            id="contributionNumber"
                                            name="contributionNumber"
                                            value={formData.contributionNumber}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.contributionNumberEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="senescytRegistrationNumber" className="mr-2">Número de Registro
                                            Senescyt:</label>
                                        <input
                                            type="text"
                                            id="senescytRegistrationNumber"
                                            name="senescytRegistrationNumber"
                                            value={formData.senescytRegistrationNumber}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.senescytRegistrationNumberEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="academicTitle" className="mr-2">Título Académico:</label>
                                        <input
                                            type="text"
                                            id="academicTitle"
                                            name="academicTitle"
                                            value={formData.academicTitle}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full border ${formData.academicTitleEmpty ? 'border-red-500' : 'border-gray-300'} rounded-md py-1 px-3 text-green-700`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="institutionalPhone" className="mr-2">Télefono
                                            Institucional:</label>
                                        <input
                                            type="text"
                                            id="institutionalPhone"
                                            name="institutionalPhone"
                                            value={formData.institutionalPhone}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.institutionalPhoneEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="email" className="mr-2">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.emailEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="esigefActivity" className="mr-2">esigefActivity:</label>
                                        <input
                                            type="text"
                                            id="esigefActivity"
                                            name="esigefActivity"
                                            value={formData.esigefActivity}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.esigefActivityEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="salary" className="mr-2">salary:</label>
                                        <input
                                            type="text"
                                            id="salary"
                                            name="salary"
                                            value={formData.salary}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.salaryEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="password" className="mr-2">Contraseña:</label>
                                        <input
                                            type="text"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.passwordEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="returnedMigrant" className="mr-2">returnedMigrant:</label>
                                        <input
                                            type="text"
                                            id="returnedMigrant"
                                            name="returnedMigrant"
                                            value={formData.returnedMigrant}
                                            onChange={(event) => {
                                                const inputValue = event.target.value;
                                                if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
                                                    handleInputChange(event);
                                                }
                                            }}
                                            className={`w-full p-2 ${formData.returnedMigrantEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        />
                                    </div>

                                </div>
                            </div>

                            {/*Este div con class m4 hace un espacio entre los bordes hay como 5 iguales en el código*/}
                            <div class="mt-4"></div>

                            <div
                                class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

                                <div class="text-black font-semibold font-sans grid grid-cols-2 grid-rows-2 gap-4">

                                    <div className="flex items-center">
                                        <label htmlFor="priorityGroup" className="mr-2">Grupo Prioritario:</label>
                                        <select
                                            id="priorityGroup"
                                            name="priorityGroup"
                                            value={formData.priorityGroup}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.priorityGroupEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {grupoPri.map((priorityGroup, index) => (
                                                <option key={index} value={priorityGroup}
                                                        className="whitespace-nowrap">{priorityGroup}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="nationality" className="mr-2">Nacionalidad:</label>
                                        <select
                                            id="nationality"
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.nationalityEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {nacionalidades.map((nationality, index) => (
                                                <option key={index} value={nationality}
                                                        className="whitespace-nowrap">{nationality}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="ethnicGroup" className="mr-2">Grupo Etnico:</label>
                                        <select
                                            id="ethnicGroup"
                                            name="ethnicGroup"
                                            value={formData.ethnicGroup}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.ethnicGroupEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {ethnic.map((ethnicGroup, index) => (
                                                <option key={index} value={ethnicGroup}
                                                        className="whitespace-nowrap">{ethnicGroup}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="academicFormation" className="mr-2">Formación Académica:</label>
                                        <select
                                            id="academicFormation"
                                            name="academicFormation"
                                            value={formData.academicFormation}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.academicFormationEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {nivelAcademico.map((academicFormation, index) => (
                                                <option key={index} value={academicFormation}
                                                        className="whitespace-nowrap">{academicFormation}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="fourthLevel" className="mr-2">Tipo Cuarto Nivel:</label>
                                        <select
                                            id="fourthLevel"
                                            name="fourthLevel"
                                            value={formData.fourthLevel}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.fourthLevelEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {cuartoNivel.map((fourthLevel, index) => (
                                                <option key={index} value={fourthLevel}
                                                        className="whitespace-nowrap">{fourthLevel}</option>
                                            ))}
                                        </select>
                                    </div>


                                </div>

                            </div>

                            <div class="mt-4"></div>
                            {/*El Div de acá abajo tiene todo el 3er formulario*/}
                            <div
                                class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

                                <div class="text-black font-semibold font-sans grid grid-cols-2 grid-rows-2 gap-4">

                                    <div className="flex items-center">
                                        <label htmlFor="position" className="mr-2">Posicion:</label>
                                        <select
                                            id="position"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.positionEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {posicion.map((position, index) => (
                                                <option key={index} value={position}
                                                        className="whitespace-nowrap">{position}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="funding" className="mr-2">Fondos:</label>
                                        <select
                                            id="funding"
                                            name="funding"
                                            value={formData.funding}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.fundingEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {fondo.map((funding, index) => (
                                                <option key={index} value={funding}
                                                        className="whitespace-nowrap">{funding}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="regimen" className="mr-2">Regimen:</label>
                                        <select
                                            id="regimen"
                                            name="regimen"
                                            value={formData.regimen}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.regimenEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {regimens.map((regimen, index) => (
                                                <option key={index} value={regimen}
                                                        className="whitespace-nowrap">{regimen}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="process" className="mr-2">Proceso:</label>
                                        <select
                                            id="process"
                                            name="process"
                                            value={formData.process}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.processEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {procesos.map((process, index) => (
                                                <option key={index} value={process}
                                                        className="whitespace-nowrap">{process}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>

                            </div>
                            {/*El Div de acá arriba cierra todo el 3er formulario*/}
                            <div class="mt-4"></div>
                            {/*El Div de acá abajo inicia todo el 4to formulario*/}
                            <div
                                class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

                                <div class="text-black font-semibold font-sans grid grid-cols-1 grid-rows-1 gap-4">

                                    <div className="flex items-center">
                                        <label htmlFor="unit" className="mr-2">Unit:</label>
                                        <select
                                            id="unit"
                                            name="unit"
                                            value={formData.unit}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.unitEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {unidades.map((unit, index) => (
                                                <option key={index} value={unit}
                                                        className="whitespace-nowrap">{unit}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="flex items-center">
                                        <label htmlFor="management" className="mr-2">Management:</label>
                                        <select
                                            id="management"
                                            name="management"
                                            value={formData.management}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.managementEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {gestion.map((management, index) => (
                                                <option key={index} value={management}
                                                        className="whitespace-nowrap">{management}</option>
                                            ))}
                                        </select>
                                    </div>


                                </div>

                            </div>
                            {/*El Div de acá arriba cierra todo el 4to formulario*/}
                            <div class="mt-4"></div>
                            {/*El Div de acá abajo abre todo el 5to formulario*/}
                            <div
                                class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">

                                <div class="text-black font-semibold font-sans grid grid-cols-2 grid-rows-2 gap-4">

                                    <div className="flex items-center">
                                        <label htmlFor="area" className="mr-2">Sub Área:</label>
                                        <select
                                            id="area"
                                            name="area"
                                            value={formData.area}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.areaEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {subArea.map((area, index) => (
                                                <option key={index} value={area}
                                                        className="whitespace-nowrap">{area}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="area_ta" className="mr-2">Area TA:</label>
                                        <select
                                            id="area_ta"
                                            name="area_ta"
                                            value={formData.area_ta}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.area_taEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {areaTa.map((area_ta, index) => (
                                                <option key={index} value={area_ta}
                                                        className="whitespace-nowrap">{area_ta}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center">
                                        <label htmlFor="associated_location" className="mr-2">Localidad
                                            Asociada:</label>
                                        <select
                                            id="associated_location"
                                            name="associated_location"
                                            value={formData.associated_location}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 ${formData.associated_locationEmpty ? 'border-red-500' : 'border-gray-300'} border rounded text-green-700 py-1 px-3`}
                                        >
                                            <option value="" className="whitespace-nowrap">Seleccione...</option>
                                            {localidadAso.map((associated_location, index) => (
                                                <option key={index} value={associated_location}
                                                        className="whitespace-nowrap">{associated_location}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>

                            </div>
                            {/*El Div de acá arriba abre todo el 5to formulario*/}

                            <div class="mt-4"></div>
                            {/*El Div de acá abajo pertenece a los botones*/}

                            <div
                                class="shadow-md p-4 border-4 border-green-800 border md:shadow-1xl md:shadow-stone-700 rounded-lg bg-gray-100">
                                <div class="flex justify-center">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:mr-4"
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handlereject}
                                        className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Rechazar
                                    </button>
                                </div>
                            </div>
                            <div className='mt-4'><p>xd</p></div>
                        </form>
                        {/*Fin */}

                    </div>
                </div>
            </div>
        </Layout>
        );
}
export default Formulario;