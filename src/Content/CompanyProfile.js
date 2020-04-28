import React from 'react';
import '../Styles/CompanyProfile.css'
import identiti from '../assets/img/logo/identiti.png'

function CompanyProfile() {
    return (
      <div className="CompanyProfile">
		  <h2 style={{color:"purple"}} class="text-center">Company Profile</h2>
    <div class="container emp-profile">
		
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img style={{width:"50%"}}src={identiti} alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">a
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head" >
                                    <h4 class="font-weight-bold" style={{color:"purple"},{fontSize:"30px"}}>
                                   Identiti
                                    </h4>
                                    <h6 class="rating-num">
                                    4.8
                                    </h6> 
									<span style={{color:"purple"}}className="material-icons">star</span>
									<span style={{color:"purple"}} className="material-icons">star</span>
									<span style={{color:"purple"}} className="material-icons">star</span>
									<span style={{color:"purple"}} className="material-icons">star_half</span>
									
                                    <h3 class="proile-rating"> <a href="#"><span>Reviews</span></a></h3>
                           
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
				
                <div   style={{border:"1px solid lightgray"} } class="row" >
				
                    <div class="col-md-6">
					{/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                        <div  class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label style={{color:"purple"}}>Company website</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>www.identiti.sa</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label style={{color:"purple"}}>Industry </label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Computer Software</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label style={{color:"purple"}}>Head Headquarters</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Riyadh, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label style={{color:"purple"}}>Founded Since</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>207</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                        <div class="col-md-6">
                                                <label style={{color:"purple"}}>Company size</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>51-100</p>
                                            </div>
                                            
                                        </div>
                            </div>
                            
                        </div>
                    </div>
              <div>
                  {/* {recruit} */}
                                           <div class="row">
                                           <div class="col-md-6">
                                                <label  class="font-weight-bold" style={{color:"purple"}}>Recruiter Name</label>
                                                
                                            </div>
                                         
                                            <div class="col-md-6">
                                                <p class="font-weight-bold" style={{color:"blue"}}>Hind</p>
                                            </div>
                                           </div>
                                           <div class="row">
                                           <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Designation</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="font-weight-bold" style={{color:"blue"}}>Talents Acquisition Manager</p>
                                            </div>
                                           </div>
                                           
                                            
                                     
                       {/* {end recruit} */}
              </div>
                </div>
				<br/>
				<div class="row" style={{border:'1px solid lightgrey'}}>
<h3 class="font-weight-bold" style={{color:"purple"}}>
	Company Description
</h3>
<p   class="text-center" style={{padding:"2px"},{color:"black"}} >

Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante accumsan ac est.

Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec
</p>
				</div>
            </form>           
        </div>




	

</div>
     
      
    );
  }
  
  export default CompanyProfile;
  