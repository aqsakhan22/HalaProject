import React from 'react';
import  '../Styles/style.css'
import identiti from '../assets/img/logo/identiti.png'
import koinz from '../assets/img/logo/koinz.PNG'
import botify from '../assets/img/logo/botify.PNG'

import shoragesnew from '../assets/img/logo/shoragenew.PNG'
import feebacknew from '../assets/img/logo/feebacknew.PNG'
import {Link} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function WishList() {
    return (
      <div className="WishList()">
      

	  {/* <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" size="medium"  />}
       
      /> */}
    <div class="container-fluid">
	
	
    











	
	<div class="row">
		 <div   style={{padding:"20px"}}  class=" col-md-2 ">
				
				
					<div id="cards" style={{backgroundColor:"white"}} className="candidate-grid">
					
					<span  className="promotepof-badge">
                     <i  className="fa fa-star" title="Featured"></i>
                              </span>
                             
                             
			<Link to="/identiti" >	<img  style={{width:"40%"}} src={identiti} alt="" /></Link>	
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
     
      
    );
  }
  
  export default WishList;
  