import React from "react";

const TrackAndTrace = () => {
  return (
    <div>
      <section className="contact py-5 d-flex align-items-center" id="header">
        <div
          className="container text-light py-5 aos-init aos-animate"
          data-aos="fade-right"
        >
          <h1 className="headline">Track &amp; Trace</h1>
          {/* <p class="para para-light py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            tempore accusamus quis magnam doloremque itaque ad modi, pariatur
            iste labore similique officiis impedit aspernatur aperiam facere
            architecto. Eligendi, repellendus inventore!
          </p> */}
          <div className="d-flex align-items-center">
            {/* <p className="p-2">
              <i className="fas fa-laptop-house fa-lg"></i>
            </p> */}
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
            <input
              type="text"
              id={'Track'}
              name={'Track'}
              maxLength={100}
            //   onChange={onChange}
              required={false}
            />
          </div>
          {/* <div className="d-flex align-items-center">
            <p className="p-2">
              <i className="fas fa-wifi fa-lg"></i>
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div> */}
          <div className="my-3">
            <button className = 'btn-secondary text-light'>Search</button>
            {/* <a class="btn" href="#plans">
              View Plans
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default TrackAndTrace;
