import React from 'react';
import solar from "../image/solar3.jpg";
import pump from "../image/pump2.jpg";
import software from "../image/software2.jpg";
import sewage from "../image/sewage2.jpg";
import transmission from '../image/transmission.jpg';

const About = () => {
  return (
    <div>
    <section className="pages  u-margin-bottom-big">
      <div className="pages__header">
        <h2 class="headingTwist">
          <span className="heading-secondary1"> know</span>

          <span className="heading-secondary2"> about us</span>
        </h2>

      </div>
      <div className="row bottom-large-padding">
        <div className="col-1-of-2">
          <h3 className="heading-paragraph u-margin-bottom-small">
            GN EPC PRIVATE LIMITED
                    </h3>
          <p className="paragraph">
            GN EPC PVT. LTD. is a one stop solution for It-Services, Pumps, Wastewater, Solar and EPC Projects. We provide all type of pumps with spares parts, Sewage Treatment Plant, Water treatment plant, Pumping Station, Solar Rooftop solution for On Grid /Off Grid, Solar water pumps and street light, EPC for Power Transmission and distribution.
From Concept to Erection, Testing and Commissioning to Repair and Maintenance, Spare parts replacement everything is taken care by our expert. Our services are cost effective and provided by highly skilled and experienced professionals.
                   </p>

        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* 330w and 100w is the width  of the picture */}
            {/* <img srcset="./img/nature.jpg 300w, ./img/nature-large.jpeg 1000w"
                            sizes="(max-width: 56.25em) 20vw, 18.75em"
                            alt="photo" class="composition__photo composition__photo--p1"
                            src="./image/pump.png" /> */}
            <img src={sewage} className="composition__photo composition__photo--p1" alt="software" />
            {/* <img src={software} alt="pump" className="composition__photo composition__photo--p1"></img> */}
            <img src={pump} alt="solar" className="composition__photo composition__photo--p2" />
            <img src={solar} alt="pump" className="composition__photo composition__photo--p3" />
            <img src={software} alt="sewage" className="composition__photo composition__photo--p4" />
          </div>
        </div>
      </div>
      </section>
    <section className="pages  u-margin-bottom-big mainServices">
      <h4 className="heading-tertiary u-margin-bottom-medium">Main Services</h4>
      <div className="row">
        <div className="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front card__side--front--1">
              <div class="card__picture card__picture--1">
                &nbsp;
                                </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Services Software
                   </span>

              </h4>
              <div class="card__details">
                <ul>
                  <li>Cloud Computing</li>
                  <li>Development</li>
                  <li>Testing</li>
                  <li>Maintainance</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--1">
              <div class="card__cls">
                <div class="card__cls-text">
                  <p class="card__cls-text--1">
                    Know
                  </p>
                  <p class="card__cls-text--2">
                    more
                  </p>
                </div>
                <a href="/software" class="btn btn--white">Click</a>
              </div>>
               </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front card__side--front--2">
              <div class="card__picture card__picture--2">
                &nbsp;
                 </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Services Pumps
                   </span>

              </h4>
              <div class="card__details">
                <ul>
                  <li>Pump Installation</li>
                  <li>Erection</li>
                  <li>Testing</li>
                  <li>Repair</li>
                  <li>Spares Replacement</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--2">
              <div class="card__cls">
                <div class="card__cls-text">
                  <p class="card__cls-text--1">
                    Know
                     </p>
                  <p class="card__cls-text--2">
                    more
                     </p>
                </div>
                <a href="/pump" class="btn btn--white">Click</a>
              </div>>
               </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front card__side--front--3">
              <div class="card__picture card__picture--3">
                &nbsp;
                 </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Services Solar
                   </span>

              </h4>
              <div class="card__details">
                <ul>
                  <li>Solar Pumps</li>
                  <li>Solar Roof top</li>
                  <li>Solar Ground Mounted</li>
                  <li>Solar Street light</li>
                  <li>Rooftop Photovoltaic </li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--3">
              <div class="card__cls">
                <div class="card__cls-text">
                  <p class="card__cls-text--1">
                    Know
                     </p>
                  <p class="card__cls-text--2">
                    more
                     </p>
                </div>
                <a href="/solar" class="btn btn--white">Click</a>
              </div>>
               </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front card__side--front--4">
              <div class="card__picture card__picture--4">
                &nbsp;
                 </div>
                 <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Services ALLEPC
                   </span>

              </h4>
              <div class="card__details">
                <ul>
                  <li>Transmission Line</li>
                  <li>Substation</li>
                  <li>Automation</li>
                  <li>Distribution Line</li>
                  <li>TSS</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--4">
              <div class="card__cls">
                <div class="card__cls-text">
                  <p class="card__cls-text--1">
                    Know
                     </p>
                  <p class="card__cls-text--2">
                    more
                     </p>
                </div>
                <a href="/epc" class="btn btn--white">click</a>
              </div>>
               </div>
          </div>
        </div>

      </div>
      </section>
      </div>
  )
}

export default About;