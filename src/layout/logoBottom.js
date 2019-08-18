import React from 'react';
import bajajLogo from "../image/bajajLogo.jpg"
import monteCarlo from "../image/monteCarlo.svg";
import kec from "../image/KECLogo.jpg";
import irctc from "../image/indianRailway.webp";
import mpptcl from "../image/mpptcl.jpg";
import novous from "../image/NovousLogo.png";
import sakti from "../image/saktipump.png";




const LogoBottom = () => {
    return (
        <div className="logoBottom">
           <div className="logoBottom__text"><span>Our client</span></div>

            <div className="logoBottom__image">
                <img src={bajajLogo}></img>
                <img src={monteCarlo}></img>
                <img src={kec}></img>
                <img src={irctc}></img>
                <img src={mpptcl}></img>
                <img src={novous}></img>
                <img src={sakti}></img>
                {/* <img src={logo}></img>
                <img src={logo}></img> */}
            </div>
        </div>
    )
}
export default LogoBottom;