import React from "react";
import "./body.css";

const Card = ({ courses }) => {
  return (
    <div className="card-container">
      <div>
        <div className="session_heading">Trending Now</div>
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

        <div className="main-card-section">
          <div className="svg-move">
            <svg
              width="50"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="80"
                y="80"
                width="80"
                height="80"
                rx="25"
                transform="rotate(-180 80 80)"
                fill="#433471"
              />
              <path
                d="M51.8564 25.312L37.2004 40L51.8564 54.688L47.3444 59.2L28.1444 40L47.3444 20.8L51.8564 25.312Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="main-card">
            {courses.map((course, index) => (
              <div className="card">
                <div>&nbsp; </div>
                <div className="inner-card">
                  &nbsp;
                  <div className="tech-heart">
                    <div className="heart-icon-container">
                      <svg
                        version="1.0"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32px"
                        height="32px"
                        viewBox="-12.8 -12.8 89.60 89.60"
                        enableBackground="new 0 0 64 64"
                        xmlSpace="preserve"
                        fill="#804fb0"
                        stroke="#804fb0"
                        strokeWidth="2.24"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              fill="#231F20"
                              d="M48,6c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0 c0,0-3.971-3.97-3.979-3.961C24.418,7.791,20.418,6,16,6C7.163,6,0,13.163,0,22c0,3.338,1.024,6.436,2.773,9 c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,58.609,30.977,59,32,59s2.047-0.391,2.828-1.172 c0,0,23.93-23.93,24.797-24.797S61.227,31,61.227,31C62.976,28.436,64,25.338,64,22C64,13.163,56.837,6,48,6z M58.714,30.977 c0,0-0.612,0.75-1.823,1.961S33.414,56.414,33.414,56.414C33.023,56.805,32.512,57,32,57s-1.023-0.195-1.414-0.586 c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,28.545,2,25.424,2,22C2,14.268,8.268,8,16,8 c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009 C40.634,9.566,44.134,8,48,8c7.732,0,14,6.268,14,14C62,25.424,60.755,28.545,58.714,30.977z"
                            ></path>
                            <path
                              fill="#231F20"
                              d="M48,12c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1 C58,16.478,53.522,12,48,12z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="tech-name">
                      <h2>{course.name}</h2>
                    </div>
                  </div>
                </div>
                <div className="course-details">
                  <p>{course.details}</p>
                  <p>
                    <b>{course.detail1}</b>
                  </p>
                  <p>{course.detail2}</p>
                  <p>
                    {" "}
                    <i>{course.detail3}</i>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="svg-move">
            {/* Your second SVG element */}
            <svg
              width="50"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="25" fill="#433471" />
              <path
                d="M28.144 54.688L42.8 40L28.144 25.312L32.656 20.8L51.856 40L32.656 59.2001L28.144 54.688Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
