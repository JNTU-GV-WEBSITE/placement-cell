import React from "react";
import "../PC.css";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Training & Placement Cell</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <br />
          {/* Profile description */}
          <Typography>
            The Training and Placement Cell (T&P Cell) is an integral part of any 
            educational institution, acting as a vital bridge between students and the 
            professional world. This cell is dedicated to fostering strong connections with 
            industries, organizing various training programs, and preparing students for 
            successful careers. Through regular interactions with industry professionals, 
            the T&P Cell gauges industry expectations and conducts workshops to enhance students' 
            technical, soft, and communication skills. It plays a pivotal role in arranging internships, 
            industrial visits, and placement drives, ensuring students gain practical exposure and 
            secure suitable job opportunities. Additionally, the T&P Cell provides career guidance, 
            assists with resume building, and maintains records of placements and alumni success stories, 
            contributing to the institution's overall reputation and the holistic development of students.
            <Typography><br />
            The T&P Cell's commitment extends beyond placements; it strives to create a supportive 
            environment for students by offering skill development programs, facilitating alumni connections,
             and seeking valuable feedback from both recruiters and students. By actively engaging with industry 
             partners, organizing campus recruitment events, and fostering strong alumni relations, the T&P Cell equips 
             students with the necessary skills and knowledge to excel in their chosen fields. Overall, the Training and 
             Placement Cell plays a pivotal role in shaping the professional journey of students, enhancing their 
             employability, and establishing the institution as a hub for producing industry-ready graduates.
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
