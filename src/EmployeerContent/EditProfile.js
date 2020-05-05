import React from 'react';
import '../Styles/profileform.css'
import Checkbox from '@material-ui/core/Checkbox';





function EditProfile() {
 

    return (
      <div className="EditProfile">
      
     
        <div className="container-fluid">
        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  
                <h4 class="card-title">Company profile</h4>
                </div>
                <br/>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">First Name (disabled)</label>
                          <input type="text" class="form-control" disabled value="Hind"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Last Name</label>
                          <input type="text" class="form-control" disabled value="employeer last name"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Employeer Designation</label>
                          <input type="email" class="form-control"  disabled value="Talents Acquisition Manager"/>
                        </div>
                      </div>
                     
                    </div>
                    <br/>
                    <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Company Name</label>
                          <input type="email" class="form-control"  disabled value="Identiti"/>
                        </div>
                      </div>
                    <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Website address</label>
                          <input type="email" class="form-control"  disabled value="www.identiti.sa"/>
                        </div>
                      </div>
                     
                     
                    </div>
                  
                 
<br/>
                    

                  
              
                    
                  

                   
        
{/*                     
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button> */}
                   
                  </form>
                 
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

            <div class="col-md-3">

<div class="card card-profile">
  {/* <div class="card-avatar">
    <a href="javascript:;">
      <img class="img" src="../assets/img/faces/marc.jpg" />
    </a>
  </div> */}
  <div class="card-body">
   
  <form class="md-form">
  <div  class="file-field">
    <span id="head6" >Company Logo</span>
    <div  class="btn btn-primary btn-sm float-left">
      
      <input  type="file"/>
    </div>
    
  </div>
</form>
  </div>
</div>


















</div>



          </div>
         


        
        
        
        
        
        
        
        
        
        
        
        
        
        
         {/* {salary and sector} */}
         

         <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  {/* <h4 class="card-title">Deatails</h4> */}
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
               
                    
                    <div   class="row">
                     
            

                    <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Founded Since</label>
                          <input   type="text" class="form-control" value="2007"/>
                        </div>
                      </div>
                
                   
                     <br/>
                     <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Company Size </label>
                          <input   type="text" class="form-control" value="51-100"/>
                        </div>
                      </div>
                
                     
                   </div>
                   
                   
                   
                   
                   
                   
                   
                   
                   <br/>
                   
                   <div   class="row">
                     
            

                     <div class="col-md-6">
                         <div class="form-group">
                           <label class="bmd-label-floating">Head Headquarters</label>
                           <input   type="text" class="form-control" value="Riyadh, Saudi Arabia"/>
                         </div>
                       </div>
                 
                    
                      <br/>
                      <div class="col-md-6">
                         <div class="form-group">
                           <label class="bmd-label-floating">Industry </label>
                           <input   type="text" class="form-control" value="Computer Software"/>
                         </div>
                       </div>
                 
                      
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                     
                    
                    
                    
                    

                   
                    
                  
                   
                                 
<br/>
</form>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

         
          </div>
         
        
        
        
        
        
        
        
        
        
        
        {/* {Cover Letter} */}
        
        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Description</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  
                    
                    <div  class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                       
                          <div class="form-group">
                            
                            <textarea class="form-control" rows="4">

                            Authorized Apple Systems Integrator and a brand of SIS.  Our services include: SI Solutions of Apple Technology, Mobile Device Management, App Development, Creative Apple Solutions, Solutions for education and training and reselling of Apple Hardware online for B2B customers.

                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                                 
<br/>
</form>
<button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

         
          </div>
         
        
        
        
         
        </div>
      </div>
    
    );
  }
  
  export default EditProfile;
  