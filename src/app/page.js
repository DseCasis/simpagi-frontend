"use client"

import React from "react";
import Topbar from "./components/Topbar";
import LowerBar from "./components/LowerBar";
export default function Home() {


    return (
        <div>
            <header><Topbar></Topbar></header>
            <footer><LowerBar></LowerBar></footer>
        </div>
    )
}