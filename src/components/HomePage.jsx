import React from 'react'

function HomePage() {
    return (
        <>
            <header>
                <section className="header-content">
                    <h1>Teknolojik Yemekler</h1>
                    <h2>fırsatı kaçırma</h2>
                    <h3>KOD ACIKTIRIR PİZZA, DOYURUR</h3>
                    <button>
                        <span id="button-text">ACIKTIM</span>
                    </button>
                </section>
            </header >

            <div className="mobile-div-until-footer">
                <div className="header-nav">
                    <nav>
                        <ul>
                            <li>
                                <a href="yenikore.html">
                                    <img src="assets/iteration-2-aseets/icons/1.svg" alt="Kore" />
                                    YENİ! Kore
                                </a>
                            </li>
                            <li>
                                <a href="pizza.html">
                                    <img src="assets/iteration-2-aseets/icons/2.svg" alt="Pizza" />
                                    Pizza
                                </a>
                            </li>
                            <li>
                                <a href="burger.html">
                                    <img src="assets/iteration-2-aseets/icons/3.svg" alt="Burger" />
                                    Burger
                                </a>
                            </li>
                            <li>
                                <a href="kizartmalar.html">
                                    <img src="assets/iteration-2-aseets/icons/4.svg" alt="Kızartmalar" />
                                    Kızartmalar
                                </a>
                            </li>
                            <li>
                                <a href="fast-food.html">
                                    <img src="assets/iteration-2-aseets/icons/5.svg" alt="Fast food" />
                                    Fast food
                                </a>
                            </li>
                            <li>
                                <a href="gazli-icecek.html">
                                    <img src="assets/iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek" />
                                    Gazlı İçecek
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="order">
                    <div id="lezzetus-card">
                        <div id="lezzetus-text-frame">
                            <h3>Özel Lezzetus</h3>
                            <h4>Position:Absolute Acı Burger</h4>
                            <button>
                                <span id="order-button-text">SİPARİŞ VER</span>
                            </button>
                        </div>
                    </div>

                    <div id="rest-card">
                        <div id="hackathlon">
                            <div id="hackathlon-text-frame">
                                <h4>Hackathlon Burger Menü</h4>
                                <button>
                                    <span id="order-button-text">SİPARİŞ VER</span>
                                </button>
                            </div>
                        </div>
                        <div id="kurye">
                            <div id="kurye-text-frame">
                                <h4>Çoooook <span id="npm-gibi">hızlı npm gibi kurye</span></h4>
                                <button>
                                    <span id="order-button-text">SİPARİŞ VER</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ara-text">
                    <h2>en çok paketlenen menüler</h2>
                    <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>

                <div className="ara-nav">
                    <nav className="ara-nav-nav">
                        <ul id="ara-nav-ul">
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="ramen.html">
                                    <img src="assets/iteration-2-aseets/icons/1.svg" alt="Ramen" />
                                    Ramen
                                </a>
                            </li>
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="pizza2.html">
                                    <img src="assets/iteration-2-aseets/icons/2.svg" alt="Pizza" />
                                    <span className="ara-nav-span">Pizza</span>
                                </a>
                            </li>
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="burger2.html">
                                    <img src="assets/iteration-2-aseets/icons/3.svg" alt="Burger" />
                                    Burger
                                </a>
                            </li>
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="french-fries.html">
                                    <img src="assets/iteration-2-aseets/icons/4.svg" alt="French fries" />
                                    French fries
                                </a>
                            </li>
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="fast-food2.html">
                                    <img src="assets/iteration-2-aseets/icons/5.svg" alt="Fast food" />
                                    Fast food
                                </a>
                            </li>
                            <li className="ara-nav-li">
                                <a className="ara-nav-a" href="soft-drinks.html">
                                    <img src="assets/iteration-2-aseets/icons/6.svg" alt="Soft drinks" />
                                    Soft drinks
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ara-tanitim">
                    <div className="tanitim">
                        <div className="tanitim-frame">
                            <img src="assets/iteration-2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
                            <div className="tanitim-textbox">
                                <h2>Terminal Pizza</h2>
                                <div className="tanitim-textbox2">
                                    <h3>4.9</h3>
                                    <div className="textbox2-group">
                                        <h3>(200)</h3>
                                        <h3><span className="fiyat">60₺</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tanitim">
                        <div className="tanitim-frame">
                            <img src="assets/iteration-2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                            <div className="tanitim-textbox">
                                <h2>Position Absolute Acı Pizza</h2>
                                <div className="tanitim-textbox2">
                                    <h3>4.9</h3>
                                    <div className="textbox2-group">
                                        <h3>(200)</h3>
                                        <h3><span className="fiyat">60₺</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tanitim">
                        <div className="tanitim-frame">
                            <img src="assets/iteration-2-aseets/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                            <div className="tanitim-textbox">
                                <h2>useEffect Tavuklu Burger</h2>
                                <div className="tanitim-textbox2">
                                    <h3>4.9</h3>
                                    <div className="textbox2-group">
                                        <h3>(200)</h3>
                                        <h3><span className="fiyat">60₺</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-first-frame">
                    <div className="footer-text-group-a1">
                        <div className="footer-text-group-a2">
                            <h2>Teknolojik Yemekler</h2>
                            <nav className="footer-nav">
                                <ul className="footer-nav-ul">
                                    <li className="footer-nav-li">
                                        <img src="assets/iteration-2-aseets/footer/icons/icon-1.png" alt="address" />
                                        <a className="footer-nav-a">341 Londonderry Road, Istanbul Türkiye</a>
                                    </li>
                                    <li className="footer-nav-li">
                                        <img src="assets/iteration-2-aseets/footer/icons/icon-2.png" alt="email" />
                                        <a className="footer-nav-a">aciktim@teknolojikyemekler.com</a>
                                    </li>
                                    <li className="footer-nav-li">
                                        <img src="assets/iteration-2-aseets/footer/icons/icon-3.png" alt="phone" />
                                        <a className="footer-nav-a">+90 216 123 45 67</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-text-group-b1">
                            <h3>Hot Menu</h3>
                            <nav className="footer-nav2">
                                <ul className="footer-nav2-ul">
                                    <li className="footer-nav2-li">Terminal Pizza</li>
                                    <li className="footer-nav2-li">5 Kişilik Hackathlon Pizza</li>
                                    <li className="footer-nav2-li">useEffect Tavuklu Pizza</li>
                                    <li className="footer-nav2-li">Beyaz Console Frosty</li>
                                    <li className="footer-nav2-li">Testler Geçti Mutlu Burger</li>
                                    <li className="footer-nav2-li">Position Absolute Acı Burger</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-instagram">
                            <h3>Instagram</h3>
                            <div className="footer-instagram-images">
                                <ul>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-0.png" alt="Instagram 1" /></li>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-1.png" alt="Instagram 2" /></li>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-2.png" alt="Instagram 3" /></li>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-3.png" alt="Instagram 4" /></li>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-4.png" alt="Instagram 5" /></li>
                                    <li><img src="assets/iteration-2-aseets/footer/insta/li-5.png" alt="Instagram 6" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-group">
                        <h4>© 2023 Teknolojik Yemekler.</h4>
                        <div className="x-logo">
                            <img src="./assets/iteration-2-aseets/footer/insta/logo-footer.svg" alt="logo-footer" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage