import React from "react";
import { FaArrowDown, FaRecycle } from "react-icons/fa";
import "./css/CareForClothes.css";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";

function CareForClothes() {
  return (
    <>
      <NavBar />

      <main className="mending-section-wrapper">
        <FaRecycle />

        <h1 className="mending-heading">Tips for mending your clothes</h1>

        <div className="mending-text-conatiner">
          <div className="mending-text">
            <p className="mending-text-para">
              " Mending our clothes causes an awareness and appreciation for the
              function our clothes"
            </p>
            <p className="mending-text-para">
              With more garments being cheaply made, the life cycle of modern
              clothes has become painfully short. The more people buy, the more
              waste sent to the landfill each year. To be apart of a change, we
              need to redefine how we treat our possessions and reclaim the
              power of mending.
            </p>
          </div>
          <div className="mending-blog-img">
            <aside className="mending-heading" id="blog-heading">
              Mending Blog for beginners
              <span className="space">
                <FaArrowDown />
              </span>
            </aside>
            <a href="https://www.sustainably-chic.com/blog/visible-mending-darning-clothes">
              <img
                src="/images/Mending-Tips.webp"
                alt="img"
                className="mending-blog-img"
                width={350}
                height={300}
              />
            </a>
          </div>
        </div>
        <h2 className="mending-heading" id="video-heading">
          Popular Mending Hacks
        </h2>
        <div className="mending-videos">
          <br />
          <iframe
            className="mending-videos-list"
            width={370}
            height={300}
            title="video1"
            src="https://www.youtube.com/embed/aDDjja9HeyI"
          ></iframe>
          <iframe
            className="mending-videos-list"
            width={370}
            height={300}
            title="video2"
            src="https://www.youtube.com/embed/CFhsftQzugo"
          ></iframe>
          <iframe
            className="mending-videos-list"
            width={370}
            height={300}
            title="video3"
            src="https://www.youtube.com/embed/hVuJW-oMlmc"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CareForClothes;
