import React from "react";
import './main.css'

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container" id="mainContainer">
              <h5 className="card-title fs-1 ">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block">
                This is a wider card with supporting text below as a natural
                lead-in <br /> to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
