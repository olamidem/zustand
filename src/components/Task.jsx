import React from "react";
import "./Task.css";
import classNames from "classnames";
import { useStore } from "../store";


export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="burromwrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
