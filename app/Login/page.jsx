"use client";

import { Typography } from "../components/Typography";
import { TextInput } from "../components/TextInput";
import { useRouter } from "next/navigation";

import db from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { MainContext } from "../context";
// import Link from "next/link";

export const LogIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [authenticated, setAuthenticated] = useState(true);

  const { setUserName } = useContext(MainContext);

  useEffect(
    () =>
      onSnapshot(collection(db, "Users"), (snap) => {
        setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  const editEmail = (changedValue) => {
    setEmail(changedValue);
    setAuthenticated(true);
  };

  const editPassword = (changedValue) => {
    setPassword(changedValue);
    setAuthenticated(true);
  };

  const emailPackage = {
    var: email,
    function: editEmail,
  };
  const passwordPackage = {
    var: password,
    function: editPassword,
  };

  const checkLogIn = (d, em, pas) => {
    let ans = false;
    let admin = false;
    d.map((el) => {
      if (el.email == em) {
        if (el.password == pas) {
          ans = true;
        }
        if (el.admin) {
          admin = true;
        }
      }
    });

    setAuthenticated(ans);
    if (ans) {
      localStorage.setItem("USERNAME", em);
      setUserName(em);
      if (admin) {
        router.push("/Manager");
      } else {
        router.push("/Main");
      }
    }
    console.log(ans);
    return ans;
  };

  return (
    <div className="w-screen h-screen duration-200 bg-[#12557A] flex justify-center items-center">
      <div className="w-fit h-fit flex flex-col items-center">
        <Typography
          className={authenticated ? "text-white" : "text-[#FE0505]"}
          variant={"h1"}
        >
          Log in
        </Typography>

        <div className="my-16 flex flex-col">
          <Typography
            className={`text-[#FE0505] mb-8 ${
              authenticated ? "invisible" : "visible"
            }`}
            variant={"micro"}
          >
            your password or email is wrong...
          </Typography>

          <TextInput
            title="enter email"
            pack={emailPackage}
            color={authenticated ? "white" : "red"}
            className="mb-8"
          />
          <TextInput
            title="enter password"
            pack={passwordPackage}
            color={authenticated ? "white" : "red"}
          />
        </div>

        <Typography
          onClick={() => {
            checkLogIn(data, email, password);
          }}
          className={` cursor-pointer ${
            authenticated ? "text-white" : " text-[#D9D9D9]"
          }`}
          variant={"h2"}
        >
          Let's go
        </Typography>
      </div>
    </div>
  );
};

export default LogIn;
