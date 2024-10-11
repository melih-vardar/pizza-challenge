import React from 'react'
import "./Success.css";

function Success(props) {
    const { pizzaData, price, totalPrice } = props;
    const { selectedOption, pizzaToppings, doughThickness } = pizzaData;
    return (
        <>
            <div className="successHomeBannerMobile">
                <h1>Teknolojik Yemekler</h1>
                <h2>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h2>
            </div>
            <div className="successHomeBanner">
                <div className="success-textbox-1">
                    <h1>Teknolojik Yemekler</h1>
                    <h2>lezzetin yolda</h2>
                </div>
                <div className="success-textbox-2">
                    <h3> SİPARİŞ ALINDI</h3>
                    <div id="border-bottom"></div>
                </div>
                <div className="success-textbox-3">
                    <h1>
                        Position Absolute Acı Pizza
                    </h1>
                </div>
                <div className="pizza-details">
                    <h4>Boyut: <span className="pizzaProperties">{selectedOption}</span></h4>
                    <h4>Hamur: <span className="pizzaProperties">{doughThickness}</span></h4>
                    <h4>Ek Malzemeler: <span className="pizzaProperties">{pizzaToppings.join(', ')}</span></h4>
                </div>
                <div className="orderPrice-footer">
                    <div className="orderPrice-footer-textbox">
                        <h3 style={{ fontSize: "2rem", margin: "0 0 1rem 0" }}>Sipariş Toplamı</h3>
                        <div className="orderPrice-footer-textbox-part1">
                            <h3>Seçimler</h3>
                            <h3>{price.toFixed(2)}₺</h3>
                        </div>
                        <div className="orderPrice-footer-textbox-part1">
                            <h3>Toplam</h3>
                            <h3>{totalPrice.toFixed(2)}₺</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Success