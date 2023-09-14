import Card from "@/bodyComponent/Card";
import Latest from "@/bodyComponent/Latest";
import SessionOne from "@/bodyComponent/SessionOne";
import TopTraiiners from "@/bodyComponent/TopTraiiners";
import React from "react";


const Body = () => {
  const courses = [
    {
      name: "JS",
      details: "Java Script",
      detail1: "suchona basu",
      detail2: "31 july, 5:00PM. 15 classes",
      detail3: "$750/class",
    },
    {
      name: "Python",
      details: "softroniics",
      detail1: "softroniics",
      detail2: "31 july, 5:00PM. 15 classes",
      detail3: "$750/class",
    },
    {
      name: "Flutter",
      details: "softroniics",
      detail1: "softroniics",
      detail2: "31 july, 5:00PM. 15 classes",
      detail3: "$750/class",
    },
    {
      name: "PHP",
      details: "softroniics",
      detail1: "softroniics",
      detail2: "31 july, 5:00PM. 15 classes",
      detail3: "$750/class",
    },
    
  
  ];


  const trainers = [
    {
      name: "Manu",
      domain:"Mern Stack",
      rating:4.5
      
    },
    {
      name: "Sneha",
      domain:"Python",
      rating:4.5
      
    },
    {
      name: "Sajiv",
      domain:"PHP",
      rating:4.3
    },
    
    {
      name: "vismaya",
      domain:"Flutter",
      rating :5
      
    },
    
  
  ];
  return (
    <div>
      <div>
        <div>
          <SessionOne />
        </div>
        
        <div >
          <Card courses={courses} />
        </div>
        
        <div>
          <TopTraiiners  trainers= {trainers} />
        </div>
        <br />
        <br />
        <br />
        <div>
          <Latest courses={courses}/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Body;
