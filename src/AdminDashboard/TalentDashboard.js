import React from 'react';
import '../Styles/AdminEmployee.css'
import {Link} from 'react-router-dom'
import profileimg from '../assets/img/logo/girl.png'
function TalentDashboard() {


    return(
        <div className="TalentDashboard">
<div class="container">
  
    
  <div class="card">

<div class="row">
    <div class="col">
    <img id="imgdata"  src={profileimg}/>
    
    

    </div>
    <div class="col">
    <h3 id="head3">Megan Dudding</h3> 
   
    </div>

</div>
  
    <br/>

<div class="row">
            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> View My </h3>
                       <p id="subdata">Dashboard</p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/mytalentdashboard"> <button id="btn1"   type="button" class="btn btn-primary">Check</button></Link>
                    
                  
                     </div>
                      
                  
                
                </div>
              
              
              
              
              
              
              
              
              
              
              </div>
            </div>
            
          








            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> Here Is</h3>
                       <p id="subdata">My Profile </p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/Talentprofile"> <button id="btn1"   type="button" class="btn btn-primary">Check</button></Link>
                    
                  
                     </div>
                      
                  
                
                </div>
              
              
              
              
              
              
              
              
              
              
              </div>
            </div>
            
          




            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> My Company</h3>
                       <p id="subdata">WishList </p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/Talentwishlist"> <button id="btn1"   type="button" class="btn btn-primary">Check</button></Link>
                    
                  
                     </div>
                      
                  
                
                </div>
              
              
              
              
              
              
              
              
              
              
              </div>
            </div>
            
          



          </div>
       
       
       
       
       
       

  </div>
    
    </div>



        </div>
    )
}
export default TalentDashboard