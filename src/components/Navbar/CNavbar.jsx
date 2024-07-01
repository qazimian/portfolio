import React, { useRef, useState } from "react";
import './CNavbar.css'
import logo from "../../assets/logo.png";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const CNavbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <img  src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" offset={50} href="#hero"><p onClick={()=>setMenu("hero")}> Home     </p></AnchorLink>{menu==="hero"? <img src={underline} alt=""/>:<></>} </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}> About Me </p></AnchorLink>{menu==="about"? <img src={underline} alt=""/>:<></>} </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}> Services </p></AnchorLink>{menu==="services"? <img src={underline} alt=""/>:<></>} </li>
        {/* <li><AnchorLink className="anchor-link" offset={50} href="#"><p onClick={()=>setMenu("portfolio")}> Portfolio</p></AnchorLink>{menu==="porfolio"? <img src={underline} alt=""/>:<></>} </li> */}
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}> Contact  </p></AnchorLink>{menu==="contact"? <img src={underline} alt=""/>:<></>} </li>
      </ul>
      {/* <div className="nav-connect">Connect With Me</div> */}
      
    </div>
  );
};

export default CNavbar;
