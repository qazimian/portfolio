import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I am Qazi Mian Muhammad Ramzan, a Bachelor of Computer Science
              graduate from Dawood University Of Engineering & Technology. I
              have a Diploma in Information Systems Management from Aptech
              Learning Institute. As a motivated and diligent individual, I am eager to apply my digital skills
              and demonstrate a strong commitment to excellence.
            </p>
            <p>
               I have worked on
              various projects including a Car Showroom Website Front-end, CRUD
              Apps using .Net Core technology, and Fake News Detection for my
              BSCS Final Year project.
            </p>

          </div>
          <div className="about-skills">
          <p> MY SKILL SET INCLUDES</p>
            
            <div className="about-skill">
              {" "}
              <p> HTML & CSS</p>
              <hr style={{ width: "80%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> React JS</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> .NET CORE </p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> C# </p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> Ms Sql Server </p>
              <hr style={{ width: "70%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
