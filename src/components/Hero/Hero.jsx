import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup"
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left slide */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              {/* <div className="orange-circle" /> */}
              <h1>
              Donde la naturaleza y <br />la aventura <br /> se encuentran.
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
              Adrenalina & Turismo es una agencia de viajes ecológicos que ofrece experiencias personalizadas.
              </span>
              <span className="secondaryText">
              Creamos paquetes turísticos únicos, combinando alojamiento, transporte y actividades emocionantes
              </span>
              <span className="secondaryText">
              Nuestro objetivo es hacer de cada viaje una aventura inolvidable, promoviendo el turismo sostenible.   </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Buscar</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={100} end={200} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Hoteles</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Clientes</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={4} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Trabajdores</span>
              </div>
            </div>

          </div>
          {/* right slide */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
