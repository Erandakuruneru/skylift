import React  from 'react';
import Copyright from './Copyright';
import * as constants from '../../constants';
const Footer = () => {
    let contactNavUrl = constants.URL_CONTACT;
    let aboutUsNavUrl = constants.URL_ABOUT_US;
    let whyChooseUsNavUrl = constants.URL_CHOOSE_US;
  return (
  <div>
    <section className="footer text-light">
        <div className="container">
            <div className="row" data-aos="fade-right">
                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className="">Skylift</h4>
                    </div>
                    <p className="py-3 para-light">SKYLIFT specializes in seamlessly designing end-to-end customized solutions to meet complex and rapidly evolving supply chain needs, whatever your sector or industry.</p>
                    <div className="d-flex">
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fab fa-facebook-f fa-2x py-2"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fab fa-twitter fa-2x py-2"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fab fa-instagram fa-2x py-2"></i>
                            </a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="py-2">Quick Links</h4>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href={aboutUsNavUrl}><p className="ms-3">About</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href={whyChooseUsNavUrl}><p className="ms-3">Why Choose us</p></a>
                        </div>
                        {/* <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Plans</p></a>
                        </div> */}
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href={contactNavUrl}><p className="ms-3">Contact</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="py-2">Useful Links</h4>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="privacy.html"><p className="ms-3">Privacy</p></a>
                            
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="terms.html"><p className="ms-3">Terms</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#your-link"><p className="ms-3">Disclaimer</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#your-link"><p className="ms-3">FAQ</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4>News Letter</h4>
                    </div>
                    <p className="py-3 para-light">Get our latest news & market updates delivered directly to your inbox.</p>
                    <div className="d-flex align-items-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email"/>
                            <button className="btn-secondary text-light"><i className="fas fa-envelope fa-lg"></i></button>       
                        </div>
                    </div>
                </div> 
            </div>
        </div> 
    </section>
    <Copyright/>
  </div>      
  );
};

export default Footer;
