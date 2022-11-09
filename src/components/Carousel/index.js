import React from 'react'

const Carousel = () => {
  // TODO: Fix Carousel so pictures switch

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/images/placeholder.png" alt="First slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/placeholder2.png" alt="Second slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/placeholder3.png" alt="Third slide"></img>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel