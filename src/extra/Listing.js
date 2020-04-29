import React from 'react';
import  '../Styles/style.css'
import identiti from '../assets/img/logo/identiti.png'
import feeback from '../assets/img/logo/feeback.PNG'
import shorages from '../assets/img/logo/shorages.PNG'
import koinz from '../assets/img/logo/koinz.PNG'
import botify from '../assets/img/logo/botify.PNG'
import {Link} from 'react-router-dom'

import Checkbox from '@material-ui/core/Checkbox';
function CompanyListing() {
    return (
      <div className="CompanyListing">
    
    <div class="container-fluid">
   
		
	<div id="cards" class="row">
  
	<div style={{border:"1px solid lightgray"}} className="col-lg-3">

	<div className="emp-date">
	<h4 id="intro4" class="font-weight-bold">Job Type</h4>
	<ul style={{listStyle:"none"}}>
                        <li>
                        <Checkbox
       
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
                  <a href="#" id="intro1">Permanent</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Contract</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Internship</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
      
     />
                          <a href="#" id="intro1">Remote</a>
                        </li>
                       
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
       checked="true"
     />
                          <a href="#" id="intro1">All</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 id="intro4"  class="font-weight-bold" >Sector</h4>
	<ul style={{listStyle:"none"}}>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">3d Designing</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Acounting Finance</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Automotive</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Construction</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Education</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Health Care</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 id="intro4"  class="font-weight-bold" >Academic Level</h4>
	<ul  style={{listStyle:"none"}}>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Certificate</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Diploma</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Associate</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Degree Bachelor</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Master Degree</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Associate</a>
                        </li>
                      </ul>
	</div>
	</div>
	<div style={{border:"1px solid lightgray"}}  className="col-lg-3">

	<div className="emp-date">
	<h4 id="intro4"  class="font-weight-bold" >Gender</h4>
	<ul  style={{listStyle:"none"}}>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Male</a>
                        </li>
                        <li>
                        <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Female</a>
                        </li>
                      </ul>
	</div>
	</div>
	</div>
	
	<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-3 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
                             
			<Link to="/identiti" >	<img  style={{width:"40%"}} src={identiti} alt="" /></Link>	
						<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Identiti</p>
							<p   style={{fontSize:"15px"}} class="font-weight-bold">Computer Software</p>
							<p id="cardtext" style={{fontSize:"15px"}} class="font-weight-bold">Riyadh and Saudia Arabia</p>
						</div>
                    
      
     

				
                      
                        
					 </div>
				</div>	 
				<div style={{padding:"20px"}} class="col-md-3 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img   src={botify} alt="" />
						
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Shorages</p>
							<p style={{fontSize:"15px"}}  class="font-weight-bold">Logistics & Supply Chain</p>
							<p id="cardtext" style={{fontSize:"15px"}} class="font-weight-bold">Dubai,United Arab Emirate</p>
						</div>
					</div>
                      
                        
				
				</div>	 
				<div style={{padding:"20px"}} class="col-md-3">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img style={{width:"40%"}} src={identiti} alt="" />
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">FeeBack</p>
							<p  style={{fontSize:"15px"}} class="font-weight-bold">Market Research</p>
							<p id="cardtext" style={{fontSize:"15px"}} class="font-weight-bold">Amman,Jordan</p>
						</div>
					</div>
                      
                        
					
				</div>	 
	</div>


	<div class="row">
		 <div style={{padding:"20px"}} class="col-md-3">
				
					
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img src={koinz} alt="" />
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Koinz</p>
							<p   style={{fontSize:"15px"}} class="font-weight-bold">Internet</p>
							<p id="cardtext" style={{fontSize:"15px"}} class="font-weight-bold">Riyadh, Saudia Arabia</p>
						</div>
					</div>
                      
                        
					
				</div>	 
				<div style={{padding:"20px"}} class="col-md-3">
				
					
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
					<img src={botify} alt="" />
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Botify</p>
							<p style={{fontSize:"15px"}}  class="font-weight-bold">Fashion & Design</p>
							<p id="cardtext" style={{fontSize:"15px"}} class="font-weight-bold">Dubai,United Arab</p>
						</div>
					</div>
                      
                        
					 </div>
				
				
	</div>

</div>




</div>
     
      
    );
  }
  
  export default CompanyListing;
  