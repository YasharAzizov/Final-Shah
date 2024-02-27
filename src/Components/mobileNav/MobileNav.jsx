import React from "react";
import "./mobileNav.css";
import { NavLink } from "react-router-dom";

const MobileNav = ({classes,setMenuOpen,menuOpen}) => {
  return (
  
      <ul className={`${classes} menu__box`}>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <NavLink className={'menu__item'} to={'/'}>
            Ana sehife
          </NavLink>
          {/* <a className="menu__item" href="#">
            Ev
          </a> */}
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href='#about' className="menu__item">Haqqımızda</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a className="menu__item" href="#advantage">
         Üstünlüklər
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a className="menu__item" href='#recipes'>
           Populyar menyu
          </a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a className="menu__item" href="#">
            Daxil Ol
          </a>
        </li>
      </ul>

  );
};

export default MobileNav;
