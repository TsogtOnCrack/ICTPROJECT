import React from "react";
import Taskbox from "./taskbox";
import { Typography } from "../components/Typography";
import { useContext } from "react";
import { MainContext } from "../context";

const Title = ({ d = false, title = "Title" }) => {
  const {tasks, setTasks} = useContext(MainContext)
  const DATA = tasks
  const handleTickBoxChange = (id) => {
    // console.log("doing something", id)
    DATA.map((el) => {
      if (el.id == id) {
        el.done = el.done ? false : true;
      }
    });

    setTasks(DATA);
  };

  return (
    <div className="w-full h-full p-3 flex flex-col items-start justify-self-start">
      <div className="pl-40 pb-5">
        <Typography variant={"h2"}> {title}</Typography>
      </div> 
      <div className="w-full h-full flex flex-wrap flex-col items-center justify-between space-y-5">
        {tasks.map((el, i) => {
          if (d && el.done) {
            return (
              <div key={i}>
                <Taskbox
                  setDone={handleTickBoxChange}
                  el={el}
                  task={el.title}
                  desc={el.desc}
                  date={el.dateDue}
                />
              </div>
            );
          }

          if (!d && !el.done) {
            return (
              <div key={i}>
                <Taskbox
                  setDone={handleTickBoxChange}
                  el={el}
                  task={el.title}
                  desc={el.desc}
                  date={el.dateDue}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Title;
