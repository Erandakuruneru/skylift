import React from "react";

class SupplyChainSolutions extends React.Component {
  render() {
    return (
      <div id="about">
        <section className="about d-flex align-items-center text-light py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p><b>Supply Chain Solutions</b></p>
                {/* <h1>
                  Our Company <br />
                </h1> */}
                <p className="py-2 para-light">
                If you require supply chain solutions SKYLIFT has the expertise to design innovative, market-leading
                supply chain solutions. We also have a proven track record in successfully deploying people, assets
                and technology at market-leading levels of safety, quality, efficiency, effectiveness, integrity and
                social responsibility.
                </p>
                <p className="py-2 para-light">
                Wherever we operate, the SKYLIFT team shares a common vision to deliver service excellence and
                adaptable supply chain solutions.
                </p>
                <p><b>Warehouse Management System</b></p>
                <p className="py-2 para-light">
                The SKYLIFT Warehouse Management System (SWMS) integrates best practice processes designed
                for efficient and reliable warehousing operations across the industry. Combined with standard
                training and interfaces, the SWMS enables easy configuration and rapid integration with our
                customers’ existing systems.
                </p>
              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/supply-chain.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about d-flex align-items-center text-light py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p><b>Warehouse solutions</b></p>
                {/* <h1>
                  Our Company <br />
                </h1> */}
                <p className="py-2 para-light">
                SKYLIFT can build a warehouse, or a whole network. Our expertise can deliver a strategic warehouse
                solution with analysis and insights including:
                </p>
                
                <p className="py-2 para-light">
                <ol>
                <li>Automation solutions</li>
                <li>Racking configurations</li>
                <li>Simulated DC operations</li>
                <li>Simulated operational financial forecasts</li>
                <li>Distribution centre and warehouse design</li>
                <li>Evaluation of traffic flows within the facility</li>
                <li>Evaluation of storage capacity and options</li>
                <li>Analysis of labour, MHE, racking and carbon footprint data</li>
                <li>Generation of efficiency reports to assess labour and Materials Handling Equipment (MHE) </li>
                <li>Assessment of operating parameters e.g. receipt/put-away, replenish/pick and load/dispatch.</li>
              </ol> 
                </p>
              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/ware-house.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about d-flex align-items-center text-light py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p><b>Transport Management System</b></p>
                <p className="py-2 para-light">
                Efficient transport management is essential to the success of your business. The SKYLIFT Transport
                Management System (STMS) manages the transport of your goods from end-to-end with efficiency
                and visibility. The STMS combines standard training and interfaces to provide a transport
                management solution in a box.
                </p>
                <p><b>High Security Network</b></p>
                <p className="py-2 para-light">
                Strong supply chains must be able to withstand threats and recover quickly from disruption.
                SKYLIFT’s multi-layered approach to supply chain security enables us to promote the efficient
                movement of goods while maintaining a robust system that prevents risks and hazards. <br/>
                Our highly secure supply chain network is underpinned by:
                </p>
                
                <p className="py-2 para-light">
                <ol>
                <li>A culture of vigilance</li>
                <li>Comprehensive training</li>
                <li>A specialised security team</li>
                <li>Close tracking of drivers and fleet</li>
                <li>State-of-the-art data and IT systems</li>
                <li>Strict protocols, procedures, and policies</li>
                <li>Physical security at sites and warehouse</li>
                <li>Adherence to BOI applicable laws and regulations</li>
                <li>SKYLIFT is committed to the engagement and empowerment of all staff to ensure the ongoing
integrity of all operations. </li>

              </ol> 
                </p>
              </div>
              <div
                className="col-lg-5 text-center py-4 py-sm-0"
                data-aos="fade-down"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/transport.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default SupplyChainSolutions;
