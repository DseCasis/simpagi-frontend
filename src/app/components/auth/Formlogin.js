import {useForm} from "react-hook-form";
import {login} from "/src/app/services/AuthService";
import {setToken} from "/src/app/services/PrivateServies";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin({handleIsLogin, userLogin,handleErrorLogin}){
    const {register, formState:{errors}, handleSubmit}=useForm();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        login(data).then(response=>{
            window.localStorage.setItem('loggedUser', JSON.stringify(response.token))
            setToken(response.token)
            userLogin();
            redirect();

        }).catch(error=> {
            console.log(error)
            handleErrorLogin()
        })
    }

    const redirect = () => {
        navigate('/users'); // Redirect to the specified route
    }

    return (
            <div className="w-full h-full flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200 ">
                <div className="w-1/2 flex flex-col p-12 space-y-2">
                    <h1 className="flex-1 text-xl text-center font-semibold pb-0">
                        Sistema Simplificado de Planificación y Gestión de la investigación
                    </h1>
                    <div class="px-8">
                        <img src="/logo.png" alt="Logo" />
                    </div>

                    <form
                        className="w-full space-y-4 flex flex-col justify-center pb-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div
                            className="px-6 mb-4 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                            {errors.email?.type === 'required' &&
                                <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                            <input
                                {...register('email', {
                                    required: true
                                })}
                                type="text"
                                placeholder="Correo Electronico"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                        </div>
                        <div
                            className="px-6 mt-6 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                            {errors.password?.type === 'required' &&
                                <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                            <input
                                {...register('password', {
                                    required: true
                                })}
                                type="password"
                                placeholder="Contraseña"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign
                                In
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                        <span onClick={() => handleIsLogin()}
                              className="hover:underline cursor-pointer hover:text-red-600">Regístrese para obtener una cuenta
                    </span>
                        </div>
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
    );
}