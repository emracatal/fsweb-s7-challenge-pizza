import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pizza from "./Pizza";

const extras = [
  { name: "Pepperroni" },
  { name: "Domates" },
  { name: "Biber" },
  { name: "Sosis" },
  { name: "Mısır" },
  { name: "Sucuk" },
  { name: "Kanada Jambonu" },
  { name: "Pastırma" },
  { name: "Ananas" },
  { name: "Tavuk Izgara" },
  { name: "Jalepeno" },
  { name: "Kabak" },
  { name: "Soğan" },
  { name: "Sarımsak" },
];

function OrderPizza() {
  const initialPrice = 85.5;
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setquantity] = useState(1);

  return (
    <>
      <header className="order-header">
        <div className="container-orderpizza">
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
        </div>
      </header>
      <main className="order-body">
        <div className="pizza-name">{Pizza[0].name}</div>
        <div className="price-rate-comment">
          <h2>{Pizza[0].price}₺</h2>
          <p>{Pizza[0].rate}</p>
          <p>{Pizza[0].count}</p>
        </div>
        <div className="story">
          <p>{Pizza[0].story}</p>
        </div>

        <div className="size">Boyut Seç * </div>
        <div className="size-picker">
          <label>
            <input type="radio" value="small" />
            Küçük
          </label>
          <label>
            <input type="radio" value="medium" />
            Orta
          </label>
          <label>
            <input type="radio" value="large" />
            Büyük
          </label>
        </div>

        <div className="thickness">Hamur Seç * </div>
        <div className="thickness-picker">
          <label>
            Hamur Kalınlığı
            <select>
              <option>İnce</option>
              <option>Kalın</option>
            </select>
          </label>
        </div>

        <div className="extras"> Ek Malzemeler </div>
        <div className="extra-picker">
          {extras.map((item, i) => (
            <div key={i}>
              <label>
                <input id={i} type="radio" name={item.name} value={item.name} />
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div className="note">Sipariş Notu </div>
        <input
          className="isim-input"
          type="text"
          placeholder="Siparişinize eklemek istediğin bir not var mı?"
        />

        <div className="quantity">
          <button> - </button>
          <h3> {quantity} </h3>
          <button> + </button>
        </div>

        <div className="bill-header">Sipariş Toplamı </div>
        <div className="extra-total">Seçimler:{}TL</div>
        <div className="total-bill">Toplam:{}TL </div>
        <button> Sipariş Ver </button>
      </main>
    </>
  );
}
export default OrderPizza;
