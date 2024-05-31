"use client";

import db from "../firebase";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { MainContext } from "../context";


export const Test = () => {

  const {masterTaskList} = useContext(MainContext)
 

  const [snapshot, setSnapshot] = useState();
  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [desc, SetDesc] = useState("");
  const [importance, setImportance] = useState(-1);
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState([]);
  const [nameOfTask, setNameOfTask] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [done, setDone] = useState(false)


  useEffect(
    () =>
      onSnapshot(collection(db, "Users"), (snap) => {
        setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setSnapshot(snap);
      }),
    []
  );

  const handleNewUser = async (email, password) => {
    const ref = doc(collection(db, "Users"));
    const payload = {
      email: email,
      password: password,
    };
  };

  const handleNewTask = async (payload) => {
    const ref = doc(collection(db, "Tasks"));
    await setDoc(ref, payload);
  };

  const handleUserDelete = async (id) => {
    const ref = doc(db, "Users", id);
    await deleteDoc(ref);
  };

  return (
    <div className="w-full h-full p-4">
      <h1>
        Hello this is a test where I call all the emails of Users, and their
        passwords:
      </h1>
      <div className=" flex flex-col w-[50%] text-black">
        <input
          className="mb-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email"
        />
        <input
          className="mb-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="password"
        />
        <button
          onClick={() => {
            handleNewUser(email, password);
          }}
          className=" bg-white w-[30%] p-2 mt-2"
        >
          Create!
        </button>
      </div>
      <p>{data[1] ? "" : "Loading..."}</p>

      <div className="mt-2">
        {data &&
          data.map((el, i) => {
            return (
              <div key={`key${i}`} className="w-[90%] justify-between flex ">
                {" "}
                <div className="w-[90%] flex flex-row">
                  <div className="w-[30%]">email: {el.email}</div>{" "}
                  <div className="w-[30%]">password: {el.password}</div>
                  <div> id: {el.id}</div>
                </div>
                <button
                  onClick={() => {
                    handleUserDelete(el.id);
                  }}
                  className="bg-red-500 ml-3 h-fit w-fit my-1 px-2"
                >
                  X
                </button>
              </div>
            );
          })}
      </div>


<div className="w-full h-[50%] flex flex-col">
  <input className="text-black" type="text" onChange={(e) => {SetDesc(e.target.value)}}  placeholder="desc" />
  <input className="text-black" type="text" onChange={(e) => {setImportance(e.target.value)}}  placeholder="importance"/>
  <input className="text-black" type="text" onChange={(e) => {setEndDate(e.target.value)}}  placeholder="endDate"/>
  <input className="text-black" type="text" onChange={(e) => {setStartDate(e.target.value)}}  placeholder="startDate"/>
  <input className="text-black" type="text" onChange={(e) => {setMembers(e.target.value)}}  placeholder="members"/>
  <input className="text-black" type="text" onChange={(e) => {setNameOfTask(e.target.value)}}  placeholder="name"/>
  <input className="text-black" type="text" onChange={(e) => {setTimeLimit(e.target.value)}}  placeholder="timeLimit"/>


<button onClick={()=>{
  handleNewTask({
      description :desc ,
      importance:importance ,
      endDate:endDate ,
      startDate:startDate ,
      members: ["tsogt@gmail.com", "john69"],
      name:nameOfTask ,
      timeLimit:timeLimit ,
      done: false
  
    })
}} className="mt-4">MAKE IT!</button>
</div>

<div className="mt-4">
  {masterTaskList && masterTaskList.map((el)=>{
    return <div>{el.name}</div>
  })}
</div>

    </div>
  );
};


export default Test

 // const Payload = {
  //   description : "",
  //   importance: -1,
  //   endDate: "",
  //   startDate: "",
  //   members: [],
  //   name: "",
  //   timeLimit: "",

  // }