import React, { useState } from 'react';
import '../index.css'; // Adjust the import path as necessary

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="row nav_bar">
        <div className="col-6 left nav_items">
          <div className="logo_NG">
            <h1 className="NG">NG</h1>
          </div>
          <h6 className="logo">Natasha Garg</h6>
        </div>
        <div className="col-6 right nav_items">
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'} {/* Unicode characters for hamburger and close icons */}
          </div>
          <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <a href="#" className="nav_items">Home</a>
            <a href="#" className="nav_items">Education</a>
            <a href="#" className="nav_items">Skills</a>
            <a href="#" className="nav_items">Projects</a>
            <a href="#" className="nav_items">Certifications</a>
            <a href="#" className="nav_items">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



// import React from 'react'

// function Navbar() {
//   return (
//     <>
//     {/* <div className="container-fluid nav_bar" data-aos="fade-down" data-aos-duration="1000">
//   <div className="row">
//     <div className="col-6 left nav_items">
//       <div className="logo_NG">
//         <h1 className='NG'>NG</h1>
//       </div>
//       <h6 className='logo'>Natasha Garg</h6>
//     </div>
//     <div className="col-6 d-md-none text-end">
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-12">
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <div className="d-md-flex justify-content-md-end">
//           <a href="#" className="nav_items">Home</a>
//           <a href="#" className="nav_items">Education</a>
//           <a href="#" className="nav_items">Skills</a>
//           <a href="#" className="nav_items">Projects</a>
//           <a href="#" className="nav_items">Certifications</a>
//           <a href="#" className="nav_items">Contact</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}

//     {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark" data-aos="fade-down" data-aos-duration="1000">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       <h1 className="NG">NG</h1>
//       <h6 className="logo">Natasha Garg</h6>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <a className="nav-link" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Education</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Skills</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Projects</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Certifications</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav> */}

// <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
//     <div className="row nav_bar">
//         <div className="col-6 left nav_items ">
//             <div className="logo_NG">
//                 <h1 className='NG'>NG</h1>
//             </div>
//             <h6 className='logo'>Natasha Garg</h6>
//         </div>
//         <div className="col-6 right nav_items">
//             <div className="hamburger" onclick="toggleMenu()">
//                 &#9776; 
//             </div>
//             <div className="menu">
//                 <a href="" className="nav_items">Home</a>
//                 <a href="" className="nav_items">Education</a>
//                 <a href="" className="nav_items">Skills</a>
//                 <a href="" className="nav_items">Projects</a>
//                 <a href="" className="nav_items">Certifications</a>
//                 <a href="" className="nav_items">Contact</a>
//             </div>
//         </div>
//     </div>
// </div>

//     </>
//   )
// }

// export default Navbar
