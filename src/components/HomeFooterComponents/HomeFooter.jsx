import React from 'react'
import HomeFooterNav from './HomeFooterNav';
import FooterMenu from './FooterMenu';
import FooterInstagram from './FooterInstagram';

const footerNavList = [
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-1.png",
        "alt": "adress",
        "name": "341 Londonderry Road, Istanbul Türkiye"
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-2.png",
        "alt": "email",
        "name": "aciktim@teknolojikyemekler.com"
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-3.png",
        "alt": "phone",
        "name": "+90 216 123 45 67"
    },
]

const footerMenuList = [
    "Terminal Pizza",
    "5 Kişilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz Console Frosty",
    "Testler Geçti Mutlu Burger",
    "Position Absolute Acı Burger"]

const footerInstagram = [
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-0.png",
        "alt": "Instagram-1",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-1.png",
        "alt": "Instagram-2",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-2.png",
        "alt": "Instagram-3",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-3.png",
        "alt": "Instagram-4",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-4.png",
        "alt": "Instagram-5",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-5.png",
        "alt": "Instagram-6",
    }
]
function HomeFooter() {


    return (
        <footer>
            <div className="footer-first-frame">
                <div className="footer-text-group-a1">
                    <div className="footer-text-group-a2">
                        <h2>Teknolojik Yemekler</h2>
                        <nav className="footer-nav">
                            <ul className="footer-nav-ul">
                                {footerNavList && footerNavList.map((data, index) => {
                                    return (
                                        <HomeFooterNav imgURL={data.imgURL} name={data.name} alt={data.alt} key={index} />
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-text-group-b1">
                        <h3>Hot Menu</h3>
                        <nav className="footer-nav2">
                            <ul className="footer-nav2-ul">
                                {footerMenuList && footerMenuList.map((data, index) => {
                                    return (
                                        <FooterMenu data={data} key={index} />
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-instagram">
                        <h3>Instagram</h3>
                        <div className="footer-instagram-images">
                            <ul>
                                {footerInstagram && footerInstagram.map((data, index) => {
                                    return (
                                        <FooterInstagram imgURL={data.imgURL} alt={data.alt} key={index} />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-group">
                    <h4>© 2023 Teknolojik Yemekler.</h4>
                    <div className="x-logo">
                        <img src=".\Assets\Iteration-1-assets\logonew.svg" alt="logo-footer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default HomeFooter