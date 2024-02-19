"use client"

import {BrowserRouter, Routes as RouteGroup, Route, Link} from "react-router-dom";
import Auth from "@/app/pages/login/page";
import UserList from "@/app/pages/userList/Page";
import {useEffect, useState} from "react";
import Formulario from "@/app/pages/formulario/page";
import Layout from "@/app/layout/Layout"
import Dashboard from "@/app/pages/dashboard/page";


export default function home() {

    const [isLogged, setIsLogged]=useState(false)

    useEffect(()=>{
        let loggedUser = window.localStorage?.getItem('loggedUser')
        loggedUser= JSON.parse(loggedUser)
        console.log(loggedUser)
        if(loggedUser!==null){
            setIsLogged(true)

        }else{
            setIsLogged(false)
        }
    },[])

    const userLogin=()=>{
        setIsLogged(!isLogged)
    }

    return (
        <div>
            <BrowserRouter>
                <RouteGroup>
                    <Route path='/' element={<Auth userLogin={userLogin}/>}/>
                    <Route path='/personal' element={<UserList/>}/>
                    <Route path='/agregarPersonal' element={<Formulario/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </RouteGroup>
            </BrowserRouter>
        </div>
    );
}
