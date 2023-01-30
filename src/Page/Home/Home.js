import React, { useState, useEffect } from 'react';
import "../../Component/Css/Home.css";
import "../../Component/Css/Whatwedo.css";
import "../../Component/Css/ourteam.css";

import { Link } from "react-router-dom";




//import  clintile








import Carousel from 'react-bootstrap/Carousel';

function Home() {

  
 
  return (
    <div >
      {/* <div class="p-5  bg-image header">
        <div class="mask" style={{ backgroundcolor: " rgba(0, 0, 0, 0.6)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3 text-center">Learn from one of India's Biggest IT Training Provider</h1>
              
              <div class="search">
                
                <input type="text" className='form-control' placeholder="Search From 500 + Courses"
                  onChange={e => onChangeHandler(e.target.value)}
                  value={courseName}
                />
                <button class="btn btn-primary">  <i class="fa fa-search"></i></button>
                {suggestions.length > 0 && courseName.length > 0 ?  suggestions.map((suggestion, i) =>
                    <div key={i} style={{ background: "white", padding: "5px 5px 5px 25px  " }}>
                        <Link to='/Courses'
                            state={{ from: suggestion }} >{suggestion.title}</Link>
                    </div>
                ): <div style={{padding: "5px 5px 5px 25px ", color:"#EFA47F"}}>{suggestions.length === 0 && courseName.length > 0 ? <p >Oops !! No Courses found. &nbsp;&#128528;</p> : ''}</div>
                }
              </div>
             
            </div>
          </div>
        </div>
      </div> */}
<div>
  
 <Carousel >

      <Carousel.Item>
        <img style={{height:"650px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="First slide"
        />
        <Carousel.Caption>


        <blockquote class="blockquote">
  <h1 class="mb-5 display-1 fw-bold lh-base"><q>Only 10% of system errors are user related. Rest from poor system design!</q></h1>
  <footer class="blockquote-footer text-white">Gallup</footer>
</blockquote>


          {/* <h3>80%+ of BI projects are a failure</h3>
          <p>•	Gartner, Gallup</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"650px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="Second slide"
        />

        <Carousel.Caption style={{top:"30%"}}>
         
        <blockquote class="blockquote">
  <h1 class="mb-5 display-1 fw-bold lh-base"><q>80%+ of BI projects are a failure</q></h1>
  <footer class="blockquote-footer text-white">Gartner, Gallup</footer>
</blockquote>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"650px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        <blockquote class="blockquote">
  <h1 class="mb-5  display-1 fw-bold lh-base "><q >Over 70% of ERP implementations are considered a failure</q></h1>
  <footer class="blockquote-footer text-white ">Gartner</footer>
</blockquote>

        </Carousel.Caption>
      </Carousel.Item>

    
    


    </Carousel>
</div>
{/* partner with us  */}


<div className='mainheading bckimage ' >
<h3 class=" section-title mb-2 py-2" style={{color:"#007b5e"}}>Partner with us to develop systems that increases user adoption rates.</h3>
<hr/>

<div class="wrapper1">
<div class="media">
<div class="layer">
    <p>BigData</p>
  </div>
<img src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?w=900&t=st=1674629310~exp=1674629910~hmac=7816c03c1c1452c4b96a0897bf1647eef05a29dcd7f12eb822df49bfa183ccde" alt=""  />
</div>
 <div class="media">
<div class="layer">
    <p>DevOps</p>
  </div>
<img src="https://img.freepik.com/free-photo/data-technology-blue-background-with-hacker-remixed-media_53876-108534.jpg?w=900&t=st=1674642975~exp=1674643575~hmac=058a808d35ff36e272abcf86a4451bdfc0e0939bd99ebf8c1dd48ddc726af211" alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>Engineering & Testing</p>
  </div>
<img src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?w=900&t=st=1674629310~exp=1674629910~hmac=7816c03c1c1452c4b96a0897bf1647eef05a29dcd7f12eb822df49bfa183ccde" alt="" />
</div>

</div>

<div class="wrapper1 ">
<div class="media">
<div class="layer">
    <p>	Software Solutions</p>
  </div>
<img src="https://img.freepik.com/free-photo/data-technology-blue-background-with-hacker-remixed-media_53876-108534.jpg?w=900&t=st=1674642975~exp=1674643575~hmac=058a808d35ff36e272abcf86a4451bdfc0e0939bd99ebf8c1dd48ddc726af211" alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>Data Cultivation</p>
  </div>
<img src="https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?w=900&t=st=1674643067~exp=1674643667~hmac=99cacca87fc546375b60b30a984f38161636c686fc69f76c6692e8f5fa16a5e5" alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>IoT Solutions</p>
  </div>
<img src="https://img.freepik.com/free-photo/data-technology-blue-background-with-hacker-remixed-media_53876-108534.jpg?w=900&t=st=1674642975~exp=1674643575~hmac=058a808d35ff36e272abcf86a4451bdfc0e0939bd99ebf8c1dd48ddc726af211" alt=""  />
</div>
</div>




	</div>


{/* why us */}
  <div className='container-fluid py-5 bckimage' >

    <div className='row'>
      <div className='col-lg-6 col-md-10'>
<img src="https://thumbs.dreamstime.com/b/why-choose-us-young-man-why-choose-us-young-man-dark-background-207751993.jpg" style={{borderRadius:"10px",boxShadow: "rgb(117 141 143) 0px 2px 2px 0px, rgb(117 141 143) 0px 2px 1px 0px "}} className='img-fluid'/>
</div>
<div className='col-lg-6'>
<h2 class=" section-title mb-2"style={{color:"#007b5e"}} >Why TechGrazp?</h2><hr/>
<br/>
<p className='Training  ' >• We don’t consider ourselves a technology company.  Our focus is more on how to answer business questions using technology.  Once this key question is answered clearly, which specific technologies to use becomes secondary.  </p>
<br/>
      <p className="Training  ">• One of the fundamental reason for a high failure rate of BI & Analytics and many general IT initiatives is to not focus on this first.   </p>
      <br/>
      <p className="Training "> • We won't bury you with jargon.  Instead we will tell you how we can organize your data better use the right technologies and 'grazp' your 'Tech' better.  </p>
     
     
     
</div>

    </div>

  </div>

{/* about  */}
<div id="whyus">
<section id="what-we-do" >
		<div class="container-fluid bckimage py-2">
			<h2 class="section-title mb-2 h1">About Us</h2>
			<p class="text-center text-muted h3 ">We don’t consider ourselves a technology company. Our focus is more on how to answer business</p>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-1">
							<h3 class="card-title">Vision</h3>
							<p class="card-text">Be the most trusted partner to bring business centric technology solutions which are actually used..</p>
              <p class="card-text"></p><br/><br/>

        
             
              
							{/* <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a> */}
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-2">
							<h3 class="card-title">Mission</h3>
							<p class="card-text">Enable the best success rates for customers technology journey, by offering  jargon free, best value, right fit data solutions to answer business questions by empowering and treating our team right.......</p>
              <p></p>
							{/* <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a> */}
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-3">
							<h3 class="card-title">Values</h3>
							<p class="card-text">Treat your Customer and team members like how you want to be treated.
 
 Listen and Learn from your Customer.
  
 Fail. Learn. Innovate. Succeed.
 .</p>
 <p class="card-text"></p><br/>


							{/* <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a> */}
						</div>
					</div>
				</div>
			</div>
			{/* <div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">Special title</h3>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-5">
							<h3 class="card-title">Special title</h3>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Special title</h3>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
			</div> */}
		</div>	
	</section>
  </div>


  {/* our team */}

  <section id="team" >
    <div class="container py-3 bckimage">
        <h5 class="section-title h1">Who we are</h5>
        <p class="text-center h3 pb-5 ">TechGrazp was founded by people who spent their careers providing solutions across a wide variety of domains with numerous successful implementations across a broad spectrum of related technologies. </p>
        <div class="row">
        
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://media.licdn.com/dms/image/C4D03AQGGjF6kn_WpUQ/profile-displayphoto-shrink_800_800/0/1581903352007?e=1680739200&v=beta&t=vVlOBWbZsTAUyEoEpNiOKrzb_G__-wS6WtJOq7ATlHA" alt="card image"/></p>
                                    <h4 class="card-title ">Sanjay Tumula</h4>
                                    <p class="card-text">A senior technology executive with a background in Civil Engineering and Computer Science, Sanjay spent majority of his career in leadership positions with top tier consulting and fortune 100 companies..</p>
                                    <p class="card-text py-1">With over 28 years of experience, he has worked across a broad spectrum of technology domains in various capacities in consulting, product and corporate organizations.</p>
                                    {/* <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside ">
                            <div class="card py-4">
                                <div class="card-body text-center mt-4">
                             
                                    <h4 class="card-title">Sanjay Tumula</h4>
                                    <p class="card-text">A senior technology executive with a background in Civil Engineering and Computer Science, Sanjay spent majority of his career in leadership positions with top tier consulting and fortune 100 companies..</p>
                                    <p class="card-text pb-3">With over 28 years of experience, he has worked across a broad spectrum of technology domains in various capacities in consulting, product and corporate organizations.</p>
                                    {/* <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                    	<Link to="/ourteam-tumula" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://media.licdn.com/dms/image/C4D03AQFuyDy48P2inA/profile-displayphoto-shrink_800_800/0/1516572439224?e=1680134400&v=beta&t=Rd2JeRxyXUnuU00S9Krjn0uiyG_DO9CmdTzCKw3Q-Xs" alt="card image"/></p>
                                    <h4 class="card-title">Niranjan Pandey</h4>
                                    <p class="card-text">A senior technology executive with over 17 years of experience leading web-scale end-user facing applications (Cloud and on-prem). He is an industry recognized technical expert in several areas including, web-scale application architectures, cloud computing, AI, BigData, DevOps to name a few.
Niranjan is accomplished author, facilitator and regularly presents, moderates at industry conferences. He is a hands-on architect who has delivered several highly available, scalable and reliable cloud solutions.
</p>
                                  
                                    {/* <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card py-3">
                                <div class="card-body text-center mt-4">
                                <p></p>
                                <h4 class="card-title">Niranjan Pandey</h4>
                                    <p class="card-text">A senior technology executive with over 17 years of experience leading web-scale end-user facing applications (Cloud and on-prem). He is an industry recognized technical expert in several areas including, web-scale application architectures, cloud computing, AI, BigData, DevOps to name a few.
Niranjan is accomplished author, facilitator and regularly presents, moderates at industry conferences. He is a hands-on architect who has delivered several highly available, scalable and reliable cloud solutions.
</p>
                                    {/* <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                           <Link to="/ourTeam" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            {/* <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png" alt="card image"/></p>
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png" alt="card image"/></p>
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          

        </div>
    </div>
</section>




















  <section   id="features" >
  <div  style={{ background: "#E7EEF0" }} >
  
   <div className=' pb-1 bckimage '  >
   <div className='container'>
   <h5 class=" section-title mb-2 h1 " style={{color:"#007b5e"}}>What Do We Do ?</h5>

     <p className='Training ' >• Our team is technology agnostic while bringing considerable depth in multiple technologies.</p>
      <p className="Training  ">• We provide a comprehensive suite of technology services.  </p>

      <p className="Training ">• Increasingly data and analytics are playing a critical role in providing an edge to successful organizations.  All our offerings are tailored around this reality.</p>
      <p  className="Training  ">•
      Let us help you develop solutions with a higher adoption rates in your organization.
      </p>
     </div>




   <div className='container  '>
    
   <h4 className="Training fw-bold" >Software Solutions</h4>
   <p className='Training ' >With the rapid pace of technology changes, enterprises of all sizes from startups to large multinational are finding it difficult to keep pace. </p>
      <p className="Training">CIOs and IT heads today are continually trying to ensure that Enterprise applications deliver business values with minimum change
 
 Our solution frameworks are based on cutting edge contemporary technologies. We provide hassle free solution development to your business problem backed up by top-tier post-implementation support and regular updates/upgrades to keep you ahead of competition.
  </p>
      <p className="Training ">We specialize in providing platform development solutions for startups who don’t want to burn a lot of money building large development teams.</p>
      <h4  className="Training fw-bold ">
      Our Software Solutions Offerings includes:
      </h4>
      <hr/>
      <p className="Training  ">•	Enterprise Portal Solution (?)</p>
      <p className="Training  ">•	Business Process Management</p>
      <p className="Training ">•	Robotic Process Automation</p>

      <p className="Training">•	Migration of Legacy application to modern frameworks</p>
      <p className="Training ">•	Legacy software (ERP) implementations</p>
      <p className="Training ">•	Legacy BI implementations</p>

      <div className='row '>
        <div className='col-lg-6 col-md-10'>
        <h4  className="Training fw-bold ">
      Devops:
      </h4>
      <p className="Training ">DevOps has been a buzzword for a few years now.  However, there are very few companies who have successfully implemented DevOps into their operations.  There is more to DevOps than implementing a new software of process.  It entails a change in culture.</p>
      <p className="Training ">Our unique DevOps implementation offering enables enterprises to adopt and have cultural shift to enable DevOps principles that benefits them by:</p>

      <p className="Training ">•	Reducing Time to Market</p>

      <p className="Training ">•	Increase Team Productivity</p>
      <p className="Training ">•	Early Risk Identification and defect minimization</p>
      <p className="Training ">•	Stable and Secure Change management</p>
        </div>
        <div className='col-lg-6 col-md-10'>
        <h4  className="Training fw-bold ">
        Data Cultivation:
      </h4>
      <p className="Training ">The rate at which data is being collected in growing exponentially.  Making sense of this data is a challenge for most organizations large and small.</p>
      <p className="Training  ">TechGrazp unlocks hidden opportunities and insights by providing granular identity to data and identifying business value of data. We 'cultivate' the data so you can focus on the business outcome.</p>
      <p className="Training ">Owing to our extensive experience in all things data and analytics we make understanding your data easy.</p>
</div>
      </div>

<hr/>
      <div className='row'>
        <div className='col-lg-6 col-md-10'>
        <h4  className="Training fw-bold ">
        IoT Solutions:
      </h4>
      <p className="Training  ">From homes and industries to enterprises, Internet of Things have become commonplace in all walks of life. Connecting everything and everyone, IoT is making the world smarter and better than ever before. However, this is just the beginning. Unlocking the full potential of Internet of Things requires that businesses understand the opportunities for value creation and systematically address the underlying challenges.</p>
      <p className="Training  ">Our end-to-end IoT solutions empower smart industries, smart living and smart enterprises and deliver connected experiences by connecting assets, operations/logistics, and services. While we have expertise across all stages of IoT adoption to provide you with a seamless single vendor experience to maximize efficiencies, we focus predominantly on the segments mentioned below:</p>

      <p className="Training  ">•	Smart Industries – Manufacturing, Energy, Utilities. Re-imagine processes to unlock the true potential of your industry while facilitating sustainable development.</p>

      <p className="Training  ">•	Smart Living – Wearables, Healthcare, Security. Enhance the quality of life by embracing emerging technologies designed to foster healthier, happier and safe environment.</p>
      <p className="Training ">•	Smart Enterprises – Smart homes/ Buildings/ Offices, Retail. Connect people, machines and information using Big Data to enhance business efficiency in a secured ecosystem.</p>
   
        </div>
        <div className='col-lg-6 col-md-10'>
        <h4  className="Training fw-bold ">
        BigData:
      </h4>
      <p className="Training ">Most organizations grapple with enormous amounts of data every day, trying to figure out an information management strategy that could accelerate the flow of insight. This significantly complicates their big data solutions, increasing the cost of implementation and upkeep. However, big data engineering is not about using every bit of data originating from every source, it’s about making the smart decisions that accelerate business growth.</p>
      <p className="Training ">DataGrazp enables organizations to conceptualize and implement a well-thought-out big data program across multiple domains and focus areas. We help our clients account for scale and platform readiness while developing Big Data Engineering capabilities to drive vision and value.</p>
      
</div>
      </div>
   </div>
      
      </div>




      
      </div>
  </section>


      {/* body */}













     

    </div>
  )
}

export default Home

