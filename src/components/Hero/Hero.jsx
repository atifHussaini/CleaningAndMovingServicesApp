import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best cleaning & moving service in town!</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Let us </span>
            <span>Help</span>
          </div>
          <div>
            <span>Clean & Move</span>
          </div>
          <div>
            <span>
              Clean and Move with Ease! Your trusted partner for seamless
              transitions and spotless spaces.
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+10</span>
            <span>Expert Cleaners</span>
          </div>
          <div>
            <span>+15</span>
            <span>Expert Movers</span>
          </div>
          <div>
            <span>+26</span>
            <span>Customers</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div>

        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories*/}
        <div className="calories">
          <img src={Calories} alt=""></img>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
