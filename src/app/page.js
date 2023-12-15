"use client"


import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@/app/layout/Menu";

export default function Home(){


    return(
        <div>
            <Menu></Menu>
            <div className="flex justify-center items-center mt-20">
                <div className="grid grid-cols-3 gap-12">
                    <div className="w-52 text-center">
                        <img src="/investigacion.png" alt=""/>
                        <p className="">INVESTIGADOR</p>
                    </div>
                    <div className="w-52 text-center">
                        <img src="/director.png" alt=""/>
                        <p className="">DIRECTOR</p>
                    </div>
                    <div className="w-52 text-center">
                        <img src="/responsable.png" alt=""/>
                        <p className="">RESPONSABLE</p>
                    </div>
                    <div className="w-52 text-center">
                        <img src="/director_central.png" alt=""/>
                        <p className="">DIRECTOR CENTRAL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}