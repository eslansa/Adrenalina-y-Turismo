import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import './Header.css'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".h-wrapper");
      if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <h1>Adrenalina & Turismo</h1>
          <OutsideClickHandler 
        onOutsideClick={()=> {
          setMenuOpened(false)
        }} 
        >
<div className={`flexCenter h-menu ${!menuOpened ? "hidden" : ""}`}>
  <a href="">Reservas</a>
  <a href="">Hoteles</a>
  <a href="">Paquetes</a>
  <a href="">Información</a>
  <a href=""></a>
  <button className="button">
    <a href="">Contacto</a>
  </button>
</div>
          </OutsideClickHandler>
          <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
