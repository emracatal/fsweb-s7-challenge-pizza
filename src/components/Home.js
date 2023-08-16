import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.svg";
function Home() {
  return (
    <div className="container-home">
      <div className="teknolojik-logo">
        <img src={logo} alt="Icon 1" />
      </div>

      <div className="home-slogan">
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
      </div>

      <div className="hero">
        <button data-cy="aciktim-bttn" id="order-pizza">
          <Link to="/OrderPizza">ACIKTIM</Link>
        </button>
      </div>
    </div>
  );
}
export default Home;
