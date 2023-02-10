import React from 'react'
import "./team.css"
import johnbhae from "../../Assets/Image/john.jpeg"
const JohnF = () => {
  return (
    <div className='py-5'><div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
                <img src={johnbhae} alt="..."/>
                {/* <img src="https://media.licdn.com/dms/image/C4D03AQFuyDy48P2inA/profile-displayphoto-shrink_800_800/0/1516572439224?e=1680134400&v=beta&t=Rd2JeRxyXUnuU00S9Krjn0uiyG_DO9CmdTzCKw3Q-Xs" alt="..."/> */}
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">John F Andrews </h3>
                        <span class="text-primary"> COO SharedLabs</span>
                    </div>
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i></a></li>
                        <li class="mb-3"><a href="#!"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i></a></li>
                        <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i></a></li>
                    </ul>
                    <ul class="social-icon-style2 ps-0">
                        <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#!"  class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
                <div class="mb-5 wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="h1 mb-0 text-primary">John F Andrews</h2>
                    </div>
                    <p>Mr. Andrews will be guiding us in building robust technology processes and a top notch technical team.</p>
                    <p class="mb-0">Andrews is currently the COO of SharedLABS a rapidly growing IT services and infrastructure organization.  Prior to SharedLabs, Andrews served as President & COO of Duos Technologies.  Before joining Duos, he was the EVP of business development and sales, and member of the board for ShipXpress, Inc, a SaaS based logistics software company, until he led the sale of the company to GE in 2016.  Before that he was the CEO of Evans Data Corporation, CEO of Giga Information Group, CIO for CSX Corporation, and President GTE Health Systems.  </p>

                    <p class="mb-0">Andrews has a BS in Business and Finance from Whitworth University and a Masters of Business Administration from University of Puget Sound.</p>
                    <p class="mb-0">Andrews has a BS in Business and Finance from Whitworth University and a Masters of Business Administration from University of Puget Sound.</p>
                    <p class="mb-0">Mr. Andrews is a senior executive with a record of success in achieving revenue, profit and business goals in early stage and large corporate environments both public and private. His success has spanned multiple industries to include telecommunications, health care, transportation and information technology.</p>
                </div>
               
            </div>
        </div>
    </div>
</div></div>
  )
}

export default JohnF