import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <section className="section-home">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay={true} muted={true} loop={true}>
            <source src="/video/Not-Eiffel.webm" type="video/webm" />
            <source src="/video/Not-Eiffel.ogv" type="video/ogv" />
            your browser not supporting
                     </video>
        </div>
        <div className="section-home__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Welcome</span>
            <span className="heading-primary--sub">GN Company</span>
          </h1>
          <Link to="/about" className="btn btn--white-blue btn--animated">KNow More About US</Link>
        </div>
      </section>
      <section class="section-home-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-info"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Basic Info
            </h3>
              <p className="feature-box__text">
                We provide one stop solution for IT-Services, Pumps, Wastewater, Solar and EPC Projects. We provide all type of pumps with spares parts, Sewage Treatment Plant, Water treatment plant, Pumping Station, Solar Rooftop solution.
            </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-gunsight"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Our Vision
            </h3>
              <p className="feature-box__text">
              Our vision is to become the benchmark manufacturing company for the IT and Civil industry providing world-class products to satisfied customers through continuous improvement driven by the integrity, teamwork and creativity of our people.
            </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-target"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Our Target
            </h3>
              <p className="feature-box__text">
              Our Target is provide the platform for IT-Services, Pumps, Wastewater, Solar and EPC Projects. We target based solution for all type of pumps with spares parts, Sewage Treatment Plant, Water treatment plant, Pumping Station.
            </p>
            </div>
          </div>
     
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-globe"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                World Office
            </h3>
              <p className="feature-box__text">
              We are one of the fast growing startup company  and right now we have two offices around the world.Our offices are in India and  Dubai.We are planning to extends our services and to open the branch in different part of country.
            </p>
            </div>
          </div>

        </div>
       
      </section>
      
  

    </div>
  )
}
export default Home;