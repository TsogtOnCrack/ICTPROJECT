"use client";

import React from "react";
import "./style.css";
import { TextInput } from "../components/TextInput";
import { Typography } from "../components/Typography";
import db from "../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { MainContext } from "../context";
import { useContext } from "react";

const SignUp = () => {
  const { setUserName } = useContext(MainContext);
  const router = useRouter();
  const [snapshot, setSnapshot] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleNewUser = async (email, password) => {
    const ref = doc(collection(db, "Users"));
    const payload = {
      email: email,
      password: password,
      admin: false,
    };

    await setDoc(ref, payload);

    localStorage.setItem("USERNAME", email);
    setUserName(email);
    router.push("/Main");
  };

  const editEmail = (changedValue) => {
    setEmail(changedValue);
    // setAuthenticated(true);
  };

  const editPassword = (changedValue) => {
    setPassword(changedValue);
    // setAuthenticated(true);
  };

  const emailPackage = {
    var: email,
    function: editEmail,
  };
  const passwordPackage = {
    var: password,
    function: editPassword,
  };

  return (
    <div className="flex flex-col items-center bg-[#FFE400] min-h-screen justify-center w-full">
      <Typography className={"text-black mb-24"} variant={"h1"}>
        Sign Up
      </Typography>

      <TextInput pack={emailPackage} title = "enter email" color={"black"} className="mb-8" />

      <TextInput pack={passwordPackage} title = "enter password" color={"black"} />

      <Typography
        onClick={() => {
          handleNewUser(email, password);
        }}
        className={` cursor-pointer text-black mt-20`}
        variant={"h2"}
      >
        Let's go
      </Typography>
    </div>
  );
};

export default SignUp;
