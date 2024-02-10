"use client"

import React from "react";
import { TabsDefault } from "./components/Topbar";
import { SimpleFooter } from "./components/LowerBar";
import { DefaultSidebar} from "./components/SideBar";


export default function Home() {


    return (
        <div>
            <header><TabsDefault></TabsDefault></header>
            <DefaultSidebar></DefaultSidebar>
            <footer><SimpleFooter></SimpleFooter></footer>
        </div>
    )
}
