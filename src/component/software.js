import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../image/software.jpg";
import image3 from "../image/software2.jpg";
import image2 from "../image/software3.jpg";
import LogoBottom from "../layout/logoBottom";

const Software = () => {
    return (
        <div>
        <div className="pages">
         <div class="pages__header">
                <h2 class="headingTwist">
                   <span className="heading-secondary1"> Software</span>
                   
                    <span className="heading-secondary2"> Services</span>
                </h2>
                </div>
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph-small">
                        We provide services that are designed with the application of technical and business expertise to facilitate the technology uses for enterprises and end-users. IT services offer specialized technology-oriented solutions by combining the functions and processes of networks, telecommunications, software, hardware and electronics. These services can range from basic internet connectivity to large enterprise-wide applications. IT service providers include cloud providers, Application Service Providers (ASP), Internet Service Providers (ISP), and developers.
     </p><p className="paragraph-small">
                       <span className="paragraph-small__heading">List of software services we provide</span> 
     <ul>
                            <li>Development</li>
                            <li>Testing</li>
                            <li>Support</li>
                            <li>Cloud Computing</li>
                            <li>Maintenance</li>
                            <li>Artificial Intelligence</li>
                            <li>Web Security</li>
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
export default Software;