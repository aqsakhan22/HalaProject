import React from 'react';
import '../Styles/CompanyProfile.css'
import identiti from '../assets/img/logo/identiti.png'
import {Link} from 'react-router-dom'
function MyProfile() {
    return (
      <div className="MyProfile">
		  {/* <h2  class="font-weight-bold" style={{color:"purple"}} class="text-center">Company Profile</h2> */}
    <div class="container emp-profile">
		
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                  
                        <div class="profile-img">
                        
                            <img  style={{width:"50%"}}src={identiti} alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">a
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                        </div>
                    </div>
                    
                    <div class="col-md-5">
                    <br/>
                        <div class="profile-head" >
                                    <h3 id="companyame">
                                   Identiti
                                    </h3>
                                    {/* <h6 class="rating-num">
                                    4.8
                                    </h6>  */}
									{/* <span style={{color:"yellow"}}className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star</span>
									<span style={{color:"yellow"}} className="material-icons">star_half</span>
									
                                    <h3 class="proile-rating"> <a href="#"><span>Reviews</span></a></h3> */}
                           
                        </div>
                        
                    </div>
                    <br/>
                
                    <div class="col-md-3">
                    <br/>
                    <br/>
               <Link to="/editprofile"> <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/></Link>         
                    </div>
                    <br/>
                </div>
				
                <div   style={{border:"1px solid lightgray"} } class="row" >
				
                    <div style={{padding:"10px"}} class="col-md-6">
					{/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                     
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4 class="font-weight-bold" style={{color:"purple"}} >Company Website</h4>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="subdata1" >www.identiti.sa</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                              
                                                <h4 class="font-weight-bold" style={{color:"purple"}} >Sector</h4>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="subdata1">Computer Software</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >HeadQuarters</h4>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="subdata1">Riyadh, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <h4 class="font-weight-bold" style={{color:"purple"}} >Founded Since</h4>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="subdata1">2007</p>
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
                                                <p id="subdata1">Hind</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                              
                                                <h4 class="font-weight-bold" style={{color:"purple"}} >Designation</h4>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="subdata1">Talents Acquisition Manager</p>
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

Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante accumsan ac est.

Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec
</p>
				</div>
            </form>           
        </div>




	

</div>
     
      
    );
  }
  
  export default MyProfile;
  