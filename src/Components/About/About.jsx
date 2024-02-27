import React from 'react'
import '../About/About.css'
import haqqimizda from'../Assets/Images/Imageabout.svg'
const About = () => {
  return (
    <section id='about' className="shah-palace_about-us">
    <div className="container">
        <div className="about-us__inner">
            <div className="about_us__left">
                <div className="about_us__left_img_container">
                <img src={haqqimizda }alt="" />
                </div>
            </div>
            <div className="about_us__right">
                <h3 className="about_us__right_h3">Bizim haqqımızda</h3>
                <h5 className="about_us__right_h5">
                    Dadlı yeməyin sadə yolu
                </h5>

                <p className="about_us__right_desc">
                    Sağlam qidaları hazır saxlayın. Ac olduğunuz zaman piştaxtada və ya sobada gördüyünüz ilk şeyi yemək ehtimalınız daha yüksəkdir
                </p>

                <div className="about_us__right_btn_box">
                    <button className="about_us__right_btn">
                        Hekayəmizi araşdırın
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About