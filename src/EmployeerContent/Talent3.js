import React from 'react';
import '../Styles/profile.css'
import identiti from '../assets/img/logo/ProfileDefault.png'
import {Link} from 'react-router-dom' 
function Talent3() {
    return (
      <div className="Talent3">
         
		  
    <div class="container emp-profile">
		
      
        
                {/* <span id="name1"style={{color:"purple"}}>Email</span> */}
                <div style={{borderBottom:"2px solid lightgray"}} class="row">
                    
               
                    <div  class="col-md-4 " class="align-top">
                    <label id="name"style={{color:"purple"}}>Raj Heronea</label>
                        <br/>
                        
                    <div id="imagedata" >      
                    <img   style={{width:"100%"},{height:"50%"}}src={identiti} alt=""/> 
                     
                         
                     </div>
               
                    <div >
                    
                        <label id="member">Member since 10/11/19</label> 
                        <br/>
                        <label id="name1" >rajhernoea@gmail.com</label>
                   
                    </div>
                   
                        
                    </div>
                    
                    <div  class="col-md-6"> 
                    <br/>
                    
                    
                    <div  style={{marginLeft:"30px"}} class="row"> 
                    
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Academic Level</label>
                                                <p  id="intro1">: Associates </p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Age</label>
                                                <p  id="intro1">41</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Salary</label>
                                                <p  id="intro1">$6500</p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Gender</label>
                                                <p  id="intro1">Male </p>
                                            </div>
                                            
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Location</label>
                                                <p  id="intro1">Egypt </p>
                                            </div>
                                            <div  class="col-md-4">
                                                <label id="intro" class="font-weight-bold" style={{color:"purple"}}>Sector</label>
                                                <p  id="intro1">Search Engine Optimization </p>
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
                Search Engine Optimization is what I do! I have been making websites rank better since 2004. I originally graduated from college with my Associates Degree in Computer Science. After landing my first gig, I discovered my boss was struggling to rank our business locally. I had no experience in this field, but I jumped in heads first. I quickly learned not only did I enjoy SEO work I excelled at it. 


              </p>
              <p  class="text-left" id="para">
              I am looking for a medium to large company that needs a full-time SEO guru. I am a self-starter that is ready to help your company rank. So if you want to increase your organic ranking and get more bang for your buck on your PPC, I am your guy! 


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

        
<span  id="intro1" id="intro3" id="round">SEO</span>
       
</div>
<br/>
<br/>
<div  class="col-md-6">     
<span   id="intro1" id="intro3" id="round">PPC</span>
     
</div>

      
       
    
       
      
</div>
<br/>

<div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">
       
       <span    id="intro1" id="intro3" id="round">SEM </span>
               
       </div>
       <br/>
<br/>
<div  class="col-md-6">
       
       <span  id="intro1" id="intro3" id="round">Email Marketing  </span>
       

      
       </div>
       </div>
       <br/>
       <div   style={{color:"blue"}}  class="row" >
<div  class="col-md-6">

        
<span    id="intro1" id="intro3" id="round">Client retention </span>
       

       
        </div>
        <br/>
<br/>
        <div  class="col-md-6">

        

       
        <span   id="intro1" id="intro3" id="round">Wordpress  </span>
       

       
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
<li  id="intro1"  > Tech Planet</li> 


</ul>
          
            
            
</div>

<div  class="col-md-6">
<br/>

<ul > 

<li  id="intro1" >Associates Degree In Computer Technology </li>

</ul>
          
            
            
</div>





</div>     

<br/>
<label id="headdata"  style={{color:"purple"} } >Experience</label>
<div style={{borderBottom:"2px solid lightgray"}} class="row"> 

<div class="col-md-6">
<br/>
<ul >
<li id="intro1" > Grissom's Computer Repair</li> 
            <br/>
<li  id="intro1" > Basic computer repair/networking</li>
<br/>

<li  id="intro1" >Ran a full SEO campaign for the company  </li>

            </ul>
            
            
</div>
<div class="col-md-6">
    <br/>
<ul >
<li  id="intro1"  > Carters SEO Services  </li> 
<br/>
<li  id="intro1" > Web-based SEO Services </li> 
<br/>
<li   id="intro1" >Worked on all facets of SEO with multiple industries and clients

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
<li id="intro1" class="font-weight-bold" > Awarded SEO of the year award </li> 

</ul>
            
            
</div>



<div class="col-md-6">
<br/>

<ul >


<li id="intro1" style={{color:"blue"}}>For excellence in service at Carter's. 

</li>
</ul>
            
            
</div>




</div>

    
   
   
              
        
</div>
</div>
     
      
    );
  }
  
  export default Talent3;
  