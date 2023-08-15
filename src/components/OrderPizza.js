import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pizza from "./Pizza";
/* import * as Yup from "Yup"; */

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

/* const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Passwords must be at least 6 characters long."),
  terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
  // required isn't required for checkboxes.
}); */

function OrderPizza() {
  const [size, setSize] = useState(85.5);
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setFormState({ ...formState, ["quantity"]: quantity });
    }
  };
  const plus = () => {
    setQuantity(quantity + 1);
    setFormState({ ...formState, ["quantity"]: quantity });
  };

  const [formState, setFormState] = useState({
    size: "",
    thickness: "",
    extras: [],
    note: "",
    quantity: 1,
    price: 85.5,
  });
  /* seçimler = ekmalzeme.length * 5 * qtty
toplam = (boy *qtty) +seçimler */
  function handleExtraChange(event) {
    let extras = [];
    const { value } = event.target;
    if (selectedExtras.includes(value)) {
      // malzeme çıkar
      extras = selectedExtras.filter((malzeme) => malzeme !== value);
    } else {
      // malzeme ekle
      extras = [...selectedExtras, value];
    }
    if (extras.length < 11) {
      setSelectedExtras(extras);
      setFormState({ ...formState, ["extras"]: extras });
    } else {
    }
  }

  const extratotal = () => {
    return selectedExtras.length * 5;
  };

  const totalprice = () => {
    return size * quantity + extratotal();
  };

  const sizeChange = (e) => {
    if (e.target.value === "large") {
      setSize(185.5);
    } else if (e.target.value === "medium") {
      setSize(135.5);
    } else {
      setSize(85.5);
    }
  };

  //size onClicked update formState price
  //setFormState({ ...formState, ["price"]: price });

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
        <div className="size-and-thickness">
          <div className="size">
            <div className="size-picker-header">Boyut Seç *</div>
            <div className="size-picker">
              <label>
                <input
                  name="size"
                  type="radio"
                  value="small"
                  onChange={sizeChange}
                />
                Küçük 85,5₺
              </label>
              <br />
              <label>
                <input
                  name="size"
                  type="radio"
                  value="medium"
                  onChange={sizeChange}
                />
                Orta 135,5₺
              </label>
              <br />
              <label>
                <input
                  name="size"
                  type="radio"
                  value="large"
                  onChange={sizeChange}
                />
                Büyük 185,5₺
              </label>
            </div>
          </div>

          <div className="thickness">
            <div className="thickness-picker-header">Hamur Seç *</div>
            <div className="thickness-picker">
              <label>
                <input name="thickness" type="radio" value="thin" />
                İnce
              </label>
              <br />
              <label>
                <input name="thickness" type="radio" value="thick" />
                Kalın
              </label>
            </div>
          </div>
        </div>

        <div className="extras">
          <div className="extras-header">Ek Malzemeler</div>
          <p>En fazla 10 malzeme seçebilirsiniz.5₺</p>
          <div className="extra-picker">
            {extras.map((item, i) => (
              <div key={i}>
                <label>
                  <input
                    id={i}
                    type="checkbox"
                    name={item.name}
                    value={item.name}
                    onChange={handleExtraChange}
                  />
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="note" name="extras">
          <div className="note-header">Sipariş Notu</div>
          <input
            className="note-input"
            type="text"
            placeholder="Siparişinize eklemek istediğin bir not var mı?"
          />
        </div>

        <div className="customer-info" name="customer-info">
          <div className="customer-info-header">İsim Soyisim Adres</div>
          <input
            className="customer-info-input"
            id="name-input"
            type="text"
            placeholder="İsim Soyisim Adres Girmelisiniz!!"
          />
        </div>

        <div className="quantity-and-bill">
          <div className="quantity">
            <button onClick={minus}> - </button>
            <h3> {quantity} </h3>
            <button onClick={plus}> + </button>
          </div>

          <div className="bill">
            <div className="bill-header">Sipariş Toplamı</div>

            <div className="extra-total-top">
              <div className="extra-total">Seçimler:</div>
              <div>{extratotal()}TL</div>
            </div>

            <div className="total-bill-top">
              <div className="total-bill">Toplam:</div>
              <div>{totalprice()}TL</div>
            </div>

            <div className="confirm-order-bttn">
              <button className="confirm-order" id="confirm-order">
                <Link to="/Success">Sipariş Ver</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default OrderPizza;
