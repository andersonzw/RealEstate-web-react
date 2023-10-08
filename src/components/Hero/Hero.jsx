import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import {motion} from 'framer-motion'

function HiLocationMarker(props) {
  return (
    <svg
      stroke="currentColor"
      fill="#4066ff"
      strokeWidth={0}
      viewBox="0 0 20 20"
      height="25px"
      width="25px"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// import { HilocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial ={{y:"3rem",opacitiy:0}}
            animate ={{y:0,opacity:1}}
            transition={{
              duration:3,
              type:"spring"
            }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="secondaryText flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            {HiLocationMarker()}
            <input type="text" name="" id="" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8200} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
           className="image-container"
           initial ={{x:'6rem',opacity:0}}
           animate = {{x:0,opacity:1}}
           transition={{
            duration:3,
            type:"spring"
           }}>
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
