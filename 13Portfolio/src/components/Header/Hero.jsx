import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {

  const handleDowanloadResume = () => {
    const link = document.createElement('a')
    link.href = "/Aryan-Resume.pdf"
    link.download = "Aryan-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="home" className="hero">
      <div className="image-container">
        <div className="profile-picture">
          <img src={profileImg} alt="" />
        </div>
      </div>
        <h2>I'm, Aryan Vishwakarma. . . ,</h2> 
      <h1>Fronted developer based in India.</h1>
      <p>
        As a fresher frontend developer based in Mumbai, I’ve been gaining
        hands-on experience through freelance projects, crafting real-world web
        apps while continuously leveling up my skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDowanloadResume}>My Resume</div>
        <div className="hero-socials">
          <a
            href="https://github.com/AryanV311"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="github">
              <FaGithub className="icon" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/aryan-vishwakarma-javascript/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="linkedin">
              <FaLinkedin className="icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
