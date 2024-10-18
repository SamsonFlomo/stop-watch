import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import  Display  from "./display.js";
import TimeSetter from "./timeSetter.js";
import AlarmSound from "./assets/alarm.mp3";




const defaultBreakTime = 5 * 60;
const defaultSessionTime = 5 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;
const display = { ...Display };

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState({
    time: sessionTime,
    timeType: "Session",
    timeRunning: false 
  });
  
  const reset = () => {
    console.log("reset");
  };
  
  const startStop = () => {
    console.log("start-stop");
  };
  
  return (
    <div className="App flex">
      <h1>25 + 5 Clock</h1>
      
      
        <div class="clock-timers">
          <div className="break sm-bg">
            <h4 id="break-label">Break Length</h4>
            
            <TimeSetter 
            time={breakTime}
  	    setTime={setBreakTime}
  	    min={min}
  	    max={max}
  	    interval={interval}
  	    type="break"
            />
            
          </div>
          
          
          <div className="session sm-bg">
            <h4 id="session-label">Session Length</h4>
            
            <TimeSetter 
            time={sessionTime}
  	    setTime={setSessionTime}
  	    min={min}
  	    max={max}
  	    interval={interval}
  	    type="session"
            />
            
          </div>
          
          <Display 
          displayState={displayState} 
          reset={reset}
          startStop={startStop}
          />
        
      </div>
      
      
      <audio id="beep" src={AlarmSound} />
      
      
      <footer>
        <address>By: Samson Flomo</address>
      </footer>
      
      
    </div>
  );
}

export default App;
