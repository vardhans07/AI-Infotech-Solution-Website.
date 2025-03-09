import React, { useEffect } from 'react';

function CarouselHome() {
  useEffect(() => {
    // Initialize the carousel after the component mounts
    const carouselElement = document.querySelector('#carouselExampleDark');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        ride: 'carousel', // Auto-slide
        interval: 5000,   // Default interval (5 seconds), override with data-bs-interval if needed
      });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/images/slide1.jpg" // Updated to actual image path
            className="d-block w-100"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Best computer systems .</p>
        
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="/images/slide2.jpg" // Updated to actual image path
            className="d-block w-100"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Best classroms .</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/slide3.jpg" // Updated to actual image path
            className="d-block w-100"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Updated Notes .</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselHome;