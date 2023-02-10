import React from 'react'
import "./team.css"
import davidbhae from "../../Assets/Image/davidbhae.jpg"
const David = () => {
  return (
    <div className='py-5'><div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
                <img src={davidbhae} alt="..."/>
                {/* <img src="https://media.licdn.com/dms/image/C4D03AQFuyDy48P2inA/profile-displayphoto-shrink_800_800/0/1516572439224?e=1680134400&v=beta&t=Rd2JeRxyXUnuU00S9Krjn0uiyG_DO9CmdTzCKw3Q-Xs" alt="..."/> */}
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">David Coolidge </h3>
                        {/* <span class="text-primary"> COO SharedLabs</span> */}
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
                        <h2 class="h1 mb-0 text-primary">David Coolidge</h2>
                    </div>
                    <p>David will be guiding us to ensure our financial planning is on a sound footing.  He will also be guiding our business development.  </p>
                    <p class="mb-0">A seasoned corporate executive, David Coolidge’s career reflects many achievements spanning almost 30 years in progressive corporate and operating leadership roles first, and for 23 years, with the Bosch Group, an $80 billion, 350,000-employee leading global supplier of technology and services, and world’s largest automotive supplier.</p>

                    <p class="mb-0">David most recently served as President and Chief Executive Officer of Nivel Parts and Manufacturing Co., LLC. Nivel is the market leader in aftermarket parts and accessories for specialty vehicles (e.g., Golf Cars) and aftermarket powertrain components for off-highway heavy duty equipment (e.g., agricultural machines). </p>
                    <p class="mb-0">Prior to that, David served as Chief Executive Officer of Gearbox Holdings, Inc. Under the Raybestos, Allomatic and Steel Parts brands, Gearbox is a market leader known for innovation, quality and reliability in providing solutions for the world’s foremost aftermarket distributors, automotive OEMs, Tier I auto and industrial suppliers, heavy-duty transmission and wet-wheel brake manufacturers. Coolidge also served on the Board of Directors of Holley, a sister portfolio company.</p>
                    <p class="mb-0">At Bosch, David last served as Executive Vice President - Americas, one of four global division board members for the Bosch Group’s $6 billion global Automotive Aftermarket Division, and was headquartered at the Bosch Aftermarket facility in Broadview, IL. In 2009, he also had assumed co-responsibility for the global Braking Components business unit, and served as Chairman of Robert Bosch, Inc. - Canada, from 2003 to 2012.
Prior to his last position, Coolidge was Executive Vice President - North America of the Bosch Group’s global Automotive Aftermarket Division, and President of the North American Automotive Aftermarket Division. David served from 2004 to 2005 as the Automotive Aftermarket Division Vice President, aftermarket sales and supply chain management, and from 2001 to 2004, as Vice President, finance and administration.
Coolidge earned a BA in Economics from DePauw University, Greencastle, IN. He also received an MBA with concentrations in finance and marketing from the University of Illinois - Chicago, and a Master’s degree in Accounting from DePaul University, Chicago.
</p>
                </div>
               
            </div>
        </div>
    </div>
</div></div>
  )
}

export default David