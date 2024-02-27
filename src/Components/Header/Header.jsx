import React, { useState } from "react";
import logo from "../Assets/Images/food 1.svg";
import six from "../Assets/Images/6.svg";
import "../Header/Header.css";
import MobileNav from "../mobileNav/MobileNav";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="container">
        <div className="hero_inner">
          <img src={six} alt="" className="sandwich__img" />
          <nav className="hero__nav">
            <div className="hero__nav_left">
                <img src={logo} alt="" />
              <h1 className="hero__nav_left_h1">f.palace</h1>
            </div>

            <ul className="hero__nav_right">
              <li>
                  <i className="bi bi-search"></i>
              </li>
              <li>
              <NavLink to='/login'>
                    <i className="bi bi-box-arrow-in-right"></i>
                    </NavLink>
              </li>
              <li onClick={handleOpen}>
                  <i
                    className={`bi ${
                      menuOpen ? "bi-x-circle-fill" : "bi-list"
                    }`}
                  ></i>
              </li>
            </ul>
          </nav>

          <MobileNav
            classes={menuOpen ? "anim" : ""}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
