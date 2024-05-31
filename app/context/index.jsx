"use client";

import { createContext, use, useEffect, useState } from "react";
// import { addDoc, collection, doc, setDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { userAgent } from "next/server";

import db from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const MainContext = createContext();

export const MainContextPrv = ({ children }) => {
  const [snapshot, setSnapshot] = useState();
  const [data, setData] = useState([]);

  const [masterTaskList, setMasterTaskList] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userName, setUserName] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("USERNAME"));
    if (localStorage.getItem("USERNAME")) {
      setUserName(localStorage.getItem("USERNAME"));
      console.log(
        "changed state from local storage",
        localStorage.getItem("USERNAME")
      );
    }
  }, []);



  useEffect(
    () =>
      onSnapshot(collection(db, "Users"), (snap) => {
        setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setSnapshot(snap);
      }),
    []
  );

  useEffect(() => {
    masterTaskList &&
      masterTaskList.map((el) => {
        handleEditTaskData(el.id, el);
      });
  }, [masterTaskList]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Tasks"), (snap) => {
        setMasterTaskList(
          snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setSnapshot(snap);
      }),
    []
  );

  const handleTaskDelete = async (id) => {
    const ref = doc(db, "Tasks", id);
    await deleteDoc(ref);
  };

  const handleNewUser = async (email, password) => {
    const ref = doc(collection(db, "Users"));
    const payload = {
      email: email,
      password: password,
    };

    await setDoc(ref, payload);
  };
  const handleNewTask = async (payload) => {
    const ref = doc(collection(db, "Tasks"));
    await setDoc(ref, payload);
  };

  const handleUserDelete = async (id) => {
    const ref = doc(db, "Users", id);
    await deleteDoc(ref);
  };

  // const handleEditUserData = async (id, newData) => {
  //   const ref = doc(db, "Users", id);

  //   const payload = newData;
  //   setDoc(ref, payload);
  // };

  const handleEditTaskData = async (id, newData) => {
    const ref = doc(db, "Tasks", id);
    const payload = newData;
    setDoc(ref, payload);
  };

  return (
    <MainContext.Provider
      value={{
        tasks,
        setTasks,
        userName,
        masterTaskList,
        setMasterTaskList,
        setUserName,
        masterTaskList,
        handleTaskDelete,
        data,
        handleNewTask
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextPrv;
