import {
  faArrowLeft,
  faArrowsRotate,
  faPause,
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Timer() {
  const [toggleHideTimer, setToggleHideTimer] = useState(true);
  const [playTimer, setPlayTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const toggleTimer = () => {
    console.log("clicked");
    setPlayTimer((prev) => !prev);
  };

  useEffect(() => {
    let timer;
    if (playTimer) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [playTimer]);



  
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div className="flex  btn-sm focus:bg-transparent hover:bg-transparent border-none active gap-x-0 px-1 transition-all ease-in">
      <button
        className="btn btn-sm btn-neutral capitalize text-mainColor focus:bg-transparent hover:bg-transparent border-none  px-2 mr-1 "
        onClick={() => setToggleHideTimer(!toggleHideTimer)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="alarm-clock"
          className={`svg-inline--fa fa-alarm-clock  absolute transition-opacity left-3
            ${
              toggleHideTimer === true
                ? "opacity-100 block"
                : "opacity-0 hidden"
            }

        `}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1L160 25.4zM256 112a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 400c53.2 0 102.1-18.6 140.5-49.5L439 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-42.5-42.5c31-38.4 49.5-87.3 49.5-140.5C480 164.3 379.7 64 256 64S32 164.3 32 288c0 53.2 18.6 102.1 49.5 140.5L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l42.5-42.5c38.4 31 87.3 49.5 140.5 49.5zM497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4L497.1 146.4zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24V288c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V184z"
          ></path>
        </svg>

        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`text-sm 
            ${toggleHideTimer === true ? "opacity-0" : "opacity-100"}
            `}
        />
      </button>

   
        <div
            className={` gap-x-1 transition-all duration-300 ease-in-out transform 
            ${toggleHideTimer ? "invisible hidden scale-95 pointer-events-none" : "visible flex scale-100"}
            `}
        >
          <span className="btn btn-sm btn-neutral capitalize focus:bg-transparent hover:bg-transparent border-none px-1  ">
            <FontAwesomeIcon
              onClick={toggleTimer}
              icon={playTimer ?  faPauseCircle:  faPlayCircle}
              className="text-[17px] text-mainColor mr-1"
            />
            <span className="text-whiteText">{formatTime(seconds)}</span>
          </span>
  
          <span className="btn btn-sm btn-neutral capitalize focus:bg-transparent hover:bg-transparent border-none"
              onClick={()=>setSeconds(0)}
          >
           <FontAwesomeIcon
              icon={faArrowsRotate}
              className="text-[17px] text-mainColor "
            />
          </span>
        </div>
   
    </div>
  );
}

export default Timer;
