import React from "react";
import { DisplayState, formatTime } from "./utils.js"
import { FaPause, FaPlay, FaUndo } from "react-icons/fa"; 


const DisplayProps = {
  displayState: DisplayState,
  reset: () => null,
  startStop: (displayState = DisplayState) => null,
};

const Display = (DisplayProps) => {
   const { displayState, reset, startStop } = DisplayProps;
   return(
     <div className="display sm-bg">
       <h4 id="timer-label">{ displayState.timeType }</h4>
       
       <span id="time-left" 
       style={{"color" : `${displayState.timerRunning ? "red" : "white"}`}}>
          { formatTime(displayState.time) }
       </span>
       
       <div className="hold-btn">
          <button id="start_stop" onClick={ () => startStop(displayState)}>
             {displayState.timerRunning ? <FaPause /> : <FaPlay /> }
          </button>
          
          <button id="reset" onClick={reset}> 
             <FaUndo />
          </button>
       </div>
     </div>
   );
};



export default Display;
