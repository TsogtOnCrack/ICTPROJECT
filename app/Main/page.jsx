"use client";

// const nextData = [...userData];
//     const targetPerson = nextData.find((a) => a.name === response.name);
//     targetPerson.skill = response.skill;
//     setUserData(nextData);

import Title from "./title";
import { Typography } from "../components/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context";
import { useRouter } from "next/navigation";

export const Main = () => {
  const router = useRouter()
  const { masterTaskList, setMasterTaskList, userName } =
    useContext(MainContext);
  const handleSetDone = (initial, targetID) => {
    const nextData = [...masterTaskList];
    const targetPerson = nextData.find((a) => a.id === targetID);
    targetPerson.done = !initial;
    setMasterTaskList(nextData);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      <div className="p-10 pl-20 w-full flex flex-row justify-between ">
        <Typography variant={"h1"}>{`Hello, ${userName}`}</Typography>
        <div className=" cursor-pointer" onClick={()=>{
          router.push("/");
        }}>
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

      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] ">
          <Typography className="p-10 ml-20" variant={"h1.5"}>
            To do:
          </Typography>

          {masterTaskList &&
            masterTaskList.map((el) => {
              if (!el.done) {
                return (
                  <div className="w-[100%] min-h-[180px] h-fit bg-[#313540] rounded-[20px] mb-8 py-5 px-12 flex justify-between flex-col">
                    <div className="flex flex-row">
                      <div className="flex flex-col w-[90%]">
                        <Typography className="mb-3" variant={"h2"}>
                          {el.name}
                        </Typography>
                        <Typography>{el.description}</Typography>
                      </div>

                      <div className="w-[10%] flex justify-center items-center">
                        <input
                          type="checkbox"
                          onClick={() => {
                            handleSetDone(el.done, el.id);
                          }}
                          checked={el.done ? true : false}
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <Typography variant={"lightMicro"}>
                        {el.endDate}
                      </Typography>

                      <div className="flex flex-row">
                        {el.members &&
                          el.members.map((e) => (
                            <Typography className="mx-1" variant={"lightMicro"}>
                              {e}
                            </Typography>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              }
            })}

          <Typography className="p-10 ml-20" variant={"h1.5"}>
            Done:
          </Typography>

          {masterTaskList &&
            masterTaskList.map((el) => {
              if (el.done) {
                return (
                  <div className="w-[100%] min-h-[180px] h-fit bg-[#313540] rounded-[20px] mb-8 py-5 px-12 flex justify-between flex-col">
                    <div className="flex flex-row">
                      <div className="flex flex-col w-[90%]">
                        <Typography className="mb-3" variant={"h2"}>
                          {el.name}
                        </Typography>
                        <Typography>{el.description}</Typography>
                      </div>

                      <div className="w-[10%] flex justify-center items-center">
                        <input
                          type="checkbox"
                          onClick={() => {
                            handleSetDone(el.done, el.id);
                          }}
                          checked={el.done ? true : false}
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <Typography variant={"lightMicro"}>
                        {el.endDate}
                      </Typography>

                      <div className="flex flex-row">
                        {el.members &&
                          el.members.map((e) => (
                            <Typography className="mx-1" variant={"lightMicro"}>
                              {e}
                            </Typography>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
