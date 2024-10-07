import React from 'react'
import { Link } from "react-router-dom"

function HomeHeader() {
    return (
        <div className="HomeHeader">
            <section className="header-content">
                <h1>Teknolojik Yemekler</h1>
                <h2>fırsatı kaçırma</h2>
                <h3>KOD ACIKTIRIR PİZZA, DOYURUR</h3>
                <Link to="/order-pizza">
                    <button>
                        <span id="button-text">ACIKTIM</span>
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default HomeHeader