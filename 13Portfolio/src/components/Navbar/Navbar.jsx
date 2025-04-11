import React, { useRef, useState } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

export const Navbar = () => {
  const [menu, setShowmenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }

  const closeMenu = () => {
    menuRef.current.style.right='-350px'
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"  />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setShowmenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setShowmenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skill">
            <p onClick={() => setShowmenu("skill")}>Skills</p>
          </AnchorLink>
          {menu === "skill" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setShowmenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setShowmenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
