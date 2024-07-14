import React from 'react'
import projects from './data/projects.json'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
      <div className="container project">
        <h1 className="heading text-center mx-auto my-auto mb-5 ">Projects</h1>
        <div className="row">
          {projects.map((data) => {
            return (
              <>
                <div key={data.id} className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                  
                    <div className="card" style={{width: '18rem'}} data-aos="flip-right" data-aos-duration="1000">
                      <img src={`/assets/${data.imageSrc}`} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                          <h5 className="card-title">{data.title}</h5>
                         
                          <p className="card-text">{data.description}</p>
                          <div className="links text-center">
                            
                          <Link to={data.demo} className="btn btn-project mx-1"><i className="fas fa-link"></i> Visit Site</Link>
                          <Link to={data.source} className="btn btn-project mx-1"><i className="fab fa-github"></i> Github</Link>
                          </div>
                        </div>
                    </div>
                  
                </div>
              </>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Project
