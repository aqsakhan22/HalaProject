import React from 'react';
import '../Styles/AdminEmployee.css'
import {Link} from 'react-router-dom'
function EmployeeDashboard() {


    return(
        <div className="EmployeeDashboard">
<div class="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 id="head" >Employee Dashboard</h2>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">
                        <h3 id="head2"> MyDashboard</h3>
                       <p id="subdata">Employee Dashboard</p>
                    </div>
                    <div class="icon">
                    <i className="material-icons" aria-hidden="true">dashboard</i>
                        {/* <i class="fa fa-graduation-cap" aria-hidden="true"></i> */}
                    </div>

              <Link to="/mydashboard"><a id="btn" href="#" class="card-box-footer">check <i class="fa fa-arrow-circle-right"></i></a></Link>      
                </div>
            </div>

            <div class="col-lg-4 col-sm-6">
                <div class="card-box bg-green">
                    <div class="inner">
                        <h3 id="head2"> My Profile </h3>
                        <p id="subdata"> Employer Profile </p>
                    </div>
                    <div class="icon">
                    <i className="material-icons" aria-hidden="true">account_box</i>
                    </div>
                    <Link to="/Employerprofile"><a id="btn" href="#" class="card-box-footer">check <i class="fa fa-arrow-circle-right"></i></a></Link>      
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card-box bg-orange">
                    <div class="inner">
                        <h3 id="head2"> Talent Shortlist </h3>
                        <p id="subdata"> ShortList </p>
                    </div>
                    <div class="icon">
                    <i className="material-icons" aria-hidden="true">favorite</i>
                    </div>
                    <Link to="/Employerwishlist"><a id="btn" href="#" class="card-box-footer">check <i class="fa fa-arrow-circle-right"></i></a></Link>      
                </div>
            </div>
            
        </div>
    </div>



        </div>
    )
}
export default EmployeeDashboard