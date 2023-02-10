import React, { useState, useEffect } from 'react';
import "../../Component/Css/Home.css";
import "../../Component/Css/Whatwedo.css";
import "../../Component/Css/ourteam.css";
import "../../Component/Css/Contactus.css";
import { Link } from "react-router-dom";
import johnbhae from "../../Assets/Image/john.jpeg"
import davidbhae from "../../Assets/Image/davidbhae.jpg"



//import  clintile








import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Navbar from '../../Component/Navbar/Navbar';

function Home() {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[message,setMessage]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(name,email,phone,message);
  const data ={
    Name:name,
    Email:email,
    Phone:phone,
    Message:message
  }
  axios.post('https://sheet.best/api/sheets/d358dede-13a4-4d22-9f07-88b4d6ae557a',data).then((response)=>{
    console.log(response);
    alert('Thank you for filling out the form')
    // clearing form field
    setName('');
    setEmail('');
    setPhone('');
    setMessage('')
  })
}

  return (
    <div >
      <Navbar/>
     
<div>
  
 <Carousel >

      <Carousel.Item>
        <img style={{height:"660px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="First slide"
        />
        <Carousel.Caption >


        <blockquote class="blockquote" style={{fontfamily: "Helvetica Now Display, Helvetica Now Display, Sans-serif"}}>
  <h1 class="mb-5 display-1 fw-bold lh-base" ><q>Only 10% of system errors are user related. Rest from poor system design!</q></h1>
  <footer class="blockquote-footer text-white">Gallup</footer>
</blockquote>


          {/* <h3>80%+ of BI projects are a failure</h3>
          <p>•	Gartner, Gallup</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"660px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="Second slide"
        />

        <Carousel.Caption style={{top:"30%"}}>
         
        <blockquote class="blockquote" style={{fontfamily: "Helvetica Now Display, Helvetica Now Display, Sans-serif"}}>
  <h1 class="mb-5 display-1 fw-bold lh-base"><q>80%+ of BI projects are a failure</q></h1>
  <footer class="blockquote-footer text-white">Gartner, Gallup</footer>
</blockquote>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"660px"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=900&t=st=1674639622~exp=1674640222~hmac=95947a69600ff09093766fd89d98ae8cf77e71c2b3b3c77b0e815f81c23968c5"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        <blockquote class="blockquote" style={{fontfamily: "Helvetica Now Display, Helvetica Now Display, Sans-serif"}}>
  <h1 class="mb-5  display-1 fw-bold lh-base " ><q className='impl'>Over 70% of ERP implementations are considered a failure</q></h1>
  <footer class="blockquote-footer text-white ">Gartner</footer>
</blockquote>

        </Carousel.Caption>
      </Carousel.Item>

    
    


    </Carousel>
</div>
{/* partner with us  */}

<section   id="features" >

  
<div className=' pt-5  '  >
<div className='container'>
<h5 class=" section-title h1 " style={{color:"#007b5e"}}>What Do We Do ?</h5>

  <p className='Training ' style={{fontSize:"22px"}} >• Our team is technology agnostic while bringing considerable depth in multiple technologies.</p>
   <p className="Training  " style={{fontSize:"22px"}} >• We provide a comprehensive suite of technology services.  </p>

   <p className="Training " style={{fontSize:"22px"}} >• Increasingly data and analytics are playing a critical role in providing an edge to successful organizations.  All our offerings are tailored around this reality.</p>
   <p  className="Training  " style={{fontSize:"22px"}} >•
   Let us help you develop solutions with a higher adoption rates in your organization.
   </p>
  </div>


  <div >
<section id="what-we-do" >
 <div class="container-fluid bckimage py-5 mt-5">
   {/* <h2 class="section-title mb-2 h1">About Us</h2>
   <p class="text-center text-muted h3 ">We don’t consider ourselves a technology company. Our focus is more on how to answer business</p> */}
   <div class="row">
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-1">
           <h3 class="card-title">Software Solutions</h3>
           <p class="card-text">With the rapid pace of technology changes, enterprises of all sizes from startups to large multinational are finding it difficult to keep pace.</p>
           <p class="card-text"></p>

     
          
           
           <a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
         </div>
       </div>
     </div>
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-2">
           <h3 class="card-title">Devops</h3>
           <p class="card-text">DevOps has been a buzzword for a few years now.  However, there are very few companies who have successfully implemented DevOps into their operations. </p>
           <p></p>
           <a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg1" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
         </div>
       </div>
     </div>
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-3">
           <h3 class="card-title">Data Cultivation</h3>
           <p class="card-text">The rate at which data is being collected in growing exponentially.  Making sense of this data is a challenge for most organizations large and small.</p>
<p class="card-text"></p>

<a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg2" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
         </div>
       </div>
     </div>
   </div>
   <div class="row mt-3">
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-4">
           <h3 class="card-title">IoT Solutions</h3>
           <p class="card-text">From homes and industries to enterprises, Internet of Things have become commonplace in all walks of life.Connecting everything and everyone,</p>
          
           <a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg3" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-3"></i></a>
         </div>
       </div>
     </div>
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-5">
           <h3 class="card-title"> BigData</h3>
           <p class="card-text">Most organizations grapple with enormous amounts of data every day.trying to figure out an information management strategy </p>
           <a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg4" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-3"></i></a>
         </div>
       </div>
     </div>
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
       <div class="card" style={{border:"none"}}>
         <div class="card-block c-6">
           <h3 class="card-title">Engineering & Testing</h3>
           <p class="card-text">It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest</p>
      
           <a href="#!" type="button" class="read-more" data-toggle="modal" data-target=".bd-example-modal-lg5" title="Read more"  >Read more<i class="fa fa-angle-double-right ml-3"></i></a>
         </div>
       </div>
     </div>
   </div>
 </div>	
</section>
</div>




{/* software solution modal */}
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
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
    </div>
 </div>
</div>
</div>


{/* Devops modal */}



<div class="modal fade bd-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
 <div className='container  '>

 <div className='row '>
     
     <h4  className="Training fw-bold ">
   Devops
   </h4>
   <p className="Training ">DevOps has been a buzzword for a few years now.  However, there are very few companies who have successfully implemented DevOps into their operations.  There is more to DevOps than implementing a new software of process.  It entails a change in culture.</p>
   <p className="Training ">Our unique DevOps implementation offering enables enterprises to adopt and have cultural shift to enable DevOps principles that benefits them by:</p>

   <p className="Training ">•	Reducing Time to Market</p>

   <p className="Training ">•	Increase Team Productivity</p>
   <p className="Training ">•	Early Risk Identification and defect minimization</p>
   <p className="Training ">•	Stable and Secure Change management</p>
     </div>
    
   </div>
 </div>
</div>
</div>




{/* Dataculti MODAL */}


<div class="modal fade bd-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
 <div className='container  '>

 <div className='row '>
     
 <h4  className="Training fw-bold ">
     Data Cultivation
   </h4>
   <p className="Training ">The rate at which data is being collected in growing exponentially.  Making sense of this data is a challenge for most organizations large and small.</p>
   <p className="Training  ">TechGrazp unlocks hidden opportunities and insights by providing granular identity to data and identifying business value of data. We 'cultivate' the data so you can focus on the business outcome.</p>
   <p className="Training ">Owing to our extensive experience in all things data and analytics we make understanding your data easy.</p>
     </div>
    
   </div>
 </div>
</div>
</div>


{/* IOT MODAL */}


<div class="modal fade bd-example-modal-lg3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
 <div className='container  '>

 <div className='row '>
     
 <h4  className="Training fw-bold ">
     IoT Solutions
   </h4>
   <p className="Training  ">From homes and industries to enterprises, Internet of Things have become commonplace in all walks of life. Connecting everything and everyone, IoT is making the world smarter and better than ever before. However, this is just the beginning. Unlocking the full potential of Internet of Things requires that businesses understand the opportunities for value creation and systematically address the underlying challenges.</p>
   <p className="Training  ">Our end-to-end IoT solutions empower smart industries, smart living and smart enterprises and deliver connected experiences by connecting assets, operations/logistics, and services. While we have expertise across all stages of IoT adoption to provide you with a seamless single vendor experience to maximize efficiencies, we focus predominantly on the segments mentioned below:</p>

   <p className="Training  ">•	Smart Industries – Manufacturing, Energy, Utilities. Re-imagine processes to unlock the true potential of your industry while facilitating sustainable development.</p>

   <p className="Training  ">•	Smart Living – Wearables, Healthcare, Security. Enhance the quality of life by embracing emerging technologies designed to foster healthier, happier and safe environment.</p>
   <p className="Training ">•	Smart Enterprises – Smart homes/ Buildings/ Offices, Retail. Connect people, machines and information using Big Data to enhance business efficiency in a secured ecosystem.</p>
     </div>
    
   </div>
 </div>
</div>
</div>


{/* bIG dATA MODAL */}

<div class="modal fade bd-example-modal-lg4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
 <div className='container  '>

 <div className='row '>
 <h4  className="Training fw-bold ">
     BigData
   </h4>
   <p className="Training ">Most organizations grapple with enormous amounts of data every day, trying to figure out an information management strategy that could accelerate the flow of insight. This significantly complicates their big data solutions, increasing the cost of implementation and upkeep. However, big data engineering is not about using every bit of data originating from every source, it’s about making the smart decisions that accelerate business growth.</p>
   <p className="Training ">DataGrazp enables organizations to conceptualize and implement a well-thought-out big data program across multiple domains and focus areas. We help our clients account for scale and platform readiness while developing Big Data Engineering capabilities to drive vision and value.</p>
     </div>
    
   </div>
 </div>
</div>
</div>

{/* Engineering and testing */}
<div class="modal fade bd-example-modal-lg5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
 <div class="modal-content">
 <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"></h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
 <div className='container  '>

 <div className='row '>
 <h4  className="Training fw-bold ">
 Engineering & Testing
   </h4>
   <p className="Training ">It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest</p>
   <hr/>
   <h4  className="Training fw-bold ">
   Why Software Testing is Important?
    </h4>
   
   <p className="Training ">Software Testing is Important because if there are any bugs or errors in the software, it can be identified early and can be solved before delivery of the software product. Properly tested software product ensures reliability, security and high performance which further results in time saving, cost effectiveness and customer satisfaction.</p>

   <hr/>
   <h4  className="Training fw-bold ">
   What is the need of Testing?
    </h4>
    
   <p className="Training ">Testing is important because software bugs could be expensive or even dangerous. Software bugs can potentially cause monetary and human loss.</p>
     </div>
    
   </div>
 </div>
</div>
</div>









   





   
   </div>
</section>



{/* why us */}
  <div className='container-fluid ' >
 
  
    <div className='row'>
    <h2 class=" section-title text-center mb-2 py-5"style={{color:"#007b5e"}} >Why TechGrazp?</h2>
      <div className='col-lg-5 col-md-10'>
<img src="https://thumbs.dreamstime.com/b/why-choose-us-young-man-why-choose-us-young-man-dark-background-207751993.jpg"  style={{borderRadius:"10px",boxShadow: "rgb(117 141 143) 0px 2px 2px 0px, rgb(117 141 143) 0px 2px 1px 0px "}} className='img-fluid'/>
</div>
<div className='col-lg-7'>

<br/>
<p className='Training  ' >• We don’t consider ourselves a technology company.  Our focus is more on how to answer business questions using technology.  Once this key question is answered clearly, which specific technologies to use becomes secondary.  </p>
<br/>
      <p className="Training  ">• One of the fundamental reason for a high failure rate of BI & Analytics and many general IT initiatives is to not focus on this first.   </p>
      <br/>
      <p className="Training "> • We won't bury you with jargon.  Instead we will tell you how we can organize your data better use the right technologies and 'grazp' your 'Tech' better.  </p><br/>

      <p className="Training ">• TechGrazp was founded by people who spent their careers providing solutions across a wide variety of domains with numerous successful implementations across a broad spectrum of related technologies.</p>
     
     
     
</div>

    </div>

  </div>

{/* about  */}
<div id="whyus">
<section id="what-we-do" >
		<div class="container-fluid  py-5">
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
			
		</div>	
	</section>
  </div>


  {/* our team */}


{/* advisoryboard */}


<div className='container-fluid my-3' id="team">


              <div class="row">
                <div class="col-xs-12 ">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Our Team</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Advisory Board</a>
                     
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                   


<section id="team"  >
  <div class="container py-3 ">
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
                                  
                         <Link to="/ourTeam" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
          
        

      </div>
     



  </div>
</section>

</div>
                    
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <section id="team" >
    <div class="container py-3 ">
      
       <h5 class="section-title h1">Advisory Board</h5>
        <div class="row">
        
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class="card">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src={johnbhae} alt="card image"/></p>
                                <h4 class="card-title ">John F Andrews </h4>
                                <p class="card-text">Mr. Andrews will be guiding us in building robust technology processes and a top notch technical team.</p>
                                <p class="card-text py-1">Andrews is currently the COO of SharedLABS a rapidly growing IT services and infrastructure organization.  Prior to SharedLabs, Andrews served as President & COO of Duos Technologies.  </p>
                                {/* <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div class="backside ">
                        <div class="card py-4">
                            <div class="card-body text-center mt-4">
                         
                            <h4 class="card-title ">John F Andrews </h4>
                                <p class="card-text">Mr. Andrews will be guiding us in building robust technology processes and a top notch technical team.</p>
                                <p class="card-text py-1">Andrews is currently the COO of SharedLABS a rapidly growing IT services and infrastructure organization.  Prior to SharedLabs, Andrews served as President & COO of Duos Technologies.  </p>
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
                                  <Link to="/ourteam-john" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
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
                                <p><img class=" img-fluid" src={davidbhae} alt="card image"/></p>
                                <h4 class="card-title">David Coolidge </h4>
                                <p class="card-text">David will be guiding us to ensure our financial planning is on a sound footing.  He will also be guiding our business development.  </p>
                                <p class="card-text">A seasoned corporate executive, David Coolidge’s career reflects many achievements spanning almost 30 years in progressive corporate and operating leadership roles first</p>
                              
                                {/* <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card py-3">
                            <div class="card-body text-center mt-4">
                            <p></p>
                            <h4 class="card-title">David Coolidge </h4>
                                <p class="card-text">David will be guiding us to ensure our financial planning is on a sound footing.  He will also be guiding our business development.  </p>
                                <p class="card-text">A seasoned corporate executive, David Coolidge’s career reflects many achievements spanning almost 30 years in progressive corporate and operating leadership roles first</p>
                                
                       <Link to="/ourteam-david" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        
      

    </div>
       



    </div>
</section>
                    </div>
                  
                  </div>
                
                </div>
              </div>
        
 
</div>







      {/* body */}



{/* Contact us */}

<div className='bckimage py-5' id="contact">


<div class="container contact-form ">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form  autoComplete='off' onSubmit={handleSubmit}>
                <h3 class="section-title h1">Drop Us a Message</h3>
               <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name *"
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            required />
                        </div>
                        <br/>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email *"
                             onChange={(e)=>setEmail(e.target.value)}
                             value={email}
                            required />
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Phone Number *" 
                             onChange={(e)=>setPhone(e.target.value)}
                             value={phone}
                            required />
                        </div><br/>

                       
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                            <textarea  class="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}
                             onChange={(e)=>setMessage(e.target.value)}
                             value={message}

                            
                            ></textarea>
                        </div>
                        <br/>
                         <div class="form-group">
                            <button type="submit" name="btnSubmit" class="btnContact"  >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
</div>

</div>




     

    </div>
  )
}

export default Home

