import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../image/solar.jpg";
import image2 from "../image/solar2.jpg";
import image3 from "../image/solar3.jpg";
import LogoBottom from "../layout/logoBottom";

const Solar = () => {
    return (
        <div>
        <div className="pages">
         <div class="pages__header">
                <h2 class="headingTwist">
                   <span className="heading-secondary1"> Solar</span>
                   
                    <span className="heading-secondary2"> Services</span>
                </h2>
                </div>
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph-small">
                    Solar Energy is a one of best green energy solution of our energy needs ,About 5,000 trillion kWh per year energy is incident over India's land area with most parts receiving 4-7 kWh per sq. m per day. This Energy can be made use in two ways Thermals modules for the generation of electricity or the production of heat  and Photovoltaic modules, convert sun light directly into electricity by certain material are able to absorb Photons  and liberate electron , generating an electric current that can be used in multipurpose such as lighting , Pumping and Generation of electricity.
We are working in Rooftop Photovoltaic modules, For most customers, residential or commercial, the roof is the best location for solar panel installation, Providing Two types of electricity generation solutions On-grid and off-Grid .
     </p><p className="paragraph-small">
                       <span className="paragraph-small__heading">List of solar services we provide</span> 
     <ul>
                            <li>Solar Pump</li>
                            <li>Solar Roofing</li>
                            <li>Solar Ground Mounted</li>
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
export default Solar;