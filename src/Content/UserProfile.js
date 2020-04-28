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
                            <img style={{width:"50%"},{height:"50%"}}src={identiti} alt=""/> 
                           
                        </div>
                    </div>
                    <div style={{border:"1px solid lightgray"}} class="col-md-6"> 
                    <div class="row"> 
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  style={{color:"blue"}}>Bachelors Degree</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Talent's Name</label>
                                                <p  style={{color:"blue"}}>Megan Dudding </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  style={{color:"blue"}}>27</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  style={{color:"blue"}}>$5700</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  style={{color:"blue"}}>Female </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Industry</label>
                                                <p  style={{color:"blue"}}>Medical  </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  style={{color:"blue"}}>Kuwait </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label class="font-weight-bold" style={{color:"purple"}}>Membership Length</label>
                                                <p  style={{color:"blue"}}>Member since 04/01/2020 </p>
                                            </div>
                                        </div>
                       
                    </div>
                    <div class="col-md-2">
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>

                <br/>
{/* {Resume Start} */}
                <h3 class="font-weight-bold" style={{color:"purple"}}>Description</h3>
                <div>
                <p>
      Greetings! I want to thank you for stopping by my profile! I am searching for a rewarding career with advancement opportunities. I have experience as a nurse and also as a clinical psychologist, and I want to utilize that for you! 

I have been in the medical field since I graduated high school. While I went to college, I worked as a CNA at night. I worked long and hard to get where I am today. I hope to find an employer with ethics and core values that also align to mine. 

If you have any questions or want to chat, please reach out to me. I would love to learn more about your company and its opportunities, thanks again!

      </p>
                </div>

                {/* {end of Description} */}


{/* {start of resume} */}

<div class="row">
<div  class="col-md-4">
<h3 class="font-weight-bold" style={{color:"purple"}}>Resume /Cv</h3>
        
  <div  class="file-field">
    <div class="btn btn-primary btn-sm float-left">
      <span>Choose file</span>
      <input  type="file"/>
    </div>
    
  </div>

        </div>
        {/* {end od col 1} */}
    
      
</div>

{/* {end of resume} */}
<h3 class="font-weight-bold" style={{color:"purple"}}>Skills</h3>
<div class="row">

<div  class="col-md-4">

        
<span>Employee Development</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  
</div>
<span>Customer Relations</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  
</div>
<span>Problem Solving Ability </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>Administrative Capabilities  </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>Program development</span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>Psychological Evaluation </span>
        <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
       
    
       
      
</div>
<h3 style={{color:"purple"} }class="font-weight-bold">Qualification</h3>
				
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

    <h3 style={{color:"purple"}} class="font-weight-bold">Experience</h3>
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


    <h3 style={{color:"purple"}} class="font-weight-bold">Honors & Awards</h3>
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




    <h3 style={{color:"purple"}} class="font-weight-bold">Video</h3>
      
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>



               <br/>
                <div   class="row" >
				
                    <div class="col-md-6">
					{/* <h2 class="font-weight-bold" style={{color:"purple"}}>Overview</h2> */}
                        <div  class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-4">
                                            <button  type="button"  class="btn btn-primary">Download</button>
                                            </div>
                                            <div class="col-md-4">
                                            <button  type="button"  class="btn btn-primary">Hire Me</button>
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
  