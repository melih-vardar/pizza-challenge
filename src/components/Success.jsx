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
                    <h4>Boyut: {selectedOption}</h4>
                    <h4>Hamur: {doughThickness}</h4>
                    <h4>Ek Malzemeler: {pizzaToppings}</h4>
                </div>
                <div className="orderPricee">
                    <h3>Sipariş Toplamı</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "2.2rem 0 0 4.9rem" }}>
                        <h4>Seçimler</h4>
                        <h4>{price.toFixed(2)}₺</h4>
                    </div>
                    <div className="orderPricee-red">
                        <h4 style={{ color: "red" }}>Toplam</h4>
                        <h4 style={{ color: "red" }}>{totalPrice.toFixed(2)}₺</h4>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Success