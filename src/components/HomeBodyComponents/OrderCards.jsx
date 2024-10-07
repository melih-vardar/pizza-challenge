import React from 'react'
import { Link } from "react-router-dom"

function OrderCards() {
    return (
        <div className="order">
            <div id="lezzetus-card">
                <div id="lezzetus-text-frame">
                    <h3>Özel Lezzetus</h3>
                    <h4>Position:Absolute Acı Burger</h4>
                    <Link to="/order-pizza">
                        <button>
                            <span id="order-button-text">SİPARİŞ VER</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div id="rest-card">
                <div id="hackathlon">
                    <div id="hackathlon-text-frame">
                        <h4>Hackathlon Burger Menü</h4>
                        <Link to="/order-pizza">
                            <button>
                                <span id="order-button-text">SİPARİŞ VER</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div id="kurye">
                    <div id="kurye-text-frame">
                        <h4>Çoooook <span id="npm-gibi">hızlı npm gibi kurye</span></h4>
                        <Link to="/order-pizza">
                            <button>
                                <span id="order-button-text">SİPARİŞ VER</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCards