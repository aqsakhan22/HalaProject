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

function ShortList() {
    return (
      <div className="ShortList">
      

	 
    <div class="container-fluid">
	
	<br/>
	

	
	
	
	
	
	
	
	
	
	
	
	










	<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					
					{/* <span  className="promotepof-badge">
                     <i  className="fa fa-star" title="Featured"></i> 
					
                              </span> */}
							  <span class="urgntpkg-candv1">Hire Me</span> 
                             
                             
			<Link to="/Talent1" >	<img  style={{width:"40%"}} src={Talent1} alt="" /></Link>	
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
                            
							<Link to="/Talent2" >	<img style={{width:"40%"}}   src={Talent2} alt="" /></Link>
						
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
                            
								<Link to="/Talent3" >	<img style={{width:"40%"}} src={Talent3} alt="" /></Link>
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
						   <Link to="/Talent4" >	<img style={{width:"40%"}}  src={Talent4} alt="" /></Link>
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
						 <Link to="/Talent5" >		<img style={{width:"40%"}}  src={Talent5} alt="" /></Link>
						 
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
     
      
    );
  }
  
  export default  ShortList;
  