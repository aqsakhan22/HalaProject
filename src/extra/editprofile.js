import React from 'react';
function Dashboard() {
    return (
      <div className="Dashboard">
      
     
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Form</h4>
                  <p className="card-category">Complete your Form</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row" >
                      <div className="col-md-5" style={{border:"1px solid lightgray"}} >
                        <div className="form-group"  >
                          <label className="bmd-label-floating">First Name</label>
                     
                        <input  type="text" className="form-control" placeholder="First Name"/>
                        
                        </div>
                      </div>
                      <div className="col-md-5" style={{border:"1px solid lightgray"}} >
                        <div className="form-group">
                          <label className="bmd-label-floating">Last Name</label>
                          <input  type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Email address</label>
                          <input type="email" className="form-control"/>
                        </div>
                      </div> */}
                    </div>
                    <div className="row" >
                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">Location</label>
                          <input type="text" className="form-control" placeholder="Location"/>
                        </div>
                      </div>
                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">Phone Number</label>
                          <input type="text" className="form-control" placeholder="Phone Number"/>
                        </div>
                      </div>
                    </div>
                    <div className="row-2" >
                   <div className="col-md-5" class="mt-3">
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
                    <div class="row">
{/* {choose file  resume or docx} */}
                    <div className="col-md-5" class="mt-3"  style={{border:"1px solid lightgray"}}>
                   <form class="md-form">
  <div class="file-field">
    <div class="btn btn-primary btn-sm float-left">
      
       PDF or Docx <input type="file"/>
    </div>
    
  </div>
</form>
                   </div>
                   {/* {profile video} */}
                   <div className="col-md-5" class="mt-3"  style={{border:"1px solid lightgray"}}>
                   <form class="md-form">
  <div class="file-field">
    <div class="btn btn-primary btn-sm float-left">
      
     Profile Video <input type="file"/>
    </div>
    
  </div>
</form>
                   </div>
                    </div>
                    {/* {Cover Later} */}
                    <h3 class="font-weight-bold" class="text-primary">Cover Letter</h3>
<div class="row-md-2" class="mt-4" style={{border:"1px solid lightgray"}}>
<div class="form-group">
  
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="10"></textarea>
</div>

</div>
{/* {Qualification} */}
                   
                   <h3 class="font-weight-bold" class="text-primary">Qualification and Certification</h3>

<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">School</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>

                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">Subject</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
</div>


<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">Qualification Level</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>

                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating">Result</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
</div>


<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          <label className="bmd-label-floating" >Complete Year</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>

                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <button type="submit" className="btn btn-primary pull-left">Add Another Qualification</button>
                        </div>
                      </div>
</div>
{/* {Salaray} */}
<h3 class="font-weight-bold" class="text-primary">Salary</h3>

<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Expected Salary"/>
                        </div>
                      </div>

</div>

{/* {Skills} */}
<h3 class="font-weight-bold" class="text-primary">Skills</h3>

<div class="row">
<div className="col-md-10" style={{border:"1px solid lightgray"}}> 
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Your Skills"/>
                        </div>
                      </div>

</div>


{/* {Subscription info} */}
<h3 class="font-weight-bold" class="text-primary">Subscription Info</h3>

<div class="row">
<div className="col-md-10" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Tell Us about subscription "/>
                        </div>
                      </div>

</div>

{/* {Experience} */}
<h3 class="font-weight-bold" class="text-primary">Experience</h3>

<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Title  "/>
                        </div>
                      </div>
                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Employment Type "/>
                        </div>
                      </div>

</div>

<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Company Name  "/>
                        </div>
                      </div>
                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="text" className="form-control" placeholder="Location"/>
                        </div>
                      </div>

</div>

<div class="row">
<div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="date" className="form-control" placeholder="Tell Us about subscription "/>
                        </div>
                      </div>
                      <div className="col-md-5" style={{border:"1px solid lightgray"}}>
                        <div className="form-group">
                          
                        <input type="date" className="form-control" placeholder="Tell Us about subscription "/>
                        </div>
                      </div>

</div>




<div class="row">
<div className="col-md-5">
                        <div className="form-group">
                          
                        <button type="submit" className="btn btn-primary pull-left">Add </button>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-group">
                          
                        <button type="submit" className="btn btn-primary pull-left">Update </button>
                        </div>
                      </div>

</div>
                    
                   
                 
                   
                  </form>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    
    );
  }
  
  export default Dashboard;
  