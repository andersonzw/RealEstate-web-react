import React from "react";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const ContactBtn = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 515;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <button className="button">
        <a href="">Contact</a>
      </button>
    );
  } else {
    return <a href="">Contact</a>;
  }
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />
        {/* !!!!!!!!!!!! */}
        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }} >
          {menuOpened && (
            <div className="flexCenter drop-down ">
              <a href="">Residencies</a>
              <a href="">Contact Us</a>
              <a href="">About us</a>
              <ContactBtn />
            </div>
          )}
        </OutsideClickHandler>
        <div className="flexCenter h-menu ">
          <a href="">Residencies</a>
          <a href="">Contact Us</a>
          <a href="">About us</a>
          <ContactBtn />
        </div>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
        <BiMenu size={30} />
      </div>
    </section>
  );
};

export default Header;
