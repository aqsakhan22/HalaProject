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
                  <h4 class="card-title">Edit Profile</h4>
                  <p class="card-category">Complete your profile</p>
                </div>
                <br/>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">First Name (disabled)</label>
                          <input type="text" class="form-control" disabled value="abc"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Last Name</label>
                          <input type="text" class="form-control" disabled value="khan"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email address</label>
                          <input type="email" class="form-control" disabled value="abc@gmail.com"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Location</label>
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">PhoneNo</label>
                          <input id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                    </div>
                   <br/>
                    <div class="row">
                      <div class="col-md-4">
                      <div class="dropdown">
  <button type="button"  class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Select Category
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#" class="active">Select Category</a>
    <a class="dropdown-item" href="#">Software & It Development</a>
    <a class="dropdown-item" href="#">Agriculture</a>
    <a class="dropdown-item" href="#">Accountant</a>
  </div>
  </div>

                      </div>
                     
                     </div>
<br/>
<h3 class="font-weight-bold" style={{color:"purple"}}>Cover Letter</h3>
                   
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
                    <h3 class="font-weight-bold" style={{color:"purple"}}>Qualification & Certification</h3>
                   
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
                      <div class="col-md-6">
                        <div class="form-group">
                        
                          <button type="submit" class="btn btn-primary">Add another Qualification</button>
                        </div>
                      </div>
                    </div>
                   <br/>
                    
                   <h3 class="font-weight-bold" style={{color:"purple"}}>Experience</h3>
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
                    
                   <label>Salary</label>
                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          
                          <input  id="textdata" type="text" class="form-control"/>
                        </div>
                      </div>
                      
                
                   

                    
                    </div>
                   <br/>
                    
                   <h3 class="font-weight-bold" style={{color:"purple"}}>Skills</h3>
                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                         
                          <input   type="text" class="form-control" />
                        </div>
                      </div>
                      
                
                   

                    
                    </div>
                   <br/>

                   <h3 class="font-weight-bold" style={{color:"purple"}}>Subscription Info</h3>
                    <div style={{border:"1px solid lightgray"}}  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                         
                          <input   type="text" class="form-control" />
                        </div>
                      </div>
                      
                
                   

                    
                    </div>
                   <br/>
                    
                    





                    
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-profile">
                
                <div class="card-body">
                  <h4 class="font-weight-bold" style={{color:"purple"}}>Upload Option</h4>
                 
                  <button type="file" class="btn btn-primary pull-left ">Upload Document</button>
                  
                  {/* {btn-round} */}
                  
                 
                  
               
                 


          <div class="row">
         
                
                
                <button type="file" class="btn btn-primary pull-left ">Upload Video</button>
                </div>
                
          <br/>
                <div class="row-2">
                <h4 class="font-weight-bold" style={{color:"purple"}} >Job Type</h4>
                </div>

                  <div class="row">
                 
                  
                  <ul style={{listStyle:"none"}}  >
                  
                 <li class="pull-left">
                        <Checkbox
       
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
                  <a href="#" >Permanent</a>
                        </li>
                        <li class="pull-left">
                        <Checkbox
       
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
                  <a href="#" >Contract</a>
                        </li>
                        
                 </ul>
                 
                  </div>
                 
                  <div class="row">
                  <ul style={{listStyle:"none"}}  >
                
                        <li class="pull-left">
                        <Checkbox
       
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
                  <a href="#" >Internship</a>
                        </li>
                        <li class="pull-left">
                        <Checkbox
       
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
                  <a href="#" >Remote</a>
                        </li>
                 </ul>
                 
                  </div>
                 
               
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    
    );
  }
  
  export default Dashboard;
  