import React from 'react'
import "./Success.css";

function Success() {
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
                    <h4>Boyut: { }</h4>
                    <h4>Hamur: { }</h4>
                    <h4>Ek Malzemeler: { }</h4>
                </div>

            </div>
        </>
    )
}

export default Success