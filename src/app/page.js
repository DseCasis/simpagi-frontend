"use client"

import React from "react";
import Button from "@mui/material/Button";
import Menu from "@/app/layout/Menu";
import RecoverPassword from "./pages/RecoverPassword";
import SelectedRole from "./pages/SelectedRole";
import UserLogin from "./pages/UserLogin";
import Topbar from "./components/Topbar";

export default function Home(){


    return(
        <div>
            <UserLogin></UserLogin>
        </div>
    )
}