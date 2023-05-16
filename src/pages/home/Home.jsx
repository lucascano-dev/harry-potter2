import { useEffect, useState } from "react";
import backgroundWelcome from "../../assets/image/background-harry-potter.png";
import imagenCentro from "../../assets/image/welcome-center.png";
import Cards from "../../components/cards/Cards";
import "./Home.css";
import axios from "axios";

const Home = ({ datos }) => {
  const [personaje, setPersonaje] = useState([]);
  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/characters").then((response) => {
      setPersonaje(response.data);
    });
  });
  return (
    <>
      <div>
        <div className="contenedor-banner">
          <div className="tapiz"></div>
          <div className="contenedor-imagen-background">
            <img
              className="imagen-bkg1"
              src={backgroundWelcome}
              alt="imagen harry potter"
            />

            <div className="contenedor-banner-central">
              <img className="imagen-centro" src={imagenCentro} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Cards datos={personaje} />
    </>
  );
};
export default Home;
