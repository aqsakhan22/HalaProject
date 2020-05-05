import React from 'react';
import  '../Styles/style.css'
import identiti from '../assets/img/logo/girl.png'
import feeback from '../assets/img/logo/feeback.PNG'
import shorages from '../assets/img/logo/profile.png'
import koinz from '../assets/img/logo/girl.png'
import botify from '../assets/img/logo/girl.png'
import {Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function TalentListing() {
    return (
      <div className="TalentListing">
      

	  {/* <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" size="medium"  />}
       
      /> */}
    <div class="container-fluid">
	{/* <h2 id="sector" >Sector</h2> */}
	<br/>
	<div class="md-form mt-0">
	<input class="form-control" type="text" placeholder="Search By Filters" aria-label="Search"/>
</div>
<br/>
	<div id="cards" class="row">


<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Professional Services</a>
</div>
<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Creative</a>
</div>
<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Financial Services</a>
</div>

<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Transport & Logistics</a>
</div>
<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Consumer</a>
</div>

	
	<div class="col-md-3">
	<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Telecoms, Media & Tech</a>
</div>
<div class="col-md-3">
	<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Government & Non-Profit</a>
</div>
<div class="col-md-3">
	<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Manufacturing & Engineering</a>
</div>

	</div>
	
	
	
	
	
	<br/>
	
	
	
	
	

	<h2 id="sector" >Job Type</h2>
	<div id="cards" class="row">


<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Permanent</a>
</div>
<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Internship</a>
</div>
<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
    <a href="#" id="intro1">Contract</a>
</div>

<div class="col-md-3">
<Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a href="#" id="intro1">Remote</a>
</div>


	
	



	</div>
	
	
	
	
	
	
	
	
	
	
	










	<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					
					{/* <span  className="promotepof-badge">
                     <i  className="fa fa-star" title="Featured"></i> 
					
                              </span> */}
							  <span class="urgntpkg-candv1">Hire Me</span> 
                             
                             
			<Link to="/Talent1" >	<img  style={{width:"40%"}} src={identiti} alt="" /></Link>	
						<div class="text">
							{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">Identiti</p> */}
							<p   id="cardtext3" >Megan Dudding </p>
							<p id="cardtext4" style={{fontSize:"11px"}}  >Professional Services</p>
							<p id="cardtext"  >Kuwait </p>
						</div>
                    
      
     

				
                      
                        
					 </div>
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span class="urgntpkg-candv2">Engaged</span> 

					{/* <span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span> */}
                            
					<img style={{width:"40%"}}   src={botify} alt="" />
						
					<div class="text">
							{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">Shorages</p> */}
							<p id="cardtext3"   >Marcus Sanders </p>
							<p id="cardtext4" style={{fontSize:"11px"}} >Manufacturing & Engineering</p>
							<p id="cardtext"  >Dubai</p>
						</div>
					</div>
                      
                        
				
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					{/* <span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span> */}
							    <span class="urgntpkg-candv1">Hire Me</span> 
                            
					<img style={{width:"40%"}} src={identiti} alt="" />
					<div class="text">
							{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">FeeBack</p> */}
							<p  id="cardtext3"  >Raj Heronea</p>
							<p id="cardtext4" style={{fontSize:"11px"}}  >Professional Services</p>
							<p id="cardtext"  >Egypt</p>
						</div>
					</div>
                      
                        
					
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2">
				
					
				<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
				{/* <span  className="promotepof-badge">
							<i  className="fa fa-star" title="Featured"></i>
						  </span>
						 */}
						   <span class="urgntpkg-candv1">Hire Me</span> 
				<img style={{width:"40%"}}  src={koinz} alt="" />
				<div class="text">
						{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">Koinz</p> */}
						<p   id="cardtext3" >Mike Lenning</p>
						<p id="cardtext4" style={{fontSize:"11px"}}  >Creative</p>
						<p id="cardtext"  >Morroco </p>
					</div>
				</div>
				  
					
				
			</div>	
			<div style={{padding:"20px"}} class="col-md-2">
				
					
				<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
				{/* <span  className="promotepof-badge">
							<i  className="fa fa-star" title="Featured"></i>
						  </span> */}
						 
						 <span class="urgntpkg-candv1">Hire Me</span> 
				<img style={{width:"40%"}}  src={botify} alt="" />
				<div class="text">
						{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">Botify</p> */}
						<p id="cardtext3" >Janya Harper </p>
						<p id="cardtext4" style={{fontSize:"11px"}}>Financial Services</p>
						<p id="cardtext" >Turkey</p>
					</div>
				</div>
				  
					
				 </div>
	</div>


	
	
	
	
	
	
	
	
	
	<div class="row">
		 
			
				
				
	</div>

</div>




</div>
     
      
    );
  }
  
  export default TalentListing;
  