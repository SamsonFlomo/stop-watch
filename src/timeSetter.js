import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TimeSetterProps = {
  time: Number,
  setTime: (time: Number) => null,
  min: Number,
  max: Number,
  interval: Number,
  type: "break" | "session",
};

function TimeSetter (TimeSetterProps) {
  const { time, setTime, min, max, interval, type } = TimeSetterProps;
  
  return (
    <div className="hold-btn">
      <button onClick={() => (time > min ? setTime(time - interval) : null)}
       	      id={`${type}-decrement`}
       	      className="border-btn"> 
       	   <FaArrowDown />
      </button>
      
      <span id={`${type}-length`}>{time / interval}</span>
      
      <button onClick={() => (time < max ? setTime(time + interval) : null)}
       	      id={`${type}-increment`}
       	      className="border-btn"> 
       	   <FaArrowUp />
      </button>
    </div>
  );
};

export default TimeSetter;
