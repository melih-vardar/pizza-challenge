import React from 'react'
import HomeFooterNav from './HomeFooterNav';
import FooterMenu from './FooterMenu';
import FooterInstagram from './FooterInstagram';

function HomeFooter(props) {
    const { footerNavList, footerMenuList, footerInstagram } = props;
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