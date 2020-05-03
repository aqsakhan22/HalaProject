import React from 'react';
import  '../Styles/style.css'
import identiti from '../assets/img/logo/identiti.png'
import feeback from '../assets/img/logo/feeback.PNG'
import shorages from '../assets/img/logo/profile.png'
import koinz from '../assets/img/logo/koinz.PNG'
import botify from '../assets/img/logo/botify.PNG'
import shoragesnew from '../assets/img/logo/shoragenew.PNG'
import feebacknew from '../assets/img/logo/feebacknew.PNG'
import {Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Employeer () {

    return(
        <div className="Employeer">
     <div class="container-fluid">
	{/* <h2 id="sector" >Sector</h2> */}
	<br/>
	<div class="md-form mt-0">
	<input class="form-control" type="text" placeholder="Search By Sectors" aria-label="Search"/>
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
	
	
	
	
	
	
	
	
	
	
	










	
	
	
	<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					
					<span  className="promotepof-badge">
                     <i  className="fa fa-star" title="Featured"></i>
                              </span>
							    
                             
							  <Link to="/dash" > <img  style={{width:"40%"}} src={identiti} alt="" /></Link>	
						<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Identiti</p>
							<p   id="cardtext1" >Computer Software</p>
							<p id="cardtext"  >Riyadh and Saudia Arabia</p>
						</div>
                    
      
     

				
                      
                        
					 </div>
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img   src={shoragesnew} alt="" />
						
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Shorages</p>
							<p id="cardtext1"   >Logistics & Supply Chain</p>
							<p id="cardtext"  >Dubai,UnitedArab Emirate</p>
						</div>
					</div>
                      
                        
				
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                            
					<img style={{width:"50%"}} src={feebacknew} alt="" />
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">FeeBack</p>
							<p  id="cardtext1"  >Market Research</p>
							<p id="cardtext"  >Amman,Jordan</p>
						</div>
					</div>
                      
                        
					
				</div>	 
				<div style={{padding:"20px"}} class="col-md-2">
				
					
				<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
				<span  className="promotepof-badge">
							<i  className="fa fa-star" title="Featured"></i>
						  </span>
						
				<img src={koinz} alt="" />
				<div class="text">
						<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Koinz</p>
						<p   id="cardtext1" >Internet</p>
						<p id="cardtext"  >Riyadh, Saudia Arabia</p>
					</div>
				</div>
				  
					
				
			</div>	
            <div style={{padding:"20px"}} class="col-md-2">
				
					
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					<span  className="promotepof-badge">
                                <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
					<img src={botify} alt="" />
					<div class="text">
							<p id="intro4" style={{color:"purple"}} class="font-weight-bold">Botify</p>
							<p id="cardtext1" >Fashion & Design</p>
							<p id="cardtext" >Dubai,United Arab</p>
						</div>
					</div>
                      
                        
					 </div>
				
				
	</div>


	

	

	
</div>


        </div>
    )
    
    
    }
    export default Employeer ;