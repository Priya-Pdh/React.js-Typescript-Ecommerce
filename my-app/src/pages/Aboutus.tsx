import "./css/Aboutus.css";
import Values from "../component/Values";
import NavBar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import { useNavigate } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";
import React from "react";

function Aboutus() {
  const navigate = useNavigate();

  const handleClothingHacks = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/CareForClothes");
  };

  return (
    <>
      <main id="AboutUs-Container">
        <NavBar />
        <div className="welcome-img-wrapper">
          <section className="title">
            Shoppers powers millions of businesses worldwide. <br />
            The all-in-one commerce platform to start, run, and grow a business.
          </section>
          <img src="images/img3.jpeg" alt="img1" id="first-img" />
        </div>
        <div id="story-container">
          <h2 className="story-title">OUR STORY</h2>
          <div id="story-wrapper">
            <img
              src="images/img16.jpeg"
              alt="img1"
              id="story-img"
              className="img-list"
            />

            <div className="section-list" id="article1">
              <h3 className="title section-title">
                THE FIRST SHOPPERS STORE WAS OUR OWN
              </h3>
              <br />
              <section className="section-text">
                Over a decade ago, we started a store to sell snowboards online.
                None of the ecommerce solutions at the time gave us the control
                we needed to be successful—so we built our own. Today,
                businesses of all sizes use Shoppers, whether they're selling
                online, in retail stores, or on-the-go.
              </section>
            </div>
          </div>
          <br />

          <div id="sustainablity-wrapper">
            <div className="section-list" id="article2">
              <h3 className="title section-title">
                OUR COMMITMENT TO SUSTAINABILITY
              </h3>
              <br />
              <section>
                Commerce can only thrive in the long term if our merchants,
                partners, communities, and planet thrive too. In this report we
                provide an update on progress toward our sustainability
                priorities and share how Shoppers is creating and supporting an
                ecosystem of inclusive entrepreneurship, innovation, and growth.
              </section>
              <br />
              <button className="green-button" onClick={handleClothingHacks}>
                TAKE CARE OF YOU CLOTHES <FaRecycle />
              </button>
            </div>

            <img
              src="images/img21.jpeg"
              alt="img2"
              id="sustainablity-img"
              className="img-list"
            />
          </div>
          <br />
          <br />
        </div>
        <h3 className="Values-title">OUR VALUES</h3>
        <section id="value-container">
          <div className="value-list">
            <Values
              src="images/img17.webp"
              value="Honest"
              description="We are straightforward, open, and don't make promises that we can't keep"
            />
          </div>
          <div className="value-list">
            <Values
              src="images/img19.png"
              value="Empowering"
              description="We want people to feel like they can accomplish whatever they're trying to do. "
            />
          </div>
          <div className="value-list">
            <Values
              src="images/img20.jpeg"
              value="Efficient"
              description="We value speed and simplicity, but we value productivity even more."
            />
          </div>
          <div className="value-list">
            <Values
              src="images/img18.png"
              value="Transparent"
              description="We are transparent about what a feature or tool can do and what it can't."
            />
          </div>
        </section>
        <section id="last-section">
          We hope our authentic core values give you a feeling of trust in our
          products, pride in our commitment to uncomplicated, cruelty-free
          beauty, and confidence knowing that our gentle, carefully-chosen
          ingredients will provide uncompromised results.
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Aboutus;
