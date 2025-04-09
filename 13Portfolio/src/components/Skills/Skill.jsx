import React from "react";
import "./skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { skills } from "../constant/skillset";
console.log("object", skills);

export const Skill = () => {
  return (
    <div id="skill" className="skills">
      <div className="skill-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-format ${skill.className}`}>
            <p className="icon">{<skill.icon />}</p>
            <p className="title">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
