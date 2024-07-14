import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaPhone } from "react-icons/fa6"
import { PiPhoneFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="container-fluid fixed-bottom footer  text-center">
                <div className="row">
                    <div className="col-md-4 col-12">Designed and Developed by Natasha Garg</div>
                    <div className="col-md-4 col-12">Copyright <sup><FaRegCopyright /></sup> 2024 NG</div>
                    <div className="col-md-4 col-12">
                        <div className="footer-icon d-flex justify-content-center align-items-center ">
                            <div className="footer-items ">
                            <Link to="https://www.linkedin.com/in/natasha-garg-65595125b/">
                                <FaLinkedinIn className='' />
                            </Link>
                            </div>
                            <div className="footer-items">
                            <Link to="https://github.com/natashagargn" >
                                <IoLogoGithub className='' />
                                </Link>
                            </div>
                            <div className="footer-items">
                            <Link to="mailto:natashagargn@gmail.com">
                                <BiLogoGmail className='' />
                            </Link>
                            </div>
                            <div className="footer-items">
                            <Link to="">
                                <FaPhone className='' />
                                </Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
