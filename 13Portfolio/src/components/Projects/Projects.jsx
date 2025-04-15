import React, { useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export const Projects = () => {

  const initialDisplayCount = 6;
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, initialDisplayCount);

  return (
    <div id="portfolio" className="project">
      <div className="project-title">
        <h1>My Latest Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
      {
          visibleProjects.map((work, index) => (
            <div  className={`project-card ${showAll ? 'animate' : ''}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={work.w_img} alt={`project-${index}`} />
              <div className='project-overlay'>
                <h3>{work.w_name}</h3>
                <p>{work.w_description}</p>
                <a href={work.w_link} target='_blank' rel='noopener noreferrer'>Visit Site</a>
              </div>
            </div>
          ))
        }
      </div>
      {visibleProjects && (
        <div className='project-showmore' onClick={handleToggle}>
          <p>{showAll ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt=""
            style={{
              transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      )}
    </div>
  );
};
