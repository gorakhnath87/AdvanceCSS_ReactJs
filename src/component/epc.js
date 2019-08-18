import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../image/epc2.jpg";
import image2 from "../image/epc.jpg";
import image3 from "../image/epc3.jpg";
import LogoBottom from "../layout/logoBottom";

const EPC = () => {
    return (
        <div>
        <div className="pages">
         <div class="pages__header">
                <h2 class="headingTwist">
                   <span className="heading-secondary1"> EPC</span>
                   
                    <span className="heading-secondary2"> Services</span>
                </h2>
                </div>
            <div className="row">
                <div className="col-1-of-2">
                    <span className=" paragraph-small paragraph-small__heading">
                    Engineering, Procurement and Construction
                    </span>

                    <p className="paragraph-small">
We have highly skilled and dedicated Engineering, Procurement and Construction Team , We provide our expertise in Power Generation, Transmission and Distribution Projects.
Our area of expertise in Solar Power Plant Project, Transmission Line Project, feeder separation, Sub Station, Rural Electrification Project, Under Ground Power Cabling , Street Lighting, Energy Meter.
     </p><p className="paragraph-small">
                       <span className="paragraph-small__heading">List of EPC services we provide</span> 
     <ul>
                            <li>Transmission Line</li>
                            <li>Substation</li>
                            <li>Automation</li>
                            <li>Distribution Line</li>
                            <li>TSS</li>
                        </ul>
                    </p>
                </div>
                <div className="col-1-of-2">
                <div className="pages__slider">
                <Carousel showStatus={false} infiniteLoop={true} autoPlay={true}   transitionTime={2000}  interval={2500}>
               
                <div className="pages__slider__img">
                    <img src={image1}  />
                </div>
                <div className="pages__slider__img">
                    <img src={image2}  />
                </div>
                <div className="pages__slider__img">
                    <img src={image3} />
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
export default EPC;