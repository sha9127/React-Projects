import React from 'react'
import amazonLogo from './logo/amazon.svg'
import flipkartLogo from './logo/flipkart.svg'
import shoe from './logo/shoe_image.svg'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
          <button className='shop'>Shop Now</button>
          <button className='category'>Category</button>
        </div>
        <div className='shopping'>
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazonLogo} alt="amazon-logo" />
            <img src={flipkartLogo} alt="flipkart-logo" />
          </div>

        </div>
        </div>
        <div className="hero-image">
          <img src={shoe} alt="shoe" />
        </div>
    </main>
  )
}

export default Hero