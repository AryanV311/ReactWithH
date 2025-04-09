import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Frontend Developer with around 6 months of professional
              experience, focused on building responsive and user-friendly web
              applications. I've had the chance to work on real-world projects
              with established teams, contributing to frontend development and
              improving overall user experience.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-details">
            <div className="about-info">
                <h2>Info</h2>
              <p>Name: Aryan Vishwakarma</p>
              <p>Age: 21</p>
              <p>From: India</p>
              <p>Email: aryanv6250@gmail.com</p>
              <p>Availablity: fulltime</p>
              <p>Experience: 6 month</p>
            </div>
            <div className="about-education">
                <h2>Education</h2>
              <h3>BSCIT- 9.2 CGPA</h3>
              <p>Ramanand Arya Dav College</p>
              <h3>HSC-90.67%</h3>
              <p>Ramanand Arya Dav College</p>
              <h3>SSC-78.60%</h3>
              <p>St.Agrasen High School & jr.college</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
