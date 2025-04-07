import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import devImg from '../assets/dev-img2.png'

export const Home = () => {
  return (
    <section className="hero-section">
      <div className="main-section">
        <div className="inner-section">
        <div className="hero-side1">
          <p className="web">Web Developer</p>
          <p className="info">Hello,  my name is Aryan Vishwaklarma</p>
          <p className="short-info">
            Welcome to my portfolio website! I'm a passionate and aspiring software engineer with a strong desire to create innovative solutions and push the boundaries of technology. With a deep love for coding and problem-solving, I am constantly seeking opportunities to learn and grow in this ever-evolving field
          </p>
          <div className="social-icon">
            <span className="icon icon1">
              <FaGithub className="a-icon" />
            </span>
            <span className="icon icon2">
              <FaLinkedin className="a-icon"  />
            </span>
            <span className=" icon icon3">
              <FaXTwitter className="a-icon"  />
            </span>
          </div>
          <div className="cv-btn">
            <button>Download <span><HiDownload /></span></button>
          </div>
        </div>
        <div className="hero-side2">
          <img src={devImg} alt="" />
        </div>

        </div>
      </div>
    </section>
  );
};
