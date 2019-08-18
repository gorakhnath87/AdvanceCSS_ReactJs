import React from 'react';
import logo from '../image/logo.png';
import facebook from "../image/facebook.svg";
import twitter from "../image/twitter.png";
import linkedin from "../image/linkedin.svg";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div class="footer__logo-box">
                {/* <picture>
                        <source src="../" srcset="./img/logo-mobile.png 1x,./img/logo.png 2x" media="(max-width: 37.5rem" />
                        <img src="./img/logo-mobile.png" srcset="./img/logo-mobile.png 1x,./img/logo.png 2x" alt="logo" class="footer__logo" />
                    </picture> */}
                {/* <img srcset="./img/logo-mobile.png 1x,./img/logo.png 2x" alt="logo" class="footer__logo"/> */}
                <img src={logo} alt="logo" class="footer__logo" />
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <ul class="footer__navigation">
                        <li class="footer__item">
                            <Link to="/contact" class="footer__link">Contact</Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/about" class="footer__link">About</Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/" class="footer__link">Home</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-1-of-2">
                    <ul class="footer__navigation">
                        <li class="footer__item">
                            <a href="https://www.facebook.com/" target="_blank" class="footer__link"><img src={facebook}></img></a>
                        </li>
                        <li class="footer__item">
                            <a href="https://twitter.com/" target="_blank" class="footer__link"><img src={twitter}></img></a>
                        </li>
                        <li class="footer__item">
                            <a href="https://twitterlinkedin.com" target="_blank" class="footer__link"> <a href="#" class="footer__link"><img src={linkedin}></img></a></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}
export default Footer;