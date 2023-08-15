import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import * as Yup from "yup";
import { FormFeedback } from "reactstrap";

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
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [formErrors, setFormErrors] = useState({
    size: "",
    thickness: "",
    extras: [],
    note: "",
    customerInfo: "",
    quantity: 1,
    price: 0,
  });
  const [isFormValid, setFormValid] = useState(false);
  const [formState, setFormState] = useState({
    size: "",
    thickness: "",
    extras: [],
    note: "",
    customerInfo: "",
    quantity: 1,
    price: 0,
  });

  const formSchema = Yup.object().shape({
    customerInfo: Yup.string()
      .required("Bilgilerinizi girmelisiniz")
      .min(10, "En az 10 karakter girmelisiniz"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setFormValid(valid));
  }, [formState]);
  useEffect(() => {}, [formErrors]);

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setFormState({ ...formState, quantity });
    }
  };
  const plus = () => {
    setQuantity(quantity + 1);
    setFormState({ ...formState, quantity });
  };

  /* seçimler = ekmalzeme.length * 5 * qtty
toplam = (boy *qtty) +seçimler */
  function handleExtraChange(event) {
    let extras = [];
    const { value } = event.target;
    if (selectedExtras.includes(value)) {
      extras = selectedExtras.filter((malzeme) => malzeme !== value);
    } else {
      extras = [...selectedExtras, value];
    }
    if (extras.length < 11) {
      setSelectedExtras(extras);
      setFormState({ ...formState, extras });
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
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormState({
      ...formState,
      [name]: inputValue,
    });

    Yup.reach(formSchema, name)
      .validate(inputValue)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

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
            value={formState.customerInfo}
            name="customerInfo"
            className="customer-info-input"
            id="name-input"
            type="text"
            placeholder="İsim Soyisim Adres Girmelisiniz!!"
            invalid={!!formErrors.customerInfo ? "true" : undefined}
            onChange={handleInputChange}
          />
          <FormFeedback>{formErrors.customerInfo}</FormFeedback>
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
              <button
                type="submit"
                disabled={!isFormValid}
                className="confirm-order"
                id="confirm-order"
              >
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
