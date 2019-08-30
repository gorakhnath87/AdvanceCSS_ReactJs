import React from 'react';
import bajajLogo from "../image/bajajLogo.jpg"
import monteCarlo from "../image/monteCarlo.svg";
import kec from "../image/KECLogo.jpg";
import irctc from "../image/indianRailway.webp";
import mpptcl from "../image/mpptcl.jpg";
import novous from "../image/NovousLogo.png";
import sakti from "../image/saktipump.png";
import logo from "../image/logo.png";
import logo7 from "../image/logo7.png";




const LogoBottom = () => {
    return (
        <div className="logoBottom">
           <div className="logoBottom__text"><span>Our client</span></div>

            <div className="logoBottom__image">
                <img src={logo}></img>
                <img src={logo7}></img>
                <img src={logo}></img>
                <img src={logo7}></img>
                
            </div>
        </div>
    )
}
export default LogoBottom;