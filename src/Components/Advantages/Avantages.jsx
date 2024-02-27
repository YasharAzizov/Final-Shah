import React from 'react'
import '../Advantages/Advantages.css'
import truck from '../Assets/Images/truck.svg'
import mouthe from '../Assets/Images/mouth.svg'
import food from '../Assets/Images/food.svg'
import image2 from '../Assets/Images/3.svg'
import image3 from '../Assets/Images/2.svg'
const Avantages = () => {
  return (
    <section id='advantage' className="shah-palace_features">
        <img src={image3}alt="" className='food-img-features' />
   <img src={image2} alt="" className='food-img-features_2'/>
    <div className="container">
        <div className="features__inner">
            <div className="features__inner_text">
                <h3 className="features__inner_text_h3">Üstünlüklər</h3>
                <h5 className="features__inner_text_h5">Möhtəşəm Xidmətlərimiz</h5>
            </div>

            <div className="features__inner_box">
                <div className="features__inner_box_container">
                <div className="features__inner_box_container_img">
                  <img src={food} alt="" />
                </div>

                <h3 className="features__inner_box_container_h3">
                    Keyfiyyətli Qida
                </h3>

                <span className="features__inner_box_container_span">
                    Sağlam qidaları hazır saxlayın. Ac olanda, daha çox olursunuz
                </span>
                    
                </div>

                <div className="features__inner_box_container">
                    <div className="features__inner_box_container_img">
                    <img src={mouthe} alt="" />
                    </div>

                    <h3 className="features__inner_box_container_h3">
                        Super Dad
                    </h3>

                    <span className="features__inner_box_container_span">
                        Sağlam qidaları hazır saxlayın. Ac olanda, daha çox olursunuz
                    </span>
                        
                    </div>

                    <div className="features__inner_box_container">
                        <div className="features__inner_box_container_img">
                           <img src={truck}alt="" />
                        </div>

                        <h3 className="features__inner_box_container_h3">
                           Çatdırılma
                        </h3>

                        <span className="features__inner_box_container_span">
                            Sağlam qidaları hazır saxlayın. Ac olanda, daha çox olursunuz
                        </span>
                            
                        </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Avantages