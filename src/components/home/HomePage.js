import React from "react";
import AboutUs from '../aboutUs/AboutUs'
import * as constants from '../../constants';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.navigateToSolutions = this.navigateToSolutions.bind(this);
  }

  navigateToSolutions(event) {
    let navURL = constants.URL_WAREHOUSE_SOLUTIONS;
    window.location = navURL;
  }
  render() {
    return (
      <div>
        <section className="home py-5 d-flex align-items-center" id="header">
          <div className="head-wrapper text-light py-5 pl-1" data-aos="fade-right">
            <h1 className="headline">
               DRIVING THE<span className="home_text"> FUTURE</span> OF LOGISTICS
            </h1>
            <div className="my-3 py-4">
                <button className="btn-secondary text-light" onClick ={this.navigateToSolutions}>Solutions</button>

            </div>
          </div>
        </section>
        <div className="bg-secondary">
        <div className="d-flex head-wrapper text-light">
              <h1 className="headline"  data-aos="fade-down">
                OUR CAPABILITIES
            </h1>
        </div>
        </div>


                


              {/* </div> */}
         {/* <AboutUs /> */}
         <section className="home-1 d-flex align-items-start text-light">
          <div className="container">

          <div className="row d-flex py-3 align-items-start">
            <div className="row" data-aos="fade-down">
                <div className="col-lg-4">
                    <div className="card bg-transparent px-4 min-height-1">
                        <h4 className="py-2">Warehousing and Distribution</h4>
                        {/* <p className="py-3">Complex, custom to no-frills warehousing</p> */}
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Complex, custom to no-frills warehousing</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Freight consolidation &amp; deconsolidation</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Specialized cargo handling</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Value added services (picking, packing, labelling &amp; tagging)</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Raw material &amp; finished goods storage</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Dangerous goods Storage</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Last leg value additions</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>In house BOI &amp; customs verification</p>
                        </div>
                        &nbsp;
                    </div>  
                </div>

                <div className="col-lg-4">
                    <div className="card bg-transparent px-4 min-height-1">
                        <h4 className="py-2">Transport & Freight</h4>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Dedicated value add centre</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Cold and Dangerous storage &amp; handling</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Temperature &amp; dust controlled environments</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Highjump WMS technology</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>24/7 security and CCTV</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Tier one WMS with business intelligence and analytics</p>
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    </div>  
                </div>
                
                <div className="col-lg-4">
                    <div className="card bg-transparent px-4 min-height-1">
                        <h4 className="py-2">Value Added Services</h4>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Dedicated value add centre</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Cold and Dangerous storage &amp; handling</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Temperature &amp; dust controlled environments</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Highjump WMS technology</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>24/7 security and CCTV</p>
                        </div>
                        <div className="block d-flex align-items-center">
                            <p className="pe-2"><i className="far fa-check-circle fa-1x"></i></p>
                            <p>Tier one WMS with business intelligence and analytics</p>
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    </div>  
                </div>
            </div>
            </div>
            </div>
            </section>



            <section className ="home-2 d-flex align-items-center py-1">
        <div className="container text-light">
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
                    <img className="img-fluid" src="./assets/images/work.jpg" alt="work"/>        
                </div>
                <div className="col-lg-5 d-flex align-items-center px-4 py-3 aos-init aos-animate" data-aos="">
                    <div className="row">
                        <div className="text-center text-lg-start py-4 pt-lg-0">
                            <h2 className="py-2">WE ARE IMPROVING SUPPLY CHAIN EVERY DAY</h2>
                            <p className="para-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
                        </div>
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="row g-5">
                                <div className="col-6 text-start">
                                    <i className="fas fa-briefcase fa-2x text-start"></i>
                                    <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1258" data-purecounter-duration="0">1258</h2>
                                    <p>WAREHOUSING CAPACITY</p>
                                </div>
                                <div className="col-6">
                                    <i className="fas fa-award fa-2x"></i>
                                    <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="0">150</h2>
                                    <p>LEADING COMPANIES</p>
                                </div>
                                <div className="col-6">
                                    <i className="fas fa-users fa-2x"></i>
                                    <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1255" data-purecounter-duration="0">1255</h2>
                                    <p>VEHICLE FLEET</p>
                                </div>
                                <div className="col-6">
                                    <i className="fas fa-clock fa-2x"></i>
                                    <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1157" data-purecounter-duration="0">1157</h2>
                                    <p>EMPLOYEES</p>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>





    <section className="contact d-flex align-items-center text-light py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p>Leading the way</p>
                <h2 className="py-2">A COMMITMENT TO EFFICIENT AND RESPONSIVE SUPPLY CHAINS</h2>
                <p className="py-2 para-light">
                if you require supply chain solutions SKYLIFT has the expertise to design innovative, 
                marketleading supply chain solutions.
                </p>  
                        <div className="my-3 py-5">
            <button className="btn-secondary text-light">Warehouse Solutions</button>
            &nbsp;
            <button className="btn-secondary text-light">Value Added Services</button>
          </div>

              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/trucks.png"
                  alt="about"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="home-3 home-bg img-fluid contact d-flex align-items-center text-light">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p>Leading the way</p>
                <h2 className="py-2">A COMMITMENT TO EFFICIENT AND RESPONSIVE SUPPLY CHAINS</h2>
                <p className="py-2 para-light">
                if you require supply chain solutions SKYLIFT has the expertise to design innovative, 
                marketleading supply chain solutions.
                </p>  
                        <div className="my-3 py-5">
            <button className="btn-secondary text-light">Warehouse Solutions</button>
            &nbsp;
            <button className="btn-secondary text-light">Value Added Services</button>
          </div>

              </div>

            </div>
          </div>
        </section>













      </div>
    );
  }
}

export default HomePage;
