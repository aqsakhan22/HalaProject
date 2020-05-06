import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/ProfileDefault.png'
import {Link} from 'react-router-dom' 
function Talent2() {
    return (
      <div className="Talent2">
         
		  
    <div class="container emp-profile">
		
      
        
                {/* <span id="name1"style={{color:"purple"}}>Email</span> */}
                <div style={{borderBottom:"2px solid lightgray"}} class="row">
                    
               
                    <div  class="col-md-4 " class="align-top">
                    <label id="name"style={{color:"purple"}}>Marcus Sanders </label>
                        <br/>
                        
                    <div id="imagedata" >      
                    <img   style={{width:"100%"},{height:"50%"}}src={identiti} alt=""/> 
                     
                         
                     </div>
               
                    <div >
                    
                        <label id="member">Member since 02/21/20</label> 
                        <br/>
                        <label id="name1" >marcussanders@gmail.com</label>
                   
                    </div>
                   
                        
                    </div>
                    
                    <div  class="col-md-6"> 
                    <br/>
                    
                    
                    <div  style={{marginLeft:"30px"}} class="row"> 
                    
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  id="intro1">Associate Degree</p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  id="intro1">31</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  id="intro1">$4000</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  id="intro1">Male  </p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  id="intro1">Dubai </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Sector</label>
                                                <p  id="intro1">Automative </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>SubCategory</label>
                                                <p  id="intro1">Consulting & Advisory </p>
                                            </div>
                                        </div>
                       
                    </div>
                    
                    <div class="col">
                    <br/>
                  
                   <Link><input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Download CV"/></Link>     
                        <br/>
                        <br/>
                        
                         <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="Hire Me"/>
                        <br/>
                        <br/>
                        <input id="edit" style={{backgroundColor:"purple"}} type="submit" class="profile-edit-btn" name="btnAddMore" value="ShortList"/>
                        <br/>
                        
                    </div>
                    
                </div>

                
{/* {Resume Start} */}
                <h3 class="font-weight-bold" style={{color:"purple"}}>Description</h3>
              
                <div style={{borderBottom:"2px solid lightgray"}}>
                <p  class="text-left" id="para">
                Hello, I'm Marcus, automotive enthusiast extraordinaire. I've always enjoyed working on automobiles. I enjoy it so much that I decided to turn it into a career. 
              </p>
              <p  class="text-left" id="para">
              I started out working at a small oil change center and quickly advanced to a management position. It was at this point that I decided to further my automotive education. I went to school for automotive technology degree. I have the skills, and I want to move forward. Please contact me if you want to talk! 
              </p>
             
                </div>
             
               

                <h3 class="font-weight-bold" style={{color:"purple"}}>My Personality </h3>
              
              <div style={{borderBottom:"2px solid lightgray"}}>
              <p  class="text-left" id="para">
              

8% of men and 17% of women share this personality type with you. You get along with people very well, and you are the life of any party. You are attentive, caring, and always ready to help, even if you have to sacrifice your interests for others. Yet you’re very independent in your deals and, as a rule, you get everything without any side help. You only wait for emotional support from your close ones.
              </p>
              
              </div>
           

{/* {end of resume} */}
<div style={{borderBottom:"2px solid lightgray"}}  class="row">
    <div  class="col-md-6">
<h3 class="font-weight-bold" style={{color:"purple"}}>Skills</h3>
<br/>
<div  style={{color:"blue"}} class="font-weight-bold" class="row">

<div   class="col-md-6">

        
<span  id="intro1" id="intro3" id="round">Mechanical Aptitude </span>
       
</div>
<br/>
<br/>
<div  class="col-md-6">     
<span   id="intro1" id="intro3" id="round">Leadership Skills</span>
     
</div>

      
       
    
       
      
</div>
<br/>

<div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">
       
       <span    id="intro1" id="intro3" id="round">Customer Relations  </span>
               
       </div>
       <br/>
<br/>
<div  class="col-md-6">
       
       <span  id="intro1" id="intro3" id="round">Employee Development </span>
       

      
       </div>
       </div>
       <br/>
       <div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">

        
<span    id="intro1" id="intro3" id="round">Scheduling </span>
       

       
        </div>
        <br/>
<br/>
        <div  class="col-md-6">

        

       
        <span   id="intro1" id="intro3" id="round">Human Resources  </span>
       

       
        </div>
        
       
    
       
      

</div>
</div>
<div style={{borderLeft:"2px solid lightgray"}}  class="col-md-6" >
<h3 class="font-weight-bold" style={{color:"purple"}}>Cover Video</h3>
<br/>
<div style={{color:"blue"}} class="font-weight-bold" class="row">
<div class="col-md-8">
<div id="videos" class="embed-responsive embed-responsive-16by9">
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
<br/>

<ul > 
<li   id="intro1"  >  Valdosta State University (online)</li> 
<br/>

</ul>
          
            
            
</div>
<div   class="col-md-6">
<br/>

<ul >
<li   id="intro1"  >  Graduated with an Associates Degree in Automotive Technology. 


</li> 


            <br/>

            </ul>
</div>

</div>     

<br/>
<label id="headdata"  style={{color:"purple"} } >Experience</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">
<br/>
<ul >
{/* <li style={{listStyle:"none"}} id="intro4" > <span className="material-icons">star</span>  EST Automotive Dubai</li>  */}
            {/* <br/> */}
            <li  id="intro1" >EST Automotive Dubai</li>
            <br/>
<li  id="intro1" > Oil Change Specialists</li>
<br/>



            </ul>
            
            
</div>
<div class="col-md-6">
    <br/>
<ul >

<li  id="intro1" > Manager</li>
<br/>
<li  id="intro1" > Changed Oil and serviced vehicles. As a manager, I handled payroll, HR duties, ordering, and scheduling. 

</li> 





            </ul>
</div>

</div>     
<br/>
<label id="headdata"  style={{color:"purple"} } >Honors & Awards</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">
<br/>

<ul >
<li  id="intro1" class="font-weight-bold" > Quarterly Customer Satisfaction Award </li> 
<br/>
<li id="intro1" style={{color:"blue"}}>Awarded for obtaining the highest customer satisfaction rating within the company.  </li>
</ul>
            
            
</div>

<div  class="col-md-6">
    <br/>
 <ul >
<li  id="intro1" class="font-weight-bold"> Employee Satisfaction Award   </li> 
<br/>
<li id="intro1" style={{color:"blue"}}>Received award for maintaining the lowest turnover rate for 2019.  

</li>

            </ul>

</div>

</div>

    
   
   
              
        
</div>
</div>
     
      
    );
  }
  
  export default Talent2;
  