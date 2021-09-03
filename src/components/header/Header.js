import React from 'react';
import * as constants from '../../constants';
// import Dropdown from './Dropdown';

const Header = () => {
    let homeNavUrl = constants.URL_HOME;
    let contactNavUrl = constants.URL_CONTACT;
    let aboutUsNavUrl = constants.URL_ABOUT_US;
    let whyChooseUsNavUrl = constants.URL_CHOOSE_US;
    let supplySolutionsNavUrl = constants.URL_SUPPLY_SOLUTIONS;
    let wareshouseSolutionsNavUrl = constants.URL_WAREHOUSE_SOLUTIONS;

    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
                <div className="head-wrapper">
                    <a href={homeNavUrl}>
                        <img className="logo-image" src="./assets/images/skyliftlogo.jpeg" alt="about" />
                    </a>

                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href={homeNavUrl}>Home</a>
                                {/* <a className="nav-link active" aria-current="page" href={homeNavUrl}>Home</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={aboutUsNavUrl}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={whyChooseUsNavUrl}>Why Choose Us</a>
                            </li>
                            {/* <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#plans">Plans</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="true" href="#">Drop</a>
                             <Dropdown/>
                    </li>
                    */}
                            <li className="nav-item">
                                <a className="nav-link" href={contactNavUrl}>Contact</a>
                            </li>
                            <li class="nav-item dropdown" aria-expanded="false">
                                <a class="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false" href="#">Solutions</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><a class="dropdown-item" href={supplySolutionsNavUrl}>Supply Chain Solutions</a></li>
                                    <li><div class="dropdown-divider"></div></li>
                                    <li><a class="dropdown-item" href={wareshouseSolutionsNavUrl}>Warehouse and Distribution</a></li>
                                    {/* <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li> */}
                                </ul>
                            </li>
                        </ul>
                        {/* <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                </span> */}
                    </div>
                </div>
            </nav>
            <div className="side-navbar">
                <ul className="side-navbar-menu text-center">
                    <li><a href="#">
                        <div><i className="fas fa-search"></i></div>
                        <div className="nav-name">Search</div>
                    </a>
                    </li>

                    <li><a href="#">
                        <div><i className="fas fa-map-marked-alt"></i></div>
                        <div className="nav-name">Track and Trace</div>
                    </a>
                    </li>

                    <li><a href="#">
                        <div><i className="far fa-file-alt"></i></div>
                        <div className="nav-name">Request a quote</div>
                    </a>
                    </li>


                    <li><a href="#">
                        <div><i className="far fa-user"></i></div>
                        <div className="nav-name">Customer resources</div>
                    </a>
                    </li>


                    <li><a href="#">
                        <div><i className="fas fa-hands-helping"></i></div>
                        <div className="nav-name">Join us</div>
                    </a>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Header;
