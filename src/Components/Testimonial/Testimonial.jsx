import React from "react";
import image from "../Assets/Images/Image 3.svg";
import "../Testimonial/Testimonial.css";
import Slider from "../Slider";
const Testimonial = () => {
  return (
    <section className="shah-palace_clients">
      <div className="container">
        <div className="clients__inner">
          <div className="clients__inner_left">
            <h5 className="clients___inner_left_h5">Müştərilər nə deyir?</h5>

            <h2 className="clients__inner_left_h2">
              Müştərimizlərin Restoran haqqında dedikləri budur
            </h2>
            {/* swiper */}
            <Slider/>
            {/* <div >
              <span className="clients__inner_left_clients_say">
                “Shah Palace möhtəşəm yerdir. Yemək bizim hər şeyimizdir. Bu,
                millətçi hisslərin, etnik hisslərin, şəxsi tarixinizin,
                vilayətinizin davamıdır”
              </span>

              <div className="clients__inner_left_client_info">
                <div className="client_info_left">
                  <span className="client_info_name">Yaşar Əzizov</span>

                  <span className="client_info_job">
                    Product Designer @ azintech
                  </span>
                </div>

              </div>
            </div> */}
            {/* swiper end */}
          </div>

          <div className="clients__inner_right">
            <div className="clients__inner_right_image">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
