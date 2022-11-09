import React from 'react'

const Carousel = () => {
  // TODO: Fix Carousel so pictures switch
  // https://getbootstrap.com/docs/4.0/components/carousel/

  return (
    <section id="carouselExampleControls" className="carousel slide" data-ride="carousel">

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

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  )
}

export default Carousel