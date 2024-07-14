import React from 'react'
import skills from './data/skills.json'
function Skills() {
    return (
        <>
            <div className="container skills  ">
                <h1 className='text-center heading mx-auto my-auto mb-5  '>
                    Skills
                </h1>

                <div className="skills-items d-flex justify-content-center align-items-center">
                    {
                        skills.map((data) => {
                            return (
                                <>

                                    <div key={data.title} className='' data-aos="flip-left" data-aos-duration="1000">
                                        <div className="sk-item ">
                                            <img src={`/assets/${data.imgSrc}`} alt="" />
                                            <h4 className='text-center pt-3'>{data.title}</h4>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </>
            )
}

            export default Skills
