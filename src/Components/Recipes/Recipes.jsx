import React, { useEffect, useState } from "react";
import "../Recipes/Recipes.css";
import { NavLink } from "react-router-dom";

const url = "https://final-db-beta.vercel.app/products?_limit=3";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section id="recipes" className="shah-palace_recipes">
      <div className="container">
        <div className="recipes__inner">
          <div className="recipes__texts">
            <h2 className="recipes__texts_h2">Reseptlər</h2>

            <span className="recipes__texts_span">Ən populyar məhsullar!</span>
          </div>

          <div className="recipes__container">
            {data.map((elem,index) => {
              return (
                <div className="recipes__card" key={index}>
                  <div className="recipes__card_img">
                    <img src={elem.imgSrc} alt={elem.foodName} />
                  </div>

                  <div className="recipes__card_name_rate">
                    <h3 className="recipes__card_name">{elem.foodName}</h3>

                    <div className="recipes__card_rate">
                      <i className="bi bi-star-fill"></i>
                      <span className="recipes__card_rate_rating">
                        {elem.foodRating}
                      </span>
                    </div>
                  </div>

                  <div className="recipes__card_btn_price">
                    <button className="recipes__card_add-card">
                      ADD TO CARD
                    </button>

                    <span className="recipes__card_price">
                      {elem.foodPrice}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="recipes__button">
            <NavLink to={`/recipes`}>
              <button className="recipes__button_primary">
                Daha çox reseptə baxmaq üçün klikləyin
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
