import React from 'react';
import "./Hero.css";
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="" />
        <h1><span>I'm, Aryan Vishwakarma,</span> Fronted developer based in India.</h1>
        <p>As a fresher frontend developer based in Mumbai, I’ve been gaining hands-on experience through freelance projects, crafting real-world web apps while continuously leveling up my skills.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )

}
