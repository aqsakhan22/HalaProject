import React from 'react';
import '../Styles/profileform.css'
import Checkbox from '@material-ui/core/Checkbox';





function Dashboard() {
 

  
  
  
  
  


    return (
      <div className="Dashboard">
      
     
        <div className="container-fluid">
        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  
                  <p class="card-category">Complete your profile</p>
                </div>
                <br/>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">First Name (disabled)</label>
                          <input type="text" class="form-control" disabled value="MEGAN"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Last Name</label>
                          <input type="text" class="form-control" disabled value="DUDDONG"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email address</label>
                          <input type="email" class="form-control" disabled value="4strokes@gmail.com"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          
                          <input  id="textdata" type="text" class="form-control" placeholder="Location"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                         
                          <input id="textdata" type="text" class="form-control" placeholder="Phone No"/>
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
    <span id="head1" >Profile Picture</span>
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
                  <h4 class="card-title">Salary & Sectors</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  <div style={{border:"1px solid lightgray"}}  class="row">
                     
            

                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Sector</label>
                          <input   type="text" class="form-control" disabled value="Professional Services"/>
                        </div>
                      </div>
                      <br/>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Sub Category</label>
                          <input  type="text" class="form-control" disabled value="Consulting & Advisory"/>
                        </div>
                      </div>
                      
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Salary</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                
                   

                   
                    
                  
                   
                                 
<br/>
</form>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

            <div class="col-md-3">

<div class="card card-profile">
  
  <div class="card-body">

  <form class="md-form">
  <div  class="file-field">
    <span id="head1">Cover Video</span>
    <div  class="btn btn-primary btn-sm float-left">
      
      <input  type="file"/>
    </div>
    
  </div>
</form>
   
 
  </div>
</div>

</div>



          </div>
         
        
        
        
        
        
        
        
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
                            
                            <textarea class="form-control" rows="10"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                                 
<br/>
</form>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

            <div class="col-md-3">

<div class="card card-profile">
  
  <div class="card-body">
   
  <form class="md-form">
  <div  class="file-field">
    <span id="head1">Upload Cv</span>
    <div  class="btn btn-primary btn-sm float-left">
      
      <input  type="file"/>
    </div>
    
  </div>
</form>
  </div>
</div>

</div>



          </div>
         
        
        {/* {Qualification & Certification} */}

          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Qualification & Certification</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">School</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Subject</label>
                          <input id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                    </div>
                
                   <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Qualification Level</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Result</label>
                          <input id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                    </div>
                  
                    

                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Complete Year</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                     
                      
                      
                    </div>

                    <div id="fieldList"  >
                       
                       </div>
                   
                    <div class="row">
                        <div class="form-group">
                        
                          <button type="submit" id="addMore" class="btn btn-primary">Add another Qualification</button>
                          
                         
                        
                        </div>
                       
                      </div>
                  
                    
                   <br/>
                   
                   
                   <br/>
                   {/* <div id="fieldList1" style={{border:"1px solid lightgray"}}  class="row">

                     </div>
                     */}
                    
                                 
<br/>
</form>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

            <div class="col-md-3">

<div class="card card-profile">
  
  <div class="card-body">
   
  <form class="md-form">
  <span id="head1">Current Status</span>
  <div  class="file-field">
    
    <div  class=" btn-sm float-left">
      
    <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Hire Me</a>
                          
    </div>
    <div  class=" btn-sm float-left">
      
    <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Unavailable</a>
    </div>
    
  </div>
</form>
  </div>
</div>

</div>



          </div>
         
        
        
        
        
         
                    
                    
        
        
  
        {/* {Experience} */}
        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Experience</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Title</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Employment Type</label>
                          <input id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                    </div>
                
                   <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Company Name</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Location</label>
                          <input id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                    </div>

                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                        
                          <input  type="date" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                        
                        <input   type="date" class="form-control" />
                          
                        </div>
                      </div>
                    </div>
                   
                   
                   
                   
                   <br/>
                    
                   
                    <div id="fieldList1">


                    </div>
                   
                   <button type="submit" id="addMore1" class="btn btn-primary">Add another Experience</button>
                   
                   
                   <br/>
                   
                   
                   
                   
                   
                                 
<br/>
</form>
                
                
                
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

            <div class="col-md-3">

<div class="card card-profile">
  
  <div class="card-body">
   
  <form class="md-form">
  <span id="head1">Job Type</span>
  <div  class="file-field">
    
    <div  class=" btn-sm float-left">
      
    <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Permanant</a>

             <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Contract</a>
                          
    </div>
    <div  class=" btn-sm float-left">
      
    <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Internship</a>
                          <Checkbox
       
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       color="primary"
     />
                          <a id="head3" href="#" >Remote</a>
    </div>
    
    
    
  </div>
</form>
  </div>
</div>

</div>



          </div>
         
        
        
        
        
         
                    
                    
        
       
        

    
        {/* {Skills} */}

        <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Skills</h4>
                 
                </div>
                <br/>
                <div class="card-body">
                  <form>
                  <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Skills</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                   


                    {/* <ColorButton variant="contained" color="primary" className={classes.margin}  startIcon={<SaveIcon />}>
        Update Profile
      </ColorButton> */}
                    {/* <Button
        variant="contained"
        backgroundColor='#9c27b0'
        color="primary"
        size="large"
        
        startIcon={<SaveIcon />}
      >
        Update Profile
      </Button> */}
                    

                    {/* <MyButton  startIcon={<SaveIcon />}>Update Profile</MyButton>;  */}
                  
                   {/* <label>Salary</label>
                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      
                
                   

                    
                    </div> */}
                   
                                 
<br/>
</form>
                </div>
              </div>
            </div>
            


            {/* {card yaha sy start hai} */}
          

           

          </div>
         
        
        
  
         
        </div>
      </div>
    
    );
  }
  
  export default Dashboard;
  