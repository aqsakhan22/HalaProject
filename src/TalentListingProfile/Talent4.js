import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/ProfileDefault.png'
import {Link} from 'react-router-dom' 
function Talent4() {
    return (
      <div className="Talent4">
         
		  
    <div class="container emp-profile">
		
      
        
                {/* <span id="name1"style={{color:"purple"}}>Email</span> */}
                <div style={{borderBottom:"2px solid lightgray"}} class="row">
                    
               
                    <div  class="col-md-4 " class="align-top">
                    <label id="name"style={{color:"purple"}}>Mike Lenning</label>
                        <br/>
                        
                    <div id="imagedata" >      
                    <img   style={{width:"100%"},{height:"50%"}}src={identiti} alt=""/> 
                     
                         
                     </div>
               
                    <div >
                    
                        <label id="member">Member since 01/28/20</label> 
                        <br/>
                        <label id="name1" >mikelenning@gmail.com</label>
                   
                    </div>
                   
                        
                    </div>
                    
                    <div  class="col-md-6"> 
                    <br/>
                    
                    
                    <div  style={{marginLeft:"30px"}} class="row"> 
                    
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  id="intro1">Bachelors</p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  id="intro1">54</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  id="intro1">$11000</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  id="intro1">Male  </p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  id="intro1">Morroco 

</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Sector</label>
                                                <p  id="intro1">Restaurant  </p>
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
                Love food? Me too! I am looking for a job that will allow me to flex my culinary skills. I like having creative freedom with menu choice as well as food choice. I started as a Sous-chef many years ago, and ever since, I have been cultivating my skills and developing my career. 
              </p>
              <p  class="text-left" id="para">
             
I have worked in multiple restaurants, but my favorite so far has been Mediterranean cuisine. If you are looking for a great chef with a killer CV, let me know! 


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

        
<span  id="intro1" id="intro3" id="round">Culinary Expertise </span>
       
</div>
<br/>
<br/>
<div  class="col-md-6">     
<span   id="intro1" id="intro3" id="round">Decision Making </span>
     
</div>

      
       
    
       
      
</div>
<br/>

<div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">
       
       <span    id="intro1" id="intro3" id="round"> Instructor  </span>
               
       </div>
       <br/>
<br/>
<div  class="col-md-6">
       
       <span  id="intro1" id="intro3" id="round">Management  </span>
       

      
       </div>
       </div>
       <br/>
       <div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">

        
<span    id="intro1" id="intro3" id="round">Food Prep</span>
       

       
        </div>
        <br/>
<br/>
        <div  class="col-md-6">

        

       
        <span   id="intro1" id="intro3" id="round">Customer Satisfaction  </span>
       

       
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
<li   id="intro1"  >  Morocco Culinary Institute</li> 
<br/>
<li  id="intro1" >Completed multiple culinary courses. </li>

</ul>
          
            
            
</div>
<div   class="col-md-6">
<br/>

<ul >
<li  id="intro1" > Fez Cooking School </li> 
            <br/>
<li  id="intro1" >Completed all culinary coursed offered at this location. </li>

            </ul>
</div>






<div   class="col-md-6">
<br/>

<ul >
<li  id="intro1" > Purdue University Global </li> 
            <br/>
<li  id="intro1" >Bachelors Degree in Culinary Arts. </li>

            </ul>
</div>










</div>     












<br/>
<label id="headdata"  style={{color:"purple"} } >Experience</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">

<br/>
<ul >
<li  id="intro1" >   Dia Salomas </li> 
            <br/>
<li  id="intro1" > Head Chef </li>
<br/>

<li  id="intro1" > Responsible for all aspects as related to cooking. Manged a full staff of 20+ four nights a week. 

</li>

            </ul>
            
            
</div>
<div class="col-md-6">

    <br/>
<ul >
<li  id="intro1"  > Little Bella </li> 
<br/>
<li  id="intro1" > Head Chef </li> 
<br/>
<li   id="intro1" >Ran and managed the full staff of little Bella alongside the owner. </li>


            </ul>
         
</div>




<div class="col-md-6">
<hr/>
    <br/>
<ul >
<li  id="intro1"  >Purdue University Global </li> 
<br/>
<li  id="intro1" > Online Cooking Instructor.  </li> 
<br/>
<li   id="intro1" >Taught online cooking classes. </li>

            </ul>
</div>






</div>     
<br/>
<label id="headdata"  style={{color:"purple"} } >Honors & Awards</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">
<br/>

<ul >
<br/>

<li id="intro1" style={{color:"blue"}}>Distinguished Dish Award </li>
<br/>
<li id="intro1" style={{color:"blue"}}>Prestigious award for culinary advancement </li>
</ul>
            
            
</div>

<div  class="col-md-6">
    <br/>
 <ul >

<br/>
<li id="intro1" style={{color:"blue"}}>ACF Chef Educator of the year award

 </li>
<br/>
<li id="intro1" style={{color:"blue"}}>Awarded while teaching at Purdue


</li>

            </ul>

</div>

</div>

    
   
   
              
        
</div>
</div>
     
      
    );
  }
  
  export default Talent4;
  