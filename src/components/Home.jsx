import React, { useEffect, useRef } from 'react'
import resume from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'

function Home() {
  const typedRef =useRef(null)
  useEffect(() => {
    const options={
      strings : [
        "Welcome to my profile",
        "My Name is Natasha Garg",
        "I'm full Stack Web developer",
      ],
      typeSpeed :50,
      backSpeed : 50,
      loop: true,
    };
    const typed =new Typed(typedRef.current,options);
    return () => {
      typed.destroy();
    };
  },[]);
  return (
    <>
      <div className="container ">
        <div className="row home ">

          <div className="col-6 left hero-content " data-aos="fade-up-right" data-aos-duration="1000">
            <h2 ref={typedRef}></h2>
            <a href={resume} className="btn btn-outline-warning my-3" download="Natasha's resume">Download Resume</a>
          </div>
          <div className="col-1"></div>
          <div className="col-5 right hero-pic" data-aos="fade-up-left" data-aos-duration="1000">
            <div className="img">

              <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
