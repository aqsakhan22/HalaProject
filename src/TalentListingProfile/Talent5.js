import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/ProfileDefault.png'
import {Link} from 'react-router-dom' 
function Talent5() {
    return (
      <div className="Talent5">
         
		  
    <div class="container emp-profile">
		
      
        
                {/* <span id="name1"style={{color:"purple"}}>Email</span> */}
                <div style={{borderBottom:"2px solid lightgray"}} class="row">
                    
               
                    <div  class="col-md-4 " class="align-top">
                    <label id="name"style={{color:"purple"}}>Janya Harper </label>
                        <br/>
                        
                    <div id="imagedata" >      
                    <img   style={{width:"100%"},{height:"50%"}}src={identiti} alt=""/> 
                     
                         
                     </div>
               
                    <div >
                    
                        <label id="member">Member since 04/06/20</label> 
                        <br/>
                        <label id="name1" >janyaharper@gmail.com</label>
                   
                    </div>
                   
                        
                    </div>
                    
                    <div  class="col-md-6"> 
                    <br/>
                    
                    
                    <div  style={{marginLeft:"30px"}} class="row"> 
                    
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  id="intro1">Student</p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  id="intro1">21</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  id="intro1">$2000</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  id="intro1">Female </p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  id="intro1">Turkey </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Sector</label>
                                                <p  id="intro1">Professional Services </p>
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
                First off: a little about me. I'm Janya, and I'm currently enrolled in online accounting classes. I will be graduating soon, and I'm searching for a career in the accounting or finance industry. I have worked as a teller at a bank while putting myself through school. 
              </p>
              <p  class="text-left" id="para">
              I'm looking for someone who wants a fresh, young, and vibrant addition to their company. While I may lack experience compared to your other candidates, I promise to make up for that with enthusiasm and willingness to learn. 
              </p>
              <p  class="text-left" id="para">
              Thanks for the opportunity. I look forward to speaking with you. 

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

        
<span  id="intro1" id="intro3" id="round">Money Management</span>
       
</div>
<br/>
<br/>
<div  class="col-md-6">     
<span   id="intro1" id="intro3" id="round">Microsoft Office Suite</span>
     
</div>

      
       
    
       
      
</div>
<br/>

<div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">
       
       <span    id="intro1" id="intro3" id="round">Customer Service </span>
               
       </div>
       <br/>
<br/>
<div  class="col-md-6">
       
       <span  id="intro1" id="intro3" id="round">Decision Making   </span>
       

      
       </div>
       </div>
       <br/>
       <div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">

        
<span    id="intro1" id="intro3" id="round" style={{fontSize:"10px"}}>Knowledge of banking 
industry standards </span>
       

       
        </div>
        <br/>
<br/>
        <div  class="col-md-6">

        

       
        <span   id="intro1" id="intro3" id="round">Organization </span>
       

       
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
<li   id="intro1"  >  Currently Enrolled at NW Online University</li> 
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

<li  id="intro1" > Curts Bank</li>
<br/>


            </ul>
            
            
</div>
<div class="col-md-6">
    <br/>
<ul >

<li  id="intro1" > Teller </li> 
<br/>

            </ul>
</div>








<div class="col-md-6">
    <br/>
<ul >

<li  id="intro1" > Help people with financial transactions daily.  

</li> 
<br/>

            </ul>
</div>












</div>     
<br/>
<label id="headdata"  style={{color:"purple"} } >Honors & Awards</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">
<br/>

<ul >

<li id="intro1" style={{color:"blue"}}>N/A</li>
</ul>
            
            
</div>




</div>

    
   
   
              
        
</div>
</div>
     
      
    );
  }
  
  export default Talent5;
  