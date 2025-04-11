import React from 'react';
import footer_logo from "../../assets/logo2.png";
import user_icon from "../../assets/user_icon.svg";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt="" />
                <p>As a fresher frontend developer based in Mumbai, I’ve been gaining hands-on experience through freelance projects, crafting real-world web apps while continuously leveling up my skills.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2025 Aryan Tech. All rights reserved.</p>
            <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
            </div>
        </div>  
    </div>
  )
}
