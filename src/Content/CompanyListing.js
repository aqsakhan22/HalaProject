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
  