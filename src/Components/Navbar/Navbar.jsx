// import React from 'react'
// import {Link} from 'react-router-dom';

// import { useState } from "react"

// import "./Navbar.css";


// const Nav = () => {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)
// return (

//   // <div>Navbar</div>
//   <nav className="navigation" id='position'>
//     <a href="/" className="brand-name">
//      Swachh Bharat
//     </a>
//     <button className="hamburger" onClick={() => {
//         setIsNavExpanded(!isNavExpanded)
//       }}>
//       {/* icon from heroicons.com */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="white"
//       >
//         <path
//           fillRule="evenodd"
//           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//     <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
//       <ul>
//         <li>
//           <Link to="/" className='nav-link' title=''>Home</Link>
//         </li>
//          <li>
//           <Link to="/concern" className='nav-link' title='qwerty'>Concern</Link>
//         </li> 
//         <li>
//           <Link to="/contactus" className='nav-link'>ContactUs</Link>
//         </li>
//         <li>
//           <Link to="/initiative" className='nav-link'>Initiative</Link>
//         </li>
//         <li>
//           <Link to="/collaboration" className='nav-link'>Collaboration</Link>
//         </li>

//       </ul>
//     </div>
//   </nav>
// )
// }

// export default Nav


//import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

import { useState } from "react"

const Navbar = () => {
  return (
    <div>
      <div class="wrap">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-12 col-md d-flex align-items-center">
              <p class="mb-0 phone"><span class="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span class="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
            </div>
            <div class="col-12 col-md d-flex justify-content-md-end">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
                  <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
                  <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
                  <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light nav-bg" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">Swachh<span>Bharat</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/"><a href="" class="nav-link">Home</a></Link>


              </li>
              <li class="nav-item">
                <Link to="/concern">
                  <a href="" class="nav-link">Concern</a>
                </Link>

              </li>
              <li class="nav-item">
                <Link to="/contactus">
                  <a href="" class="nav-link">Contact Us</a>
                </Link>

              </li>
              <li class="nav-item">
                <Link to="/initiative">
                  <a href="" class="nav-link">Initiative</a>
                </Link>

              </li>
              <li class="nav-item">
                <Link to="/collaboration">
                  <a href="" class="nav-link">Collaboration</a>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar