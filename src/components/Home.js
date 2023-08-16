import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-home">
      <div className="teknolojik-logo">
        <img
          src="https://raw.githubusercontent.com/emracatal/fsweb-s7-challenge-pizza/78b7d66e6edb4395790bbe0084fff1f8d81fba5c/Assets/logo.svg"
          alt="teknolojik Yemekler logo"
        ></img>
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
