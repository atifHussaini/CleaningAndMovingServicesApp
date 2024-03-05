import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

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
      </div>
      <div className="right-h">Right side</div>
    </div>
  );
};

export default Hero;
