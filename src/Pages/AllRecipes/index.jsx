import React, { useEffect, useState } from "react";
import "./AllRecipes.css";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const url = "https://final-db-beta.vercel.app/products";

const AllRecipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <section id="recipes" className="shah-palace_recipes">
        <div className="container">
          <div className="recipes__inner">
            <div className="recipes__texts">
              <br />
              <br />
              <h2 className="allrecipes__texts_h2">Menyu</h2>

              <span className="allrecipes__texts_span">
                Ən populyar məhsullarımız!
              </span>
            </div>

            <div className="recipes__container">
              {data.map((elem, index) => {
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllRecipes;
