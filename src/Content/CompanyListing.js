import React from 'react';
import  '../Styles/style.css'
import identiti from '../assets/img/logo/identiti.png'
import feeback from '../assets/img/logo/feeback.PNG'
import shorages from '../assets/img/logo/shorages.PNG'
import koinz from '../assets/img/logo/koinz.PNG'
import botify from '../assets/img/logo/botify.PNG'
import {Link} from 'react-router-dom'


function CompanyListing() {
    return (
      <div className="CompanyListing">
    
    <div class="container-fluid">
     
		
	<div class="row">
	<div style={{border:"1px solid lightgray"}} className="col-lg-3">

	<div className="emp-date">
	<h4 class="font-weight-bold">Job Type</h4>
	<ul style={{listStyle:"none"}}>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Permanent</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Contract</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Internship</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Remote</a>
                        </li>
                       
                        <li>
                          <input type="checkbox" checked="checked" />
                          <a href="#">All</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 class="font-weight-bold" >Sector</h4>
	<ul style={{listStyle:"none"}}>
                        <li>
                          <input type="checkbox" />
                          <a href="#">3d Designing</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Acounting Finance</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Automotive</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Construction</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Education</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Health Care</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 class="font-weight-bold" >Academic Level</h4>
	<ul  style={{listStyle:"none"}}>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Certificate</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Diploma</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Associate</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Degree Bachelor</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Master Degree</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Associate</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 class="font-weight-bold" >Gender</h4>
	<ul  style={{listStyle:"none"}}>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Male</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Female</a>
                        </li>
                      </ul>
	</div>
	</div>
	</div>
	
	<div class="row">
		 <div style={{padding:"20px"}}  class=" col-md-4 ">
				
				
					<div style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
                             
			<Link to="/identiti" >	<img  style={{width:"40%"}} src={identiti} alt="" /></Link>	
						<div class="text">
							<p style={{color:"purple"}} class="font-weight-bold">Identiti</p>
							<p style={{color:"black"}} class="font-weight-bold">Computer Software</p>
							<p style={{color:"purple"}} class="font-weight-bold">Riyadh and Saudia Arabia</p>
						</div>
                    
      
     

				
                      
                        
					 </div>
				</div>	 
				<div style={{padding:"20px"}} class="col-sm-4 ">
				
				
					<div style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img   src={botify} alt="" />
						
					<div class="text">
							<p style={{color:"purple"}} class="font-weight-bold">Shorages</p>
							<p style={{color:"black"}} class="font-weight-bold">Logistics & Supply Chain</p>
							<p style={{color:"purple"}} class="font-weight-bold">Dubai, United Arab Emirates</p>
						</div>
					</div>
                      
                        
				
				</div>	 
				<div style={{padding:"20px"}} class="col-sm-4">
				
				
					<div style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img style={{width:"40%"}} src={identiti} alt="" />
					<div class="text">
							<p style={{color:"purple"}} class="font-weight-bold">FeeBack</p>
							<p style={{color:"black"}} class="font-weight-bold">Market Research</p>
							<p style={{color:"purple"}} class="font-weight-bold">Amman,Jordan</p>
						</div>
					</div>
                      
                        
					
				</div>	 
	</div>


	<div class="row">
		 <div style={{padding:"20px"}} class="col-sm-4">
				
					
					<div style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img src={koinz} alt="" />
					<div class="text">
							<p style={{color:"purple"}} class="font-weight-bold">Koinz</p>
							<p style={{color:"black"}} class="font-weight-bold">Internet</p>
							<p style={{color:"purple"}} class="font-weight-bold">Riyadh, Saudia Arabia</p>
						</div>
					</div>
                      
                        
					
				</div>	 
				<div style={{padding:"20px"}} class="col-sm-4">
				
					
					<div style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
					<img src={botify} alt="" />
					<div class="text">
							<p style={{color:"purple"}} class="font-weight-bold">Botify</p>
							<p style={{color:"black"}} class="font-weight-bold">Fashion & Design</p>
							<p style={{color:"purple"}} class="font-weight-bold">Dubai,United Arab</p>
						</div>
					</div>
                      
                        
					 </div>
				
				
	</div>

</div>




</div>
     
      
    );
  }
  
  export default CompanyListing;
  