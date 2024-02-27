import React from "react";
import "../Inner/Inner.css";
import innerPhoto from "../Assets/Images/Image.svg";
const Inner = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__main">
          <div className="hero__main_left">
            <h5 className="hero__main_left_rest_name">
              Shah Palace Restaurant
            </h5>

            <h2 className="hero__main_left_rest_slogan">
              Gözəl yemək, <br />
              Gözəl əhval-ruhiyyə!
            </h2>

            <p className="hero__main_left_rest_desc">
              Şah Palace Restoranı, faire tərəfindən idarə olunan mövsümi qlobal
              mətbəxi təqdim edən qonşuluq restoranıdır.
            </p>

            <div className="hero__main_left_rest_desc_btn_box">
              <a href="#recipes" className="hero__main_left_rest_btn">
                Yemək menyusunu araşdırın
              </a>
            </div>

            <div className="hero__main_left_rest_icons">
              <ul className="hero__main_left_rest_icons_ul">
                <li>
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100088100592448&mibextid=ZbWKwL">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/yasharr.444?igsh=M3Jla3ZtcTQycG1h">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://x.com/Yasharr444?t=xACu2iyKfOKdjb8c7iMIXA&s=09">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero__main_right">
            <div className="hero__main_right_img_container">
              <img src={innerPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inner;
