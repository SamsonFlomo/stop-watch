import { Images } from "./images.js";


export const DisplayState = {
  time: 0,
  timeType: "Session" | "break",
  timeRunning: true,
};

export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  return `
    ${ minutes < 10 ? "0" + minutes.toString() : minutes}:${
      seconds < 10 ? "0" + seconds.toString() : seconds
      }
  `;
};

export const changeBackground = (id = "body") => {
    const body = document.getElementById(id);
    const randomNum = Math.floor(Math.random() * 7);
    
    if(body) {
      body.style.backgroundImage = `url(${Images[randomNum]})`;
    };
  };

