import React from "react";
import "./layout.css"; // Import a separate CSS file for styling
import search from "../../public/search.svg";
import Image from "next/image";
import { FaHeadset } from "react-icons/fa";

const Header = () => (
  <div className="header">
    <div className="header-container">
      <div className="logo">LOGO</div>
      <div className="search">
        <input type="text" placeholder="Search" style={{ border: "none" }} />
        <Image
          style={{ height: "20px", width: "20px" , marginLeft:"-40px" ,marginBottom :"-5px" }}
          src={search}
          alt="search"
        />
      </div>
      <div className="buttons">
        <span> Im a </span>
        <button className="trainer-button">Trainer</button>
        <button className="learner-button">Learner</button>
      </div>
      <div className="head-signIn">
        <div className="headset">
          <svg
            width="34"
            height="31"
            viewBox="0 0 34 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0003 3.00006C7.40034 2.20006 6.667 15.6667 7.50034 22.5001C7.00043 22.5001 3.00024 23.5001 1.50028 20.0001C-0.099718 13.6001 3.50028 11.6667 5.50028 11.5001C6.16697 7.83339 9.50033 0.600059 17.5003 1.00006C25.5002 2.60006 28.1669 8.66673 28.5003 11.5001C33.5003 11.0001 34.5003 18.0001 32.5003 21.0001C30.5003 24.0001 26.5003 23.5001 26.5003 21.5001C26.5003 19.5001 29.0003 4.00006 17.0003 3.00006Z"
              fill="#372470"
              stroke="#372470"
            />
            <rect x="15" y="27" width="6" height="4" rx="2" fill="#372470" />
            <path d="M6.5 24C6.5 26 8 29.5 13.5 29.5" stroke="#372470" />
          </svg>
        </div>
        <div className="signin">
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
