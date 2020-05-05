import React from 'react';
import '../Styles/TalentOverview.css'
import {Link} from 'react-router-dom'
function MainDashboard() {
    return (
      <div className="MainDashboard">




        <h2 id="main">Admin Dashboard</h2>
        <br/>
       <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <div class="row">
        <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">3</div>
            </div>
        </div>
        </div>
                
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Monthly Subscription </h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            
            
            
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <div class="row">
        <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">2</div>
            </div>
        </div>
        </div>
                
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Annual Subscription </h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            
            
            


            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <div class="row">
        <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">5</div>
            </div>
        </div>
        </div>
                
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Total Subscription </h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            
            
            



            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <div class="row">
        <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">5</div>
            </div>
        </div>
        
        
        
        
        
        
        </div>
                
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Resume </h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            
            
            

         
         
          </div>





{/* {skills} */}

          <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
               
                <div class="card-body">
                  <h4 id="head4" class="card-title">Total Companies</h4>
                  <hr/>
                  <div class="row">

                  <div  id="reg1" class="col-md-6 col-sm-6">
                    Registered Companies
                  </div>

                  <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">5</div>
            </div>
        </div>
        
        
        
        



                  </div>


                
                 
                </div>
                
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
           
           
           
           
           
            <div class="col-md-4">
              <div class="card card-chart">
               
                <div class="card-body">
                  <h4 id="head4" class="card-title">Sector</h4>
                <hr/>
                 <div class="row">


                   <div id="data" class="col"> Professional Services</div>
                   <div id="data" class="col">Creative</div>
                   

                 </div>
                 <br/>
                 <div class="row">



<div id="data" class="col">Financial Services</div>
<div id="data" class="col">Transport & Logistics</div>

</div>
<br/>
                 <div class="row">


<div id="data" class="col">Consumer</div>
<div id="data" class="col">Telecom,Media &Tech</div>

</div>
<div class="row">



<div id="data" class="col">Government & Non-Profit</div>
<div id="data" class="col">Manufacturing & Engineering</div>

</div>


                  
                  
 
                
                </div>
                
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            <div class="col-md-4">
              <div class="card card-chart">
               
                <div class="card-body">
                  <h4 id="head4" class="card-title">Total Talents</h4>
                  <hr/>
                  <div class="row">

                  <div  id="reg1" class="col-md-6 col-sm-6">
                    Registered Talents
                  </div>

                  <div class="col-md-2 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">5</div>
            </div>
        </div>
        
        
        
        



                  </div>


                
                 
                </div>
                
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
           
           
           
           
           
           
           
           
           
           
           
           
          
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          
           
           
           
           
           
           
          
          </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
          
        
        
        </div>
      </div>
      </div>
    );
  }
  
  export default MainDashboard;
  