import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaPhone } from "react-icons/fa6"

function Contact() {
    return (
        <>
            <div className="container contact mb-5">
                <h1 className="heading-contact text-center mx-auto my-auto mb-4 mt-3">Contact Me
                </h1>
                    <h6 className="text-center mx-auto my-auto mb-4 mt-3 text-warning">Feel free to connect with me by Finding me on</h6>
                
                <div className="contact-icon d-flex justify-content-center align-items-center " data-aos="zoom-in-up" data-aos-duration="1000">
                    <a href="https://www.linkedin.com/in/natasha-garg-65595125b/" className="con-items ">
                        <FaLinkedin className='icon' />
                    </a>
                    <a href="mailto:natashagargn@gmail.com" className="con-items">
                        <MdOutlineMailOutline className='icon' />
                    </a>
                    <a href="" className="con-items">
                        <FaPhone className='icon' />
                    </a>
                    <a href="https://github.com/" className="con-items">
                        <IoLogoGithub className='icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact
