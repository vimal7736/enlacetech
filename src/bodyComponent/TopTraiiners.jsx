import React from "react";
import "./body.css";
import img from "../../public/1.png";
import rating from "../../public/rating.png";

import Image from "next/image";

const TopTraiiners = ({ trainers }) => {
  return (
    <div className="card-container">
      <div>
        <div className="session_heading">Top rated Trainers</div>
        <svg
          style={{ marginLeft: "190px", marginBottom: "34px" }}
          width="38"
          height="15"
          viewBox="0 0 88 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.7917 4.78324C87.3319 4.89826 87.8631 4.55359 87.9781 4.01342C88.0931 3.47324 87.7484 2.94211 87.2083 2.82709L86.7917 4.78324ZM1.47166 14.8818C14.0187 8.17043 48.7668 -3.31304 86.7917 4.78324L87.2083 2.82709C48.6235 -5.38837 13.3939 6.23646 0.528339 13.1182L1.47166 14.8818Z"
            fill="#372470"
          />
        </svg>
        <br />
        <br />
        <div className="main-card-section">
          <div>
            <svg
              width="25"
              height="39"
              viewBox="0 0 25 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5005 4.81207L9.84449 19.5001L24.5005 34.1881L19.9885 38.7001L0.788488 19.5001L19.9885 0.300072L24.5005 4.81207Z"
                fill="#433471"
              />
            </svg>
          </div>
          <div className="trainerscard-main" style={{ display: "flex" }}>
            {trainers.map((trainer, index) => (
              <div key={index} className="trainercard">
                <div className="course-details">
                  <Image src={img} width={200} height={220} style={{marginTop:"-30px"}} alt="picture" />
                </div>
                <br />
                <div className="trainercard1">
                  <p style={{ fontWeight: "bolder" }}>{trainer.name}</p>
                  <p>{trainer.domain}</p>
                  <Image 
                  src={rating}
                  style={{
                    width:"90px",
                    height:"20px",
                    marginTop:"-40px"
                  }}/>
                </div>
              </div>
            ))}
          </div>

          <div>
            <svg
              width="25"
              height="40"
              viewBox="0 0 25 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.325195 34.688L14.9812 20L0.325195 5.31205L4.83719 0.800049L24.0372 20L4.83719 39.2001L0.325195 34.688Z"
                fill="#433471"
              />
            </svg>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TopTraiiners;
