import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <img src="/Assets/logo.svg" alt="logo" />
      </div>
      <h1>MainPage Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR</p>
      <p>PİZZA, DOYURUR</p>
      <button id="order-pizza">ACIKTIM</button>
    </div>
  );
}
export default Home;
