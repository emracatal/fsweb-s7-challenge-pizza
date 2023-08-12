import React from "react";
import { Link } from "react-router-dom";

function OrderPizza() {
  return (
    <div className="container-orderpizza">
      <header className="order-header">
        <div className="teknolojik-logo">
          <img
            src="https://raw.githubusercontent.com/emracatal/fsweb-s7-challenge-pizza/78b7d66e6edb4395790bbe0084fff1f8d81fba5c/Assets/logo.svg"
            alt="teknolojik Yemekler logo"
          ></img>
        </div>

        <div className="navbar">
          <nav>
            <Link to="/" style={{ color: "white" }}>
              Anasayfa
            </Link>
            <p> - </p>
            <Link to="/OrderPizza" style={{ color: "white" }}>
              Sipariş Oluştur
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default OrderPizza;
