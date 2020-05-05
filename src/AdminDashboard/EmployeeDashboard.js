import React from 'react';
import '../Styles/AdminEmployee.css'
import {Link} from 'react-router-dom'
import identiti from '../assets/img/logo/identiti.png'
function EmployeeDashboard() {


    return(
        <div className="EmployeeDashboard">
<div class="container">
  
    
  <div class="card">

<div class="row">
    <div class="col">
    <img id="imgdata"  src={identiti}/>
    
    

    </div>
    <div class="col">
    <h2 id="head3">Identiti</h2> 
   
    </div>

</div>
  
    <br/>

<div class="row">
            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> View Company </h3>
                       <p id="subdata">Dashboard</p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/mydashboard"> <button id="btn1"   type="button" class="btn btn-primary">Click Here</button></Link>
                    
                  
                     </div>
                      
                  
                
                </div>
              
              
              
              
              
              
              
              
              
              
              </div>
            </div>
            
          








            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> Here Is</h3>
                       <p id="subdata">Company Profile </p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/Employerprofile"> <button id="btn1"   type="button" class="btn btn-primary">Click Here</button></Link>
                    
                  
                     </div>
                      
                  
                
                </div>
              
              
              
              
              
              
              
              
              
              
              </div>
            </div>
            
          




            <div class="col-lg-4 col-md-12">
              <div id="card1" class="card">
               
                <div  class="card-body">
                  

                <h3 id="head2"> Talent</h3>
                       <p id="subdata">ShortList </p>
                
                
                
                
                </div>
              
                <div class="card-header card-header-tabs card-header-primary">
                  
                 
                     <div  class="col-md-4">
                     <Link to="/Employerwishlist"> <button id="btn1"   type="button" class="btn btn-primary">Click Here</button></Link>
                    
                  
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
export default EmployeeDashboard