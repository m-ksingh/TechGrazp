import React from 'react'
import "./team.css"

const OurTeam = () => {
  return (
    <div className='py-5'><div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
                {/* <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="..."/> */}
                <img src="https://media.licdn.com/dms/image/C4D03AQFuyDy48P2inA/profile-displayphoto-shrink_800_800/0/1516572439224?e=1680134400&v=beta&t=Rd2JeRxyXUnuU00S9Krjn0uiyG_DO9CmdTzCKw3Q-Xs" alt="..."/>
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">Niranjan Pandey</h3>
                        <span class="text-primary">CEO &amp; Founder</span>
                    </div>
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i></a></li>
                        <li class="mb-3"><a href="#!"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>+91 9731149585</a></li>
                        <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Bangalore</a></li>
                    </ul>
                    <ul class="social-icon-style2 ps-0">
                        <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/niranjanpandey/" target="_blank" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
                <div class="mb-5 wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="h1 mb-0 text-primary"> Niranjan Pandey</h2>
                    </div>
                    <p>A senior technology executive with over 17 years of experience leading web-scale end-user facing applications (Cloud and on-prem). He is an industry recognized technical expert in several areas including, web-scale application architectures, cloud computing, AI, BigData, DevOps to name a few.
Niranjan is accomplished author, facilitator and regularly presents, moderates at industry conferences. He is a hands-on architect who has delivered several highly available, scalable and reliable cloud solutions.
</p>
                    <p class="mb-0">Niranjan held several leadership positions as Country Head - IOT/AI, Country Head - Technology, Chief Architect at numerous tier1/tier2 organizations including get from Niranjan. </p>

                    <p class="mb-0">Niranjan has built numerous using a variety of technologies including Elastic, Logstash, Kibana, Apache Ignite, Apache Zeppelin, Apache Spark, Spark ML, Kaa framework and python.  For many of the initiatives he delivered the base open source code was modified under his guidance to meet specific requirements. </p>
                </div>
                <div class="mb-5 wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">Education</h2>
                    </div>
                    <div class="row mt-n4">
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Education</h3>
                                    {/* <p class="mb-0">University of defgtion, fecat complete ME of synage</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Career Start</h3>
                                    {/* <p class="mb-0">After complete engineer join HU Signage Ltd as a project manager</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Experience</h3>
                                    <p class="mb-0">17 years of experience leading web-scale end-user facing applications (Cloud and on-prem).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">Skills &amp; Experience</h2>
                    </div>
                    <p class="mb-4">Niranjan held several leadership positions as Country Head - IOT/AI, Country Head - Technology, Chief Architect at numerous tier1/tier2 organizations including get from Niranjan.

Niranjan has built numerous using a variety of technologies including Elastic, Logstash, Kibana, Apache Ignite, Apache Zeppelin, Apache Spark, Spark ML, Kaa framework and python. For many of the initiatives he delivered the base open source code was modified under his guidance to meet specific requirements.

</p>
                    {/* <div class="progress-style1">
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Wind Turbines</div>
                                <div class="col-6 text-end">70%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3 mb-4">
                            <div class="animated custom-bar progress-bar slideInLeft" style={{width:"70%" ,ariaValuemax:"100", ariaValuemin:"0"}} aria-valuenow="10" role="progressbar"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Solar Panels</div>
                                <div class="col-6 text-end">90%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3 mb-4">
                            <div class="animated custom-bar progress-bar bg-secondary slideInLeft" style={{width:"90%", ariaValuemax:"100" }}aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Hybrid Energy</div>
                                <div class="col-6 text-end">80%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3">
                            <div class="animated custom-bar progress-bar bg-dark slideInLeft" style={{width:"80%" ,ariaValuemax:"100", ariaValuemin:"0" }}aria-valuenow="70" role="progressbar"></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default OurTeam