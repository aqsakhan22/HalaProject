import React from 'react';
import  '../Styles/style.css'
import Talent1 from '../assets/img/logo/girl.png'
import Talent2 from '../assets/img/logo/talent2.png'
import Talent3 from '../assets/img/logo/talent3.jpg'
import Talent4 from '../assets/img/logo/talent4.png'
import Talent5 from '../assets/img/logo/talent5.jpg'
import {Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
function Talent() {

    return(
        <div className="Talent">
     
	  {/* <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" size="medium"  />}
       
      /> */}
    <div class="container-fluid">
	
	
	<div class="md-form mt-0">
	<input class="form-control" type="text" placeholder="Search By sectors" aria-label="Search"/>
</div>
<br/>
	
    
    
    
    
    









<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					
					{/* <span  className="promotepof-badge">
                     <i  className="fa fa-star" title="Featured"></i> 
					
                              </span> */}
							  <span class="urgntpkg-candv1">Hire Me</span> 
                             
                             
			<Link to="/TalentDashboard" >	<img  style={{width:"40%"}} src={Talent1} alt="" /></Link>	
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
                            
					<img style={{width:"40%"}}   src={Talent2} alt="" />
						
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
                            
					<img style={{width:"40%"}} src={Talent3} alt="" />
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
				<img style={{width:"40%"}}  src={Talent4} alt="" />
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
				<img style={{width:"40%"}}  src={Talent5} alt="" />
				<div class="text">
						{/* <p id="intro4" style={{color:"purple"}} class="font-weight-bold">Botify</p> */}
						<p id="cardtext3" >Janya Harper </p>
						<p id="cardtext4" style={{fontSize:"11px"}}>Financial Services</p>
						<p id="cardtext" >Turkey</p>
					</div>
				</div>
				  
					
				 </div>
	</div>


	
	
	
	
	
	
</div>

        </div>
    )
    
    
    }
    export default Talent;