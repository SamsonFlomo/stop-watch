import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import  Display  from "./display.js";
import TimeSetter from "./timeSetter.js";
import AlarmSound from "./assets/alarm.mp3";
import { changeBackground } from "./utils.js"



const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
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
    timerRunning: false 
  });
  
  
  useEffect( () => {
    let timerId = Number;
    if (!displayState.timerRunning) return;
    
    if (displayState.timerRunning) {
      timerId = window.setInterval(decrementDisplay, 1000);
    };
    
    return () => {
      window.clearInterval(timerId);
    };
  }, [displayState.timerRunning]);
  
  
  useEffect(() => {
    if (displayState.time === 0) {
      const audio = document.getElementById("beep");
      audio.currentTime = 1;
      audio.play().catch((err) => console.log(err));
      
      setDisplayState((prev) => ({
        ...prev,
        timeType: prev.timeType === "Session" ? "Break" : "Session",
        time: prev.timeType === "Session" ? breakTime : sessionTime,
      }));
    };
  }, [displayState, breakTime, sessionTime]);
  
  
  useEffect(() => {
    let interval = Number;
    
    interval = window.setInterval(changeBackground, 10000);
    
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  
  

  
  
  const reset = () => {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setDisplayState({
      time: defaultSessionTime,
      timeType: "Session",
      timerRunning: false 
    });
    
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };
  
  const startStop = () => {
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning
    }));
  };
  
  const decrementDisplay = () => {
    setDisplayState((prev) => ({
      ...prev,
      time: prev.time -1
    }));
  };
  
  const changeBreakTime = time => {
    if (display.timerRunning) return;
    setBreakTime(time);
  };
  
  const changeSessionTime = time => {
    if (display.timerRunning) return;
    setSessionTime(time);
    setDisplayState({
      time: time,
      timeType: "Session",
      timerRunning: false
    });
  };
  
  
  
  
  
  return (
    <div className="App flex">
      <h1>25 + 5 Clock</h1>
      
      
        <div class="clock-timers">
          <div className="break sm-bg">
            <h4 id="break-label">Break Length</h4>
            
            <TimeSetter 
            time={breakTime}
  	    setTime={changeBreakTime}
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
  	    setTime={changeSessionTime}
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
