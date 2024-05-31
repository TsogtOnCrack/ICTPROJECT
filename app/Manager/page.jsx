"use client";

import { Typography } from "../components/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context";

import React from "react";
import Dropdown from "./dropdown";
import { TextInput } from "../components/TextInput";

import Managerbox from "./box";
import { useRouter } from "next/navigation";

export const Manager = () => {
  const { userName, data, masterTaskList, handleTaskDelete, handleNewTask } =
    useContext(MainContext);

    const router = useRouter()

  const [snapshot, setSnapshot] = useState();
  // const [data, setData] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [desc, setDesc] = useState("");
  const [importance, setImportance] = useState(-1);
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState([]);
  const [nameOfTask, setNameOfTask] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [done, setDone] = useState(false);
  const [membersToggle, setMembersToggle] = useState(false);

  const handleMemberAdd = (email) => {
    let nextData = [...members];
    const already = nextData.indexOf(email);

    if (already == -1) {
      nextData.push(email);
    }
    if (already > -1) {
      // only splice array when item is found
      nextData.splice(already, 1); // 2nd parameter means remove one item only
    }
    setMembers(nextData);
    console.log(nextData,members, email, already)
  };

  return (
    <div className="w-full h-fit flex flex-col items-center pb-12">
      <div className="p-10 pl-20 w-full flex flex-row justify-between ">
        <Typography variant={"h1"}>{`Hello, ${userName}`}</Typography>
        <div
          className=" cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <svg
            width="50"
            height="57"
            viewBox="0 0 50 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8462 53.7695C23.8462 52.2595 24.8794 51.0354 26.1539 51.0354H44.6154C45.0402 51.0354 45.3846 50.6274 45.3846 50.1241L45.3846 6.37943C45.3846 5.87611 45.0402 5.46808 44.6154 5.46808L26.1539 5.46808C24.8793 5.46808 23.8462 4.24401 23.8462 2.73404C23.8462 1.22408 24.8793 0 26.1539 0H44.6154C47.5892 0 50 2.85617 50 6.37943V50.1241C50 53.6473 47.5892 56.5035 44.6154 56.5035H26.1539C24.8794 56.5035 23.8462 55.2794 23.8462 53.7695Z"
              fill="#FE0505"
            />
            <path
              d="M37.2665 32.3172C37.2665 34.3304 35.8889 35.9625 34.1896 35.9625H19.2481C19.1775 37.2582 19.0892 38.5528 18.9831 39.8459L18.8918 40.9585C18.7434 42.7675 17.122 43.8509 15.7386 43.0654C10.1142 39.872 5.02259 35.502 0.708561 30.1656L0.616383 30.0516C-0.205461 29.035 -0.205461 27.4318 0.616383 26.4152L0.708564 26.3011C5.02259 20.9648 10.1142 16.5948 15.7386 13.4013C17.122 12.6158 18.7434 13.6992 18.8918 15.5082L18.9831 16.6208C19.0892 17.9139 19.1775 19.2086 19.2481 20.5042L34.1896 20.5042C35.8889 20.5042 37.2665 22.1363 37.2665 24.1496V32.3172Z"
              fill="#FE0505"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="h-[350px] w-[700px] p-9 rounded-lg border-2 border-solid bg-black border-white flex flex-col flex-wrap items-start space-y-5">
          <div className="h-1/5 w-6/6 flex flex-row flex-wrap items-center">
            <Typography variant={"h3"}>{"taskname"}</Typography>
            <input
              onChange={(e) => {
                setNameOfTask(e.target.value);
              }}
              className="m-5 h-[25px] w-[400px] items-center bg-black text-white border-b border-white"
            ></input>
          </div>

          <div className="h-1/5 w-6/6 flex flex-row flex-wrap items-center">
            <Typography variant={"h3"}>{"desc"}</Typography>
            <textarea
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="ml-8 h-[70px] w-[400px] rounded-lg border border-solid border-white flex flex-col flex-wrap items-center bg-black text-white"
            />
          </div>

          <div className="h-2/5 w-6/6 flex flex-row flex-wrap items-center">
            <Typography variant={"h3"}>{"startdate"}</Typography>
            <input
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              className="m-5 h-[25px] w-[100px] items-center bg-black text-white border-b border-white"
            ></input>
            <Typography variant={"h3"}>{"deadline"}</Typography>
            <input
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              className="m-5 h-[25px] w-[100px] items-center bg-black text-white border-b border-white"
            ></input>
            <div
              onClick={() => {
                setMembersToggle(!membersToggle);
              }}
              className=" px-5 py-3 cursor-pointer hover:shadow-inner  hover:shadow-[#FFFFFF] bg-green-400 rounded-lg"
            >
              Members
            </div>
          </div>
        </div>

        {membersToggle && (
          <div className=" w-[600px] overflow-scroll h-[350px] bg-gray-200 ml-6 rounded-lg">
            {data &&
              data.map((el) => {
                return (
                  <div className="flex flex-row justify-between text-black bg-white m-1 rounded-md p-3">
                    {el.email}{" "}
                    <input
                      onClick={() => {
                        handleMemberAdd(el.email);
                      }}
                      type="checkbox"
                    />{" "}
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <div
        className="p-3 bg-blue-400 w-[200px] flex justify-center items-center rounded-lg m-4"
        onClick={() => {
          handleNewTask({
            description: desc,
            importance: importance,
            endDate: endDate,
            startDate: startDate,
            members: members,
            name: nameOfTask,
            timeLimit: timeLimit,
            done: false,
          });
        }}
      >
        CREATE!
      </div>

      <div className="">
        {masterTaskList &&
          masterTaskList.map((el) => {
            return (
              <div className="w-[90%] px-4 items-center h-[40px] justify-between bg-white flex flex-row rounded-lg mt-3 text-black">
                <Typography className="min-w-[300px]" variant={"h3"}>
                  {el.name}
                </Typography>
                <div className="ml-12 "> {el.description}</div>

                <div className="flex flex-row">
                  {el.members.map((el) => {
                    return <div className="ml-2">{el}</div>;
                  })}
                </div>

                <div
                  onClick={() => {
                    handleTaskDelete(el.id);
                  }}
                  className="text-red-500 cursor-pointer"
                >
                  X
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Manager;

{
  /* <div className="w-full h-[50%] flex flex-col">
  <input className="text-black" type="text" onChange={(e) => {setDesc(e.target.value)}}  placeholder="desc" />
  <input className="text-black" type="text" onChange={(e) => {setImportance(e.target.value)}}  placeholder="importance"/>
  <input className="text-black" type="text" onChange={(e) => {setEndDate(e.target.value)}}  placeholder="endDate"/>
  <input className="text-black" type="text" onChange={(e) => {setStartDate(e.target.value)}}  placeholder="startDate"/>
  <input className="text-black" type="text" onChange={(e) => {setMembers(e.target.value)}}  placeholder="members"/>
  <input className="text-black" type="text" onChange={(e) => {setNameOfTask(e.target.value)}}  placeholder="name"/>
  <input className="text-black" type="text" onChange={(e) => {setTimeLimit(e.target.value)}}  placeholder="timeLimit"/>
 */
}
