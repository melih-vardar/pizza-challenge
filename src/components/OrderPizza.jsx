import React, { useEffect, useState } from 'react'
import "./OrderPizza.css"
import InputMapping from './OrderScreenComponents/InputMapping';

import { FormGroup, Label, Input } from 'reactstrap';

function OrderPizza(props) {

    const { quantity, selectedOption, price, handleChange, decrementQuantity, incrementQuantity, malzemeler, handleSubmit, isValid, totalPrice } = props;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "white" }}>
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
                            <select id="selectedDough" onChange={handleChange} data-cy="selectedDough" >
                                <option value="" selected disabled hidden>Hamur Kalınlığı</option>
                                <option value="ince">İnce Hamur</option>
                                <option value="klasik">Klasik Hamur</option>
                                <option value="kalin">Kalın Hamur</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="additionalIngredients">
                    <p>Ek Malzemeler</p>
                    <InputMapping
                        id="ekMalzemeler"
                        malzemeler={malzemeler}
                        handleChange={handleChange}
                        baslik="En Fazla 10 malzeme seçebilirsiniz. 5₺"
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <FormGroup style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.6rem",
                        width: "100%",
                        paddingBottom: "4rem",
                        borderBottom: "1px solid #5F5F5F80"
                    }}>
                        <Label for="exampleText">
                            <span style={{
                                fontFamily: "Barlow",
                                fontSize: "2.2rem",
                                fontWeight: "600",
                                lineHeight: "2.476rem",
                                textAlign: "left",
                                color: "#292929",

                            }}>Sipariş Notu</span>
                        </Label>
                        <Input style={{
                            fontSize: "1.8rem",
                            borderRadius: "6px",
                            border: "1px solid #D9D9D9",
                            fontFamily: "Barlow",
                            fontWeight: "500",
                            lineHeight: "5.6rem",
                            textAlign: "left",
                            padding: "0 5%",
                        }}
                            id="orderNote"
                            name="text"
                            type="textarea"
                            rows="2"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            onChange={handleChange}
                            data-cy="orderNote"
                        />
                    </FormGroup>
                </div>
                <div className="orderPrice">
                    <h3>Sipariş Toplamı</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "2.2rem 0 0 4.9rem" }}>
                        <h4>Seçimler</h4>
                        <h4>{price.toFixed(2)}₺</h4>
                    </div>
                    <div className="orderPrice-red">
                        <h4 style={{ color: "red" }}>Toplam</h4>
                        <h4 style={{ color: "red" }}>{totalPrice.toFixed(2)}₺</h4>
                    </div>
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
                    <div className="orderLast-1">
                        <button className="orderButton" onClick={handleSubmit} disabled={!isValid} data-cy="submit-button">
                            SİPARİŞ VER
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default OrderPizza