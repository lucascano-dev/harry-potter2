import React from "react";
import backgroundWelcome from "../../assets/image/background-harry-potter.png";
import imagenCentro from "../../assets/image/welcome-center.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="contenedor-banner">
        <div className="tapiz"></div>
        <div className="contenedor-imagen-background">
          <img
            className="imagen-bkg1"
            src={backgroundWelcome}
            alt="iamgen harry potter"
          />

          <div className="contenedor-banner-central">
            <img className="imagen-centro" src={imagenCentro} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
