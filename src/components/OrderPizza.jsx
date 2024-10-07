import React from 'react'
import "./OrderPizza.css"

function OrderPizza() {
    return (
        <>
            <div className="orderHeader">
                <h1>Teknolojik Yemekler</h1>
                <h2>Anasayfa - Sipariş Oluştur</h2>
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
        </>
    )
}

export default OrderPizza