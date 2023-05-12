import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShowCase = () => {
  return (
     <section className="features">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
  
   <img className="img-logo" src='images/chair2.jpg' alt="chair"/>
    </div>
    <div class="carousel-item">
      
      <img className="img-logo" src='images/blacksofa.jpg' alt="sofa"/>
    </div>
    <div class="carousel-item">
    
     <img className='img-logo' src="images/bed.jpg" alt="chair2"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <Button variant='light mt-4 btn btn-outline-dark'>
      <Link to='/dashboard'>Show More</Link>
      </Button>
</div>
     </section>

  )
}

export default ShowCase