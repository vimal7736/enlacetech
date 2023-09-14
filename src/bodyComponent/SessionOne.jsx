import React from "react";
import "./body.css";
import { Oooh_Baby } from "next/font/google";

const roboto = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});
const SessionOne = () => {
  return (
    <div>
    <div className="card-container">
      <div className="content-inside" >
      <div className="heading-top">Take Your</div>
      <div className="svg-style">
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.67936"
            y1="14.6205"
            x2="12.3059"
            y2="20.6394"
            stroke="#372470"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="16.3408"
            y1="1.44979"
            x2="21.7815"
            y2="12.3836"
            stroke="#372470"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="5.41324"
            y1="4.05234"
            x2="17.0523"
            y2="16.5868"
            stroke="#372470"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div
        style={{
          fontSize: "50px",
          background: "#372470",
          width: "260px",
          borderRadius: "10px",
          color: "#fff",
          padding: "20px",
          backgroundColor: "#6a589f",
        }}
        className={roboto.className}
      >
        Programming{" "}
      </div>
      <div className="heading-top">to the next level </div>
      <div className="curve-under-line" >
        <svg
          width="188"
          height="35"
          viewBox="0 0 188 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M185.653 10.2006C186.459 10.3923 187.268 9.89437 187.459 9.08843C187.651 8.28248 187.153 7.47373 186.347 7.28203L185.653 10.2006ZM1.76943 34.5289C28.8565 18.3428 103.724 -9.28742 185.653 10.2006L186.347 7.28203C103.476 -12.4299 27.8102 15.4732 0.230567 31.9537L1.76943 34.5289Z"
            fill="#372470"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      </div>
      
    </div>

    <div>
      {/* <img src={image1} alt="" /> */}
    </div>


    </div>
  );
};

export default SessionOne;
