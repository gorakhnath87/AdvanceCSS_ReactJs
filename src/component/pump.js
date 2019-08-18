
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pump1 from "../image/pump1.jpg";
import pump2 from "../image/pump4.jpg";
import pump3 from "../image/pump3.jpg";
import LogoBottom from "../layout/logoBottom";

const Pump = () => {
    return (
        <div>
                    <div className="pages">
         <div class="pages__header">
                <h2 class="headingTwist">
                   <span className="heading-secondary1"> Pump</span>
                   
                    <span className="heading-secondary2"> Services</span>
                </h2>
                </div>
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph-small">
                        We are Authorised Distributors of HOMA Pumps Germany, VESTA Pumps Turkey and TERAL Pumps Japan. We are Service Partners of HOMA Pumps and Patterson Pumps.
    Expert staff dedicated to maintaining your equipment
    No impact on your head count
    Infrastructure savings at your site through the use of our service center facilities
    Enhanced performance, efficiency, and reliability through upgrades developed by our skilled specialists
     </p><p className="paragraph-small">
                       <span className="paragraph-small__heading">List of services provided</span> 
     <ul>
                            <li>Pump Installation</li>
                            <li>Erection</li>
                            <li>Testing</li>
                            <li>ommissioning of different types of pump sets and control panels</li>
                            <li>Repair of faulty systems</li>
                            <li>Spares Replacement and Retrofit</li>
                            <li>Major Overhauling</li>
                            <li>Inspection and Analysis of pumps</li>
                            <li>Annual maintenance contract</li>
                            <li>Laser Shaft Alignment</li>
                        </ul>

                    </p>

                </div>
                <div className="col-1-of-2">
                <div className="pages__slider">
                <Carousel showStatus={false} infiniteLoop={true} autoPlay={true}   transitionTime={2000}  interval={2500}>
               
                <div className="pages__slider__img">
                    <img src={pump1}  />
                </div>
                <div className="pages__slider__img">
                    <img src={pump2}  />
                </div>
                <div className="pages__slider__img">
                    <img src={pump3} />
                </div>
            </Carousel>
            </div>
                </div>
            </div>
        </div>
        <LogoBottom/>
        </div>
    )
}
export default Pump;