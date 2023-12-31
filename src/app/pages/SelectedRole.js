"use client"

import React from "react";

export default function SelectedRole(){


    return(
        <div>
            <div className="space-y-8 flex justify-center flex-col items-center mt-20">
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
                </div>
                <div className="">
                    <div className="w-52 text-center">
                        <img src="/director_central.png" alt=""/>
                        <p className="">DIRECTOR CENTRAL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}