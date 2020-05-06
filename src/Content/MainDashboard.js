import React from 'react';
import '../Styles/TalentOverview.css'
import {Link} from 'react-router-dom'
function MainDashboard() {
    return (
      <div className="MainDashboard">




        <h2 id="main">Talent</h2>
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
                 
                  
                </div>
                <h3 id="head" class="card-title">13 Views
                   
                  </h3>
                <div class="card-footer">
                  
                   
                    <p id="head1" > View Profile </p>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            
            
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
               
              
                 
                </div>
                <Link to="/editprofile">  <h3 id="head" class="card-title">Click Here
                   
                   </h3></Link>   
                <div class="card-footer">
                <h4 id="head1" > Edit Profile </h4>
                </div>
              </div>
            </div>
            
            
            






            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                
                  <h3 id="head" class="card-title"> <span id="no">1</span> Interview Shedule
                   
                  </h3>
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Upcoming Events </h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            

            
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                
                  <h3 id="head" class="card-title"> <span id="no">5</span> Companies
                   
                  </h3>
                </div>
                <div class="card-footer">
                  
                   
                    <h4 id="head1" > Company Wishlist</h4>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
            

         
         
          </div>





{/* {skills} */}

          <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
               
                <div class="card-body">
                  <h4 id="head4" class="card-title">Skills</h4>
                  <hr/>
                  <div class="row">

                    <div  id="skill" class="col">Employee Development</div>
                    <div id="skill" class="col"> Customer Relations</div>
                  </div>

<hr/>
                  <div class="row">

                    <div  id="skill" class="col">Problem Solving Ability</div>
                    <div id="skill" class="col"> Administrative Capabilities</div>
                  </div>
                  <hr/>
                  <div class="row">

                    <div  id="skill" class="col">Program development</div>
                    <div id="skill" class="col"> Psychological Evaluation</div>
                  </div>
                 
                </div>
                
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
           
           
           
           
           
           
           
           
           
           
            <div class="col-md-4">
              <div class="card card-chart">
               
                <div class="card-body">
                  <h4 id="head4" class="card-title">Talent Challenge Results</h4>
                <hr/>
                  <div class="row">
                    <div class="col">
                    <p id="challenge">
                    50 seconds
                   
                    
                    </p>
                    </div>
                    </div>
                 
                    <div class="row">
                    <div class="col">
                    <p id="challenge">
                   1 incorrect
                   
                    
                    </p>
                    </div>
                    </div>
                 
                    <div class="row">
                    <div class="col">
                    <p id="challenge">4 out of 5 poins</p>
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
                  <h4 id="head4" class="card-title">Resume</h4>
                <hr/>
                  <h3 id="resume">Download</h3>
                  <hr/>
                  <h3 id="resume">My Resume</h3>


                  
                  
 
                
                </div>
                
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          
           
           
           
           
           
           
          
          </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-tabs card-header-primary">
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                     
                     <h4 >My Personality</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                <p id="description">
                8% of men and 17% of women share this personality type with you.  You get along with people very well, and you are the life of any party.
                 You are attentive, caring, and always ready to help, even if you have to sacrifice your interests for others.
                  Yet you’re very independent in your deals and, as a rule, you get everything without any side help.
                   You only wait for emotional support from your close ones.
                </p>
                </div>
              </div>
            </div>
           
           
           
           
           
           
            
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-tabs card-header-primary">
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                     
                     <h4 >My Cover Video</h4>
                    </div>
                  </div>
                </div>
                <div   class="card-body">
                 

                  <div  class="embed-responsive embed-responsive-16by9">
  <iframe id="videocard" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
                  
               
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
  