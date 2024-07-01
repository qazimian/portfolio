import React from "react";
import "./Hero.css";
// import profile_img from '../../assets/profile_img.svg'
import cir_img from "../../assets/profile_img.png";
import Resume_QaziMian from "../../assets/cv.pdf";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div>
        <img src={cir_img} alt="" />
      </div>
      <div className="hero_content">
        <h1>
          {" "}
          <span>I,m Qazi Mian,</span> Frontend developer based in Pakistan.
        </h1>
        <p>
          I am frontend developer from Karachi with experience of 3 years, as a
          motivated and diligent individual, I am eager to apply my digital
          skills and demonstrate a strong commitment to excellence.
        </p>
        <div className="hero-action">
          <a href="https://www.github.com/qazimian">
            <div className="hero-Connect">
              {" "}
              <i className="fa fa-github"> </i> GitHub
            </div>
          </a>
          <a href={Resume_QaziMian} download>
            <div className="hero-Resume">
              <i className="fa fa-file-pdf-o"> </i> Resume{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
