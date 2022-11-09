import React from 'react'

const Main = () => {
  // TODO: Add content to Homepage
  return (
    <main>
      <h3 className='text-center'>Fancy Quote Here <span>- Abraham Lincoln</span></h3>
      <section className='container'>
      <h2>See the Latest</h2>
        <div className='row'>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto2' src='/images/placeholder.png'></img>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto3' src='/images/placeholder.png'></img>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto1' src='/images/placeholder.png'></img>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto1' src='/images/placeholder.png'></img>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto1' src='/images/placeholder.png'></img>
          <img className='col-12 col-md-6 col-lg-4 mt-4' alt='samplePhoto1' src='/images/placeholder.png'></img>
        </div>
      </section>
    </main>
  )
}

export default Main