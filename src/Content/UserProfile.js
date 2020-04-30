import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/profile.png'
import {Link} from 'react-router-dom' 
function UserProfile() {
    return (
      <div className="UserProfile">
         
		  
    <div class="container emp-profile">
		
      
        
                {/* <span id="name1"style={{color:"purple"}}>Email</span> */}
                <div style={{borderBottom:"2px solid lightgray"}} class="row">
                    
               
                    <div  class="col-md-4 " class="align-top">
                     
                    <div   class="profile-img" class="align-top">      
                    <img id="imagedata"  style={{width:"100%"},{height:"50%"}}src={identiti} alt=""/> 
                     
                         
                     </div>
                <br/>
                    <div >

                    <label id="name"style={{color:"purple"}}>Megan Dudding</label>
                        <br/>
                        <label id="member">Member since 04/01/2020</label> 
                        <br/>
                        <label id="name1" >Huma_the_legend@4strokesonline.com</label>
                    </div>
                   
                        
                    </div>
                    <div  class="col-md-6"> 
                    <div class="row"> 
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  id="intro1">Bachelors Degree</p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  id="intro1">27</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  id="intro1">$5700</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  id="intro1">Female </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Industry</label>
                                                <p  id="intro1">Medical  </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  id="intro1">Kuwait </p>
                                            </div>
                                           
                                        </div>
                       
                    </div>
                    <div class="col-md-2">
                   <Link to="/editprofile"><input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/></Link>     
                        <br/>
                        <br/>
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Download CV"/>
                        <br/>
                        <br/>
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Hire Me"/>
                    </div>
                    
                </div>

                
{/* {Resume Start} */}
                <h3 class="font-weight-bold" style={{color:"purple"}}>Description</h3>
              
                <div style={{borderBottom:"2px solid lightgray"}}>
                <p  class="text-left" id="para">
          Greetings! I want to thank you for stopping by my profile! I am searching for a rewarding career with advancement opportunities. I have experience as a nurse and also as a clinical psychologist, and I want to utilize that for you! 
              </p>
              <p  class="text-left" id="para">
              I have been in the medical field since I graduated high school. While I went to college, I worked as a CNA at night. I worked long and hard to get where I am today. I hope to find an employer with ethics and core values that also align to mine. 
              </p>
              <p  class="text-left" id="para">
              If you have any questions or want to chat, please reach out to me. I would love to learn more about your company and its opportunities, thanks again!


              </p>
                </div>
             
               

                <h3 class="font-weight-bold" style={{color:"purple"}}>My Personality </h3>
              
              <div style={{borderBottom:"2px solid lightgray"}}>
              <p  class="text-left" id="para">
              My Personality:


8% of men and 17% of women share this personality type with you. You get along with people very well, and you are the life of any party. You are attentive, caring, and always ready to help, even if you have to sacrifice your interests for others. Yet you’re very independent in your deals and, as a rule, you get everything without any side help. You only wait for emotional support from your close ones.
              </p>
              
              </div>
           

{/* {end of resume} */}
<div style={{borderBottom:"2px solid lightgray"}}  class="row">
    <div style={{borderRight:"2px solid lightgray"}} class="col-md-6">
<h3 class="font-weight-bold" style={{color:"purple"}}>Skills</h3>
<br/>
<div  style={{color:"blue"}} class="font-weight-bold" class="row">

<div   class="col-md-5">

        
<span  id="intro1" id="intro3">Employee Development</span>
       
</div>
<div  class="col-md-5">     
<span   id="intro1" id="intro3">Customer Relations</span>
     
</div>

      
       
    
       
      
</div>
<br/>

<div   style={{color:"blue"}}  class="row" >
<div  class="col-md-5">
       
       <span    id="intro1" id="intro3"> Problem Solving Ability </span>
               
       </div>
<div  class="col-md-6">
       
       <span  id="intro1" id="intro3">Administrative Capabilities  </span>
       

      
       </div>
       </div>
       <br/>
       <div   style={{color:"blue"}}  class="row" >
<div  class="col-md-5">

        
<span    id="intro1" id="intro3">Program development</span>
       

       
        </div>
        <div  class="col-md-5">

        

       
        <span   id="intro1" id="intro3" >Psychological Evaluation </span>
       

       
        </div>
        
       
    
       
      

</div>
</div>
<div class="col-md-6" >
<h3 class="font-weight-bold" style={{color:"purple"}}>Video</h3>
<br/>
<div style={{color:"blue"}} class="font-weight-bold" class="row">
<div class="col-md-8">
<div  class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
</div>


          
</div>
<br/>

      
        
       
    
       
      


</div>
</div>
<br/>

<label id="headdata"  style={{color:"purple"} } >Qualification</label>


<div   style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div  class="col-md-6">

<ul  style={{listStyle:"none"}}>
              <li  id="intro4" class="font-weight-bold" > <span className="material-icons">star</span> Faculty of Medicine, Kuwait University</li> 
<li  id="intro1" >Bachelors Degree in Psychology </li>

<li   id="intro1"  >Attended six years in total, earned multiple academic awards. </li>
            </ul>
          
            
            
</div>
<div   style={{borderLeft:"2px solid lightgray"}} class="col-md-6">

<ul style={{listStyle:"none"}}>
            <li  id="intro4" > <span className="material-icons">star</span>The English Playgroup and Primary School</li> 
<li  id="intro1" >Diploma </li>

<li  id="intro1" >Perfect attendance record, graduated with academic honors. 

</li>
            </ul>
></div>

</div>     

<br/>
<label id="headdata"  style={{color:"purple"} } >Experience</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">

<ul style={{listStyle:"none"}}>
            <li id="intro4" > <span className="material-icons">star</span>  Kuwait Counseling Center</li> 
<li  id="intro1" > Head of Psychological Development</li>

<li  id="intro1" > Current employer. Design, develop, and integrate our counseling programs. Responsible for training and retention of new employees. 

</li>
            </ul>
            
            
</div>
<div style={{borderLeft:"2px solid lightgray"}} class="col-md-6">
<ul style={{listStyle:"none"}}>
            <li id="intro4"  ><span style={{color:"purple"}}className="material-icons">star</span> Certified Nursing Assistant </li> 
<li   id="intro1" >Responsible for patient care. Monitored and charted vitals, administered medications, and ensured patients were comfortable.  </li>

<li id="intro1" >Ensured patient’s safety and performed high-quality assistance in a 130-bed long-term care facility



</li>
            </ul>
</div>

</div>     
<br/>
<label id="headdata"  style={{color:"purple"} } >Honors & Awards</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">


<ul style={{listStyle:"none"}}>
            <li id="intro4" class="font-weight-bold" ><span style={{color:"purple"}}className="material-icons">star</span> Graduated with honors (top of my class) </li> 
<li id="intro1" style={{color:"blue"}}>Completed college with the highest possible grade-point average. </li>

            </ul>
            
            
</div>

<div style={{borderLeft:"2px solid lightgray"}} class="col-md-6">
 <ul style={{listStyle:"none"}}>
            <li id="intro4" class="font-weight-bold"><span style={{color:"purple"}}className="material-icons">star</span> Medical award of excellence  </li> 
<li id="intro1" style={{color:"blue"}}>Honored by Farwaniya Hospital for my excellent patient care abilities. 

</li>

            </ul>

</div>

</div>

    
   
   
              
        </div>




	

</div>
     
      
    );
  }
  
  export default UserProfile;
  