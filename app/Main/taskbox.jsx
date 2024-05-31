import React from 'react';
import { Typography } from "../components/Typography"
// import Checkbox from './checkbox';

const Taskbox = ({task = "Name of Task",el, desc = "Description of Task:", date = "1/1/1", setDone}) => {
  return (
    <div className=" w-5/6 h-1/5 p-5 rounded-lg bg-gray-700 justify-self-auto flex flex-col flex-wrap items-start justify-between space-y-10;">
      <div className="w-6/6 h-1/5 p-3 justify-self-auto flex flex-row flex-wrap items-start justify-between">
        <Typography variant={"h3"}>{task}</Typography>
        <input checked = {el.done ? true : false} onChange={(e)=>{setDone(el.id) }} type="checkbox"/>
        <div className="flex flex-col py-4 justify-items-start items-align space-y-5">
        <Typography variant={"default"}>{desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
        <Typography variant={"default"}>{date}  </Typography>
        </div> 
      </div>
    </div>
  );
};  
 
export default Taskbox;