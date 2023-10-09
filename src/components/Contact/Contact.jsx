import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiVideoCamera } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left */}
        <div className="flexColStart innerWidth c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
          </span>
          <ContactCells />
        </div>

        {/* right */}
        <div className=" c-right">
          <div className="image-container">
            <img src="./public/contact.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const modeData = [
  {
    primary: "Call",
    secondary: "123 456 789",
    tertiary: "Call now",
    icon: <MdCall size={25} />,
  },
  {
    primary: "Chat",
    secondary: "123 456 789",
    tertiary: "Chat now",
    icon: <HiChatBubbleLeftEllipsis size={25} />,
  },
  {
    primary: "Video Call",
    secondary: "123 456 789",
    tertiary: "Call now",
    icon: <HiVideoCamera size={25} />,
  },
  {
    primary: "Email",
    secondary: "123 456 789",
    tertiary: "Email now",
    icon: <MdOutlineMailOutline size={25} />,
  },
];

const ContactCells = () => {
  return (
    <div className="flexColStart contactModes">
      {/* first row */}
      <div className=" row">
        {modeData.slice(0,2).map((mode, i) => {
          console.log(mode.primary);
          return (
            <div className="flexColCenter mode" key={i}>
              <div className="flexStart top">
                <div className="flexCenter icon">{mode.icon}</div>
                <div className="flexColStart detail">
                  <span className="primaryText">{mode.primary}</span>
                  <span className="secondaryText">{mode.secondary}</span>
                </div>
              </div>
              <div className="flexCenter button">{mode.tertiary}</div>
            </div>
          );
        })}
      </div>
    {/* 2nd row */}
    <div className=" row">
        {modeData.slice(2).map((mode, i) => {
          console.log(mode.primary);
          return (
            <div className="flexColCenter mode" key={i}>
              <div className="flexStart top">
                <div className="flexCenter icon">{mode.icon}</div>
                <div className="flexColStart detail">
                  <span className="primaryText">{mode.primary}</span>
                  <span className="secondaryText">{mode.secondary}</span>
                </div>
              </div>
              <div className="flexCenter button">{mode.tertiary}</div>
            </div>
          );
        })}
      </div>




    </div>
  );
};
export default Contact;
