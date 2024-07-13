import React from 'react'
import education from './data/education.json'
function Education() {
  return (
    <>
    <div className='container'>
      <h1 className='text-center ed'>
      Education
      </h1>
      {
        education.map((data) => {
            return(
                <>
                <div key={data.id} className='text-center ed-items  ' data-aos="zoom-in" data-aos-duration="1000">
                    <div className="ed-content">

                    <h2 className='degree'>{data.Degree}</h2>
                    <h4>{data.uni}</h4>
                    <h5>{data.time}{" "}    {data.location}</h5>
                    <h6 className='marks'>{data.Marks}</h6>
                    </div>
                </div>
                </>
            )
        })
      }
    </div>
    </>
  )
}

export default Education
