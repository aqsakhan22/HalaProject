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
                  
                  <p class="card-category">Company profile</p>
                </div>
                <br/>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">First Name (disabled)</label>
                          <input type="text" class="form-control" disabled value="employee first name"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Last Name</label>
                          <input type="text" class="form-control" disabled value="company last name"/>
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
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                       
                          <input style={{textAlign:"left"}} id="textdata" type="text" class="form-control" placeholder="Riyadh, Saudi Arabia"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                        <label class="bmd-label-floating">Company Name</label>
                          <input  style={{textAlign:"left"}} id="textdata" type="text" class="form-control" disabled value="identiti"/>
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
    <span id="head1" >Company Logo</span>
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
         
        
        {/* {Cover Letter} */}
        
        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Cover Letter</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  
                    
                    <div style={{border:"1px solid lightgray"}} class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                       
                          <div class="form-group">
                            
                            <textarea class="form-control" rows="8">

                            Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. 
                            In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. 
                            Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante accumsan ac est. 
                            Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. 
                            Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum,et pulvinar tortor luctus.
                             Suspendisse condimentum lorem ut elementum aliquam. Mauris nec


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
  