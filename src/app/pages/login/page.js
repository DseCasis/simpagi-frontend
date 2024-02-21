"use client"

import React, { useState } from "react";
import FormLogin from "/src/app/components/auth/Formlogin";
import Alert from "/src/app/alerts/alert";
import Layout from "@/app/layout/Layout";

export default function Auth({userLogin}) {
  const [isLogin, setIsLogin]=useState(true);
  const [logged, setLogged ]= useState(false)

  const handleIsLogin=()=>{
    setIsLogin(!isLogin);
  }

  const handleErrorLogin =()=>{
    setLogged(!logged)
    setTimeout(()=>{
      setLogged(false)
    },5000)
  }

  return (
    <Layout>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900">
        <div className="w-2/4 h-5/6 flex justify-center border-2 rounded-md border md:shadow-2xl md:shadow-stone-500 bg-gray-200">
              {isLogin ? (
                  <FormLogin handleIsLogin={handleIsLogin} userLogin={userLogin} handleErrorLogin={handleErrorLogin}/>
              ) : (
                  <FormRegister handl_eIsLogin={handleIsLogin} isLogin={handleIsLogin}/>
              )}
              {logged && (
                  <Alert>
                      <p className="font-bold">Mensaje Informativo</p>
                      <p className="text-sm">Las credenciales no son válidas</p>
                  </Alert>
              )}
          </div>
      </div>
    </Layout>  
  )
}