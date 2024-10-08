import React, { useEffect, useState } from 'react'
import "./OrderPizza.css"
import InputMapping from './OrderScreenComponents/InputMapping';
import { useHistory } from "react-router-dom";

function OrderPizza() {

    const malzemeler = [
        "Pepperoni",
        "Kanada Jambonu",
        "Soğan",
        "Mısır",
        "Jalepeno",
        "Biber",
        "Ananas",
        "Sosis",
        "Tavuk Izgara",
        "Domates",
        "Sucuk",
        "Sarımsak",
        "Zeytin",
        "Kabak"]

    const [pizzaToppings, setPizzaToppings] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState("kucuk");
    const history = useHistory();

    const handleChange = (event) => {
        if (event.target.name === 'ekMalzemeler' && event.target.checked) {
            setPizzaToppings([...pizzaToppings, event.target.value]);
        } else if (event.target.name === 'ekMalzemeler' && !event.target.checked) {
            setPizzaToppings(pizzaToppings.filter((malzeme) => malzeme !== event.target.value));
        }

        else if (event.target.name === 'sizeSelection' && event.target.checked) {
            setSelectedOption(event.target.value);
        }
    };

    const decrementQuantity = () => {
        if (quantity >= 1)
            setQuantity((quantity) => quantity - 1)
    }

    const incrementQuantity = () => {
        setQuantity((quantity) => quantity + 1)
    }
    useEffect(() => {
        decrementQuantity();
        incrementQuantity();
    }, [quantity])

    const handleOrder = () => {
        history.push('/order-pizza/success');
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="orderHeader">
                <h1>Teknolojik Yemekler</h1>
                <h2>Anasayfa - <span className="siparis-olustur" >Sipariş Oluştur</span></h2>
            </div>
            <div className="order-textbox">
                <h1>Position Absolute Acı Pizza</h1>
                <div className="order-textbox2">
                    <h2>85.50₺</h2>
                    <div className="order-textbox2-group">
                        <h3>4.9</h3>
                        <h3>(200)</h3>
                    </div>
                </div>
            </div >
            <div className="order-rest">
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                <div className="order-first-form">
                    <div >
                        <form className="size-selection">
                            <p style={{
                                fontFamily: "Barlow",
                                fontSize: "2.2rem",
                                fontWeight: "600",
                                lineHeight: "2.476rem",
                                textAlign: "left",
                                margin: "0",
                                padding: "0",
                            }}>Boyut seç <span style={{ color: "red" }}>*</span></p>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="kucuk"
                                        checked={selectedOption === "kucuk"}
                                        onChange={handleChange}
                                        name="sizeSelection" />
                                    <p style={{
                                        fontFamily: "Barlow",
                                        fontSize: "2rem",
                                        fontWeight: "400",
                                        lineHeight: "5.6rem",
                                        textAlign: "left",
                                    }}>Küçük</p>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="orta"
                                        checked={selectedOption === "orta"}
                                        onChange={handleChange}
                                        name="sizeSelection" />
                                    <p style={{
                                        fontFamily: "Barlow",
                                        fontSize: "2rem",
                                        fontWeight: "400",
                                        lineHeight: "5.6rem",
                                        textAlign: "left",
                                    }}>Orta</p>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="buyuk"
                                        checked={selectedOption === "buyuk"}
                                        onChange={handleChange}
                                        name="sizeSelection" />
                                    <p style={{
                                        fontFamily: "Barlow",
                                        fontSize: "2rem",
                                        fontWeight: "400",
                                        lineHeight: "5.6rem",
                                        textAlign: "left",
                                    }}>Büyük</p>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="dough-selection">
                        <label>
                            <p style={{
                                fontFamily: "Barlow",
                                fontSize: "2.2rem",
                                fontWeight: "600",
                                lineHeight: "2.476rem",
                                textAlign: "left",
                                margin: "0",
                                padding: "0",
                            }}>Hamur seç <span style={{ color: "red" }}>*</span></p>
                            <select name="selectedDough">
                                <option value="" selected disabled hidden>Hamur Kalınlığı</option>
                                <option value="ince">İnce Hamur</option>
                                <option value="klasik">Klasik Hamur</option>
                                <option value="kalin">Kalın Hamur</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <p>Ek Malzemeler</p>
                    <InputMapping
                        name="ekMalzemeler"
                        malzemeler={malzemeler}
                        handleChange={handleChange}
                        baslik="En Fazla 10 malzeme seçebilirsiniz. 5₺"
                    />
                </div>
                <div>
                    <label htmlFor="ekNot">Sipariş Notu</label>
                    <textarea
                        type="textarea"
                        onChange={handleChange}
                        name="siparisNotu"
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        id="ekNot"
                    ></textarea>
                </div>
                <hr style={{
                    width: "100%",
                    border: "1px",
                    display: "none",
                }} />
                <div style={{
                    width: "100%",
                    height: "20.2rem",
                    borderRadius: "0.6rem",
                    border: "1px",
                }}>
                    <h3>Sipariş Toplamı</h3>
                    <h4>Seçimler</h4>
                    <h4>{pizzaToppings.length * 5}₺</h4>
                    <h4>Toplam</h4>
                    <h4>{quantity * (85.50 + (pizzaToppings.length * 5))}₺</h4>
                </div>
                <div className="orderLastPart">
                    <div className="orderLast-1">
                        <button className="changeButton" onClick={decrementQuantity}>
                            -
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button className="changeButton" style={{ borderRadius: "0 0.6rem 0.6rem 0" }} onClick={incrementQuantity}>
                            +
                        </button>
                    </div>
                    <div className="orderLast-2">
                        <button className="orderButton" onClick={handleOrder}>
                            SİPARİŞ VER
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default OrderPizza