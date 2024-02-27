import React from 'react'
import '../Footer/Footer.css'
import firstimage from '../Assets/Images/food 1.svg'
const Footer = () => {
  return (
    <footer className="shah-palace_footer">
    <div className="container">
        <div className="footer__inner">
            <div className="footer__inner_top">
                <div className="footer__inner_top_main">
                    <div className="top_main_site">
                     <img src={firstimage} alt="" />
                        <h2 className="top_main_site_name">
                            f.palace
                            
                        </h2>
                    </div>

                    <div className="top_main_box">
                        <i className="bi bi-envelope-check"></i>
                        <a target='_blank' href='mailto:"info@shah_palace.com'>info@shah_palace.com</a>
                    </div>

                    <div className="top_main_box">
                        <i className="bi bi-globe"></i>
                        <a target='_blank' href='www.shah_palace.com'>www.shah_palace.com</a>
                    </div>
                </div>

                <div className="footer__inner_top_list">
                    <h5 className="top_list_h5">Bizim Menyu</h5>

                    <ul>
                        <li><a href="#">Səhər yeməyi</a></li>
                        <li><a href="#">Nahar</a></li>
                        <li><a href="#">Şam yeməyi</a></li>
                    </ul>
                </div>

                <div className="footer__inner_top_list">
                    <h5 className="top_list_h5">Məlumat</h5>

                    <ul>
                        <li><a href="#">Haqqımızda</a></li>
                        <li><a href="#">Rəylər</a></li>
                        <li><a href="#">Hadisə</a></li>
                    </ul>
                </div>

                <div className="footer__inner_top_list">
                    <h5 className="top_list_h5">Faydalı bağlantılar</h5>

                    <ul>
                        <li><a href="#">Servislər</a></li>
                        <li><a href="#">Dəstək</a></li>
                        <li><a href="#">Şərtlər</a></li>
                    </ul>
                </div>

                <div className="footer__inner_top_list">
                    <h5 className="top_list_h5">Sosial Şəbəkələr</h5>

                    <ul>
                        <li><a target='_blank' href="https://www.facebook.com/profile.php?id=100088100592448&mibextid=ZbWKwL">Facebook</a></li>
                        <li><a target='_blank' href="https://www.instagram.com/yasharr.444?igsh=M3Jla3ZtcTQycG1h">İnstagram</a></li>
                        <li><a target='_blank' href="https://x.com/Yasharr444?t=xACu2iyKfOKdjb8c7iMIXA&s=09">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__inner_bottom">
            <p>Created With By Yashar &copy;2024.All rights reserved</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer