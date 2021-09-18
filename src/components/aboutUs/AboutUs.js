import React from "react";
import Test from './Test';
class AboutUs extends React.Component {
  componentDidMount() {
    // document.body.classList.remove("menu-active");
    // document.body.classList.toggle("menu-active");
    // document.body.classList.toggle("menu-active",window.classList.contains("is-active"))
  }

  componentDidUpdate(){

  }
  render() {
    return (
      <div id="about">
    <Test/>
         
        <section className="about-our-company d-flex align-items-end text-light py-5 back-ground-black">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <h1>
                  Our Company <br />
                </h1>
                <p className="py-2 para-light">
                  SKYLIFT specializes in seamlessly designing end-to-end
                  customized solutions to meet complex and rapidly evolving
                  supply chain needs, whatever your sector or industry. Through
                  our lean culture and Operational Excellence, we meet the
                  demands for operational efficiency and flexibility in a
                  constantly changing world, to ensure no comprise to your
                  supply chain.
                </p>
                <p className="py-2 para-light">
                  Our focus is always on our clients, which is why we strive to
                  continuously innovate and grow, so that we can continue to
                  meet the demands of the fast-moving global marketplace. Our
                  ability to structure operations around customers’ KPIs and
                  robust industry experience help us stay focused on your
                  specific logistics needs and deliver value-added service.
                </p>

              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/about.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-our-vision d-flex align-items-start text-light">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <h1>
                Our Vision <br />
                </h1>
                <p className="py-2 para-light">
                  SKYLIFT specializes in seamlessly designing end-to-end
                  customized solutions to meet complex and rapidly evolving
                  supply chain needs, whatever your sector or industry. Through
                  our lean culture and Operational Excellence, we meet the
                  demands for operational efficiency and flexibility in a
                  constantly changing world, to ensure no comprise to your
                  supply chain.
                </p>
                <p className="py-2 para-light">
                  Our focus is always on our clients, which is why we strive to
                  continuously innovate and grow, so that we can continue to
                  meet the demands of the fast-moving global marketplace. Our
                  ability to structure operations around customers’ KPIs and
                  robust industry experience help us stay focused on your
                  specific logistics needs and deliver value-added service.
                </p>

              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/vision.jpg"
                  alt="vision"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-our-mission d-flex align-items-start text-light">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <h1>
                Our Mission <br />
                </h1>
                <p className="py-2 para-light">
                  SKYLIFT specializes in seamlessly designing end-to-end
                  customized solutions to meet complex and rapidly evolving
                  supply chain needs, whatever your sector or industry. Through
                  our lean culture and Operational Excellence, we meet the
                  demands for operational efficiency and flexibility in a
                  constantly changing world, to ensure no comprise to your
                  supply chain.
                </p>
                <p className="py-2 para-light">
                  Our focus is always on our clients, which is why we strive to
                  continuously innovate and grow, so that we can continue to
                  meet the demands of the fast-moving global marketplace. Our
                  ability to structure operations around customers’ KPIs and
                  robust industry experience help us stay focused on your
                  specific logistics needs and deliver value-added service.
                </p>

              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/mission.jpg"
                  alt="mission"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-our-values d-flex align-items-center text-light py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <h1>
                Our Values <br />
                </h1>
                <p className="py-2 para-light">
                  SKYLIFT specializes in seamlessly designing end-to-end
                  customized solutions to meet complex and rapidly evolving
                  supply chain needs, whatever your sector or industry. Through
                  our lean culture and Operational Excellence, we meet the
                  demands for operational efficiency and flexibility in a
                  constantly changing world, to ensure no comprise to your
                  supply chain.
                </p>
                <p className="py-2 para-light">
                  Our focus is always on our clients, which is why we strive to
                  continuously innovate and grow, so that we can continue to
                  meet the demands of the fast-moving global marketplace. Our
                  ability to structure operations around customers’ KPIs and
                  robust industry experience help us stay focused on your
                  specific logistics needs and deliver value-added service.
                </p>

              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/ourValue.jpg"
                  alt="ourValue"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="DirectorNote d-flex text-light py-5">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg" data-aos="fade-right">
                <h1>
                Director Note <br />
                </h1>
      
                <p className="py-2 para-light">
                  SKYLIFT specializes in seamlessly designing end-to-end
                  customized solutions to meet complex and rapidly evolving
                  supply chain needs, whatever your sector or industry. Through
                  our lean culture and Operational Excellence, we meet the
                  demands for operational efficiency and flexibility in a
                  constantly changing world, to ensure no comprise to your
                  supply chain.
                </p>
                <p className="py-2 para-light">
                  Our focus is always on our clients, which is why we strive to
                  continuously innovate and grow, so that we can continue to
                  meet the demands of the fast-moving global marketplace. Our
                  ability to structure operations around customers’ KPIs and
                  robust industry experience help us stay focused on your
                  specific logistics needs and deliver value-added service.
                </p>
            
              </div>
              {/* <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/about.jpg"
                  alt="about"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
