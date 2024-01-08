"use client"

import React from "react";

import LowerBar from "./components/LowerBar";
import SideBar from "./components/SideBar";

export default function Home(){


    return(
        <div>
            <SideBar></SideBar>
            <LowerBar></LowerBar>
        </div>
    )
}