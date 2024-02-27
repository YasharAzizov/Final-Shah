import React from 'react'
import '../TakeAwey/TakeAwey.css'
import food from  '../Assets/Images/Food 5 1.svg'
import img2 from '../Assets/Images/Image2.svg'
const TakeAwey = () => {
  return (
    <section className="shah-palace_download">
    <div className="container">
        <div className="download__inner">
            <div className="download__inner_left">
                <div className="download__inner_left_img">
                  <img src={img2} alt="" />
                </div>
            </div>

            <div className="download__inner_right">
                <h5 className="download__inner_right_h5">
                    Çatdırılma
                </h5>

                <h3 className="download__inner_right_h3">
                    Yeməklərinizi Sifariş Etməyin Sadə Yolu
                </h3>

                <p className="download__inner_right_par">
                    Sağlam qidaları hazır saxlayın. Ac olduğunuz zaman tezgahda və ya şkafda gördüyünüz ilk şeyi yeməyə daha çox inanırsınız.
                </p>

                <div className="downloader__inner_right_media_container">
                       <img src={food} alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default TakeAwey