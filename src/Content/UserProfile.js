import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/profile.png'

function UserProfile() {
    return (
      <div className="UserProfile">
		  
    <div class="container emp-profile">
		
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img style={{width:"50%"}}src={identiti} alt=""/> 
                           
                        </div>
                    </div>
                    <div class="col-md-6">
                    <div class="row">
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  style={{color:"blue"}}>Bachelors Degree</p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Talent's Name</label>
                                                <p  style={{color:"blue"}}>Megan Dudding </p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  style={{color:"blue"}}>27</p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  style={{color:"blue"}}>$5700</p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  style={{color:"blue"}}>Female </p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Industry</label>
                                                <p  style={{color:"blue"}}>Medical  </p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  style={{color:"blue"}}>Kuwait </p>
                                            </div>
                                            <div  class="col-md-6">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Membership Length</label>
                                                <p  style={{color:"blue"}}>: Member since 04/01/2020 </p>
                                            </div>
                                        </div>
                        {/* <div class="profile-head" >
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
                           
                        </div> */}
                    </div>
                    <div class="col-md-2">
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>

                <br/>
				{/* {Modal} */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  My Description
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Description</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <p>
      Greetings! I want to thank you for stopping by my profile! I am searching for a rewarding career with advancement opportunities. I have experience as a nurse and also as a clinical psychologist, and I want to utilize that for you! 

I have been in the medical field since I graduated high school. While I went to college, I worked as a CNA at night. I worked long and hard to get where I am today. I hope to find an employer with ethics and core values that also align to mine. 

If you have any questions or want to chat, please reach out to me. I would love to learn more about your company and its opportunities, thanks again!

      </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
                {/* {end of modal} */}

                {/* {Documentation} */}

	{/* {Modal} */}
   
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Documentation</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <br/>
   <h3 class="font-weight-bold" style={{color:"purple"},{textAlign:"center"}}>Resume / Cv</h3>
        <br/>
    <div class="row">
{/* {resume} */}
        <div  class="col-md-4">
        <form    class="md-form">
  <div  class="file-field">
    <div class="btn btn-primary btn-sm float-left">
      <span>Choose file</span>
      <input  type="file"/>
    </div>
    
  </div>
</form>
        </div>
        {/* {end of resume} */}

        
    </div>
    {/* {start of sikkls} */}
 
        

<h3 style={{color:"purple"},{textAlign:"center"}} class="font-weight-bold" >Skills</h3>
     {/* {1} */}
    <div class="row" >
{/* {resume} */}
        <div class="col-md-4" style={{padding:"20px"}}>
            <span>Employee Development</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        <div class="col-md-4" style={{padding:"20px"}}>
        <span>Customer Relations</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
      
        
        <div class="col-md-4" style={{padding:"20px"}}>
            <span>Problem Solving Ability </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        {/* {start of sikkls} */}
    

         
    </div>
    
    {/* {2} */}
    
  
     {/* {3} */}
     <div class="row">
{/* {resume} */}
        <div class="col-md-4" style={{padding:"20px"}}>
            <span>Administrative Capabilities  </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        <div class="col-md-4" style={{padding:"20px"}}>
        <span>Program development</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
      
        

      
        <div class="col-md-4" style={{padding:"20px"}}>
        <span>Psychological Evaluation </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
      
        

         
    </div>
    <br/>
    {/* {3 ka end} */}
<h3 style={{color:"purple"},{textAlign:"center"}} class="font-weight-bold">Qualification</h3>
<div class="row">
{/* {resume} */}
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
              <li class="font-weight-bold" > <span style={{color:"purple"}}className="material-icons">star</span> Faculty of Medicine, Kuwait University</li> 
<li style={{color:"blue"}}>Bachelors Degree in Psychology </li>
<li style={{color:"blue"}} >Attended six years in total, earned multiple academic awards. </li>
            </ul>
     

        </div>
        

      
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
            <li class="font-weight-bold"> <span style={{color:"purple"}}className="material-icons">star</span>The English Playgroup and Primary School</li> 
<li style={{color:"blue"}}>Diploma </li>
<li style={{color:"blue"}}>Perfect attendance record, graduated with academic honors. 

</li>
            </ul>
     

        </div>
        
      
        

         
    </div>
    
{/* {start of qual} */}
    <h3 style={{color:"purple"},{textAlign:"center"}} class="font-weight-bold">Experience</h3>
    <div class="row">
{/* {resume} */}
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
            <li class="font-weight-bold"> <span style={{color:"purple"}}className="material-icons">star</span>  Kuwait Counseling Center</li> 
<li style={{color:"blue"}}> Head of Psychological Development</li>
<li style={{color:"blue"}}> Current employer. Design, develop, and integrate our counseling programs. Responsible for training and retention of new employees. 

</li>
            </ul>
     

        </div>
        

      
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
            <li class="font-weight-bold" ><span style={{color:"purple"}}className="material-icons">star</span> Certified Nursing Assistant </li> 
<li style={{color:"blue"}}>Responsible for patient care. Monitored and charted vitals, administered medications, and ensured patients were comfortable.  </li>
<li style={{color:"blue"}}>Ensured patient’s safety and performed high-quality assistance in a 130-bed long-term care facility



</li>
            </ul>
     

        </div>
        
      
        

         
    </div>
    
    {/* {end of qual} */}
    {/* {start of Honours} */}
    <h3 style={{color:"purple"},{textAlign:"center"}} class="font-weight-bold">Honors & Awards</h3>
    <div class="row">
{/* {resume} */}
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
            <li class="font-weight-bold" ><span style={{color:"purple"}}className="material-icons">star</span>  Graduated with honors (top of my class) </li> 
<li style={{color:"blue"}}>Completed college with the highest possible grade-point average. </li>

            </ul>
     

        </div>
        

      
        <div class="col-md-6" style={{padding:"20px"}}>
            <ul style={{listStyle:"none"}}>
            <li class="font-weight-bold"><span style={{color:"purple"}}className="material-icons">star</span> Medical award of excellence  </li> 
<li style={{color:"blue"}}>Honored by Farwaniya Hospital for my excellent patient care abilities. 

</li>

            </ul>
     

        </div>
        
      
        

         
    </div>
    <br/>
    {/* {end of qual} */}
    </div>
  </div>
</div>



{/* {end of model} */}

	{/* {Modal} */}
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModa3">
Cover Video
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Video</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

                {/* {end of modal} */}
                <br/>
                <br/>

                <div   class="row" >
				
                    <div class="col-md-6">
					{/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                        <div  class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <button  type="button"  class="btn btn-primary">Schedule Interview</button>
                                            </div>
                                           
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <button  type="button"  class="btn btn-primary">Hire Me</button>
                                            </div>
                                          
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <button  type="button"  class="btn btn-primary">Download CV</button>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <button  type="button"  class="btn btn-primary">Short List</button>
                                            </div>
                                            
                                        </div>
                                      
                            </div>
                            
                        </div>
                    </div>
              <div>
                  
              </div>
                </div>
				<br/>
				
            </form>           
        </div>




	

</div>
     
      
    );
  }
  
  export default UserProfile;
  