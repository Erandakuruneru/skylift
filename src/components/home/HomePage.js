import React from "react";
import AboutUs from '../aboutUs/AboutUs'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section className="home py-5 d-flex align-items-center" id="header">
          <div className="head-wrapper text-light py-5" data-aos="fade-right">
            <h1 className="headline">
              Best <span className="home_text">Logistic</span>
              <br />
              Partner For You
            </h1>
            {/* <p className="para para-light py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempore accusamus quis magnam doloremque itaque ad modi, pariatur iste labore similique officiis impedit aspernatur aperiam facere architecto. Eligendi, repellendus inventore!</p>
            <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-laptop-house fa-lg"></i></p>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-wifi fa-lg"></i></p>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div> */}
            {/* <div className="my-3">
                <a className="btn" href="#plans">View Plans</a>
            </div> */}
          </div>
        </section>
         <AboutUs />
      </div>
    );
  }
}

export default HomePage;
