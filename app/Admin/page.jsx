"use client";

import { Typography } from "../components/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context";


const Admin = () =>{

    const {userName} = useContext(MainContext)

    return <div>


<div className="p-10 ml-10">
        <Typography variant={"h1"}>{`Hello, ${userName}`}</Typography>
      </div>

    </div>

}

export default Admin