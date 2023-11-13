import React from "react";
import './Header.css'
import { HiLocationMarker } from "react-icons/hi";
const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <h1>Adrenalina & Turismo</h1>
          <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Buscar</button>
            </div>
          <div className="flexCenter h-menu">
            <a href="">Reservas</a>
            <a href="">Hoteles</a>
            <a href="">Paquetes</a>
            <a href="">Información</a>
            <a href=""></a>
            <button className="button">
              <a href="">Contacto</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
