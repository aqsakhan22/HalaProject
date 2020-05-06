import React from 'react';
import '../Styles/CompanyProfile.css'
import botify from '../assets/img/logo/botify.PNG'

function Botiky() {
    return (
      <div className="Botiky">
		  {/* <h2  class="font-weight-bold" style={{color:"purple"}} class="text-center">Company Profile</h2> */}
    <div class="container emp-profile">
		
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img  style={{width:"50%"}}src={botify} alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">a
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head" >
                                    <h3 id="compname"class="font-weight-bold" style={{color:"purple"}}>
                                   Botiky
                                    </h3>
                                    <h6 class="rating-num">
                                    4.8
                                    </h6> 
									<span style={{color:"yellow"}}className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star_half</span>
									
                                    <h3 class="proile-rating"> <a href="#"><span>Reviews</span></a></h3>
                           
                        </div>
                    </div>
                    {/* <div class="col-md-2">
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
				
                <div   style={{border:"1px solid lightgray"} } class="row" >
				
                <div style={{padding:"10px"}} class="col-md-6">
                {/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                 
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >Company Website</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1" >www.botiky.com/</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                          
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >Industry</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">Fashion& Design</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <h4 class="font-weight-bold" style={{color:"purple"}} >Head Headquarters</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">Dubai, United Arab Emirates </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <h4 class="font-weight-bold" style={{color:"purple"}} >Founded Since</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">2017</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6">
                                    <h4 class="font-weight-bold" style={{color:"purple"}} >Company size</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">51-100</p>
                                        </div>
                                        
                                    </div>
                        </div>
                        
                    
          
          
          
                        <div style={{padding:"10px"}} class="col-md-6">
                {/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                 
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >Recruiter Name</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">Sara</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                          
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >Designation</h4>
                                        </div>
                                        <div class="col-md-6">
                                            <p id="subdata1">Head of People </p>
                                        </div>
                                    </div>
                                    
                                    
                                    
                        </div>
                        
                    
          
          
          
          
          <div>
             
          </div>
            </div>
            <br/>
            
            
            
            
            
            
            
            
            
            
            
                
                
                
                
                
                
                
            <div class="row" style={{border:'1px solid lightgrey'}}>
<h3 id="description1" class="font-weight-bold" style={{color:"purple"}}>
	Company Description
</h3>
<p id="description"  class="text-left" style={{padding:"15px"},{color:"black"}} >

A place to find and customize your fashion Wishlist
</p>
				</div>
            
            
            
            
            
            
            
            
            
            
            
            </form>           
        </div>




	

</div>
     
      
    );
  }
  
  export default Botiky;
  