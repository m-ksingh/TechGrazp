import React, { useState, useEffect } from 'react';
import "../Css/Navbar.css";
import { Link } from "react-router-dom"

import { Helmet } from "react-helmet";

import $ from 'jquery';
function Navbar(props) {


  const [active, setActive] = useState('home')

  const scrollView = (id) => {
      try {
          setActive(id)
          var element = document.getElementById(id);
          element && element.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
          console.error("error occur on scrollView()", err)
      }
  }

 


  <script>
$(function() {
$(window).on("scroll", function() {
   if($(window).scrollTop() > 400) {
       $("header").addClass("newactive");
   } else {
       //remove the background property so it comes transparent again (defined in your css)
      $("header ").removeClass("newactive ");
   }
})
});
</script>

  return (
    < >
      
      

      <Helmet>
        <meta charSet="utf-8" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />


      </Helmet>
      
      <header >
   
        <a href="/" class="logo text-white">
          {/* <img src={alchemylogo} alt="Alchemy Solutions" height="80" /> */}
          <i class="fa fa-home px-1" aria-hidden="true"></i>Home
        </a>
       
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" style={{marginTop:"5px"}}>
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="arcs"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </label>
        <nav class="navbar">
          <ul>

          {/* <li><a href="/" ><i class="fa-solid fa-book-open px-1" ></i>Courses</a></li> */}
         
          
            <li><Link to="#" onClick={() => scrollView('whyus')}><i class="fa fa-user px-1" aria-hidden="true"></i>About us</Link></li>
            <li><Link to="#" onClick={() => scrollView('features')}><i class="fa fa-wrench faa-wrench animated px-1" aria-hidden="true"></i>Our Services</Link></li>
            <li><Link to="#" onClick={() => scrollView('team')}><i class="fa fa-group px-1" aria-hidden="true"></i>Our Team</Link></li>
            <li><Link to="#" onClick={() => scrollView('contact')}><i ></i><div className=' px-3' style={{border:"1px solid red", background:"#dc3545", borderRadius:"10px"}}>Contact us </div></Link></li>
   
     


            





          </ul>
        </nav>
      </header>

   

   
    </>
  )
}

export default Navbar
