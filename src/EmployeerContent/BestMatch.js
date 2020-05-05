import React from 'react'
import '../Styles/profileform.css'
 import logo from '../assets/img/logo/profile.png'
 import '../Styles/Best.css'
 import {Link} from 'react-router-dom'
function BestMatch() {

    return(
        <div className="BestMatch">

<div className="EditProfile">
      
     
      <div className="container">
   
     <div    style={{border:"2px solid lightgray"}} class="card">
     <div style={{height:"80px"}}  class="card-body">
     <div class="row">
       
       <div class="col-md-8" >
         
       <div class="dropdown">
         <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Search By Category
         </button>
         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a class="dropdown-item" href="#">Professional Services</a>
           <a class="dropdown-item" href="#">Creative</a>
           <a class="dropdown-item" href="#">Financial Services</a>
           <a class="dropdown-item" href="#">Transport & Logistics</a>
           <a class="dropdown-item" href="#">Consumer</a>
           <a class="dropdown-item" href="#">Telecoms, Media & Tech</a>
           
           <a class="dropdown-item" href="#">Government & Non-Profit</a>
           <a class="dropdown-item" href="#">Manufacturing & Engineering</a>
           <a class="dropdown-item" href="#">All</a>
         </div>
       </div>
       
       </div>
       <div class="col-md-4">
       <div class="active-cyan-3 active-cyan-4 mb-4">
       <input class="form-control" type="text" placeholder="Search by Name" aria-label="Search " />
       </div>
       </div>
       </div>
       
           
           
           
           
           
           
           
       </div>    
     </div>





     
    
       




    
    
    

     <div class="row">

     <div  style={{border:"2px solid lightgray"}} class="card">
              {/* <div class="card-header card-header-primary">
                
                <p class="card-category">Complete your profile</p>
              </div> */}
              <br/>
              <div  style={{height:"120px"}}  class="card-body">
                
                  <div  class="row" style={{marginTop:"-40px"}}>
                   
                    <div class="col-md-3">
                      <div class="form-group">
                       <img src={logo} style={{width:"200px"},{marginTop:"30px"},{height:"130px"}}  />
                      </div>
                    </div>
                   
                    <div class="col-md-4" style={{marginTop:"5px"}} >
                      <div class="form-group">
                      <label id="textset" >Megan Dudding</label>
                     
                      <label id="textset1">Professional Services(Consulting & Advisory)</label>
                      <br/>
                      <label  id="textset2">1st position</label>
                      </div>
                      <br/>
                    </div>
                    <div    id="btnsection" class="col" >
                      <div  class="form-group">
                     
                      <a id="view" href="#" >Internship</a>
                      <br/>
                    <Link to="/Talent1"><button id="intern"   type="submit" class="btn btn-primary" style={{borderRadius:"20px"}} >View Profile</button>
                      </Link>  
                      </div>
                    </div>
                   
                   
                    
                   
                  </div>
                 

                  

                             
                




               
               
              </div>
              
            </div>
         
         
         
         
         
         
         
  
        
          
          
          
     </div>
          
          
          
          
          
     <div class="row">
       
       <div   style={{border:"2px solid lightgray"}} class="card">
                {/* <div class="card-header card-header-primary">
                  
                  <p class="card-category">Complete your profile</p>
                </div> */}
                <br/>
                <div  style={{height:"120px"}} class="card-body">
                  
                    <div style={{marginTop:"-40px"}}  class="row">
                     
                      <div class="col-md-3">
                        <div class="form-group">
                         <img src={logo} style={{width:"200px"},{marginTop:"30px"},{height:"130px"}} />
                        </div>
                      </div>
                     
                      <div class="col-md-4" style={{marginTop:"5px"}}>
                        <div class="form-group">
                        <label id="textset" >Marcus Sanders</label>
                        <br/>
                        <label id="textset1">Manufacturing & Engineering</label>
                        <br/>
                        <label  id="textset2">2nd position</label>
                        </div>
                        <br/>
                      </div>
                      <div   id="btnsection" class="col" >
                        <div  class="form-group">
                       
                        <a  id="view" href="#"  >Permanent</a>
                        <br/>
                        <button id="Permanent"  type="submit" class="btn btn-primary" style={{borderRadius:"20px"}}  >View Profile</button>
                        </div>
                      </div>
                      
                     
                    </div>
                   
  
                    
  
                               
                  
  
  
  
  
                 
                 
                </div>
              </div>
           
           
           
           
           
           
           
       </div>
          
            
            
            
            
            
            
            
            
            
          

       <div class="row">
       
       <div  style={{border:"2px solid lightgray"}} class="card">
                {/* <div class="card-header card-header-primary">
                  
                  <p class="card-category">Complete your profile</p>
                </div> */}
                <br/>
               
                <div  style={{height:"120px"}} class="card-body">
                  
                    <div style={{marginTop:"-40px"}}  class="row">
                     
                      <div class="col-md-3" >
                        <div class="form-group">
                         <img src={logo} style={{width:"200px"},{marginTop:"30px"},{height:"130px"}}  />
                       
                        </div>
                      
                      </div>
                     
                      <div class="col-md-4" style={{marginTop:"5px"}}>
                        <div class="form-group">
                        <label id="textset" >Raj Heronea</label>
                        <br/>
                        <label id="textset1">Professional Services</label>
                        <br/>
                        <label  id="textset2">3rd position</label>
                        </div>
                        <br/>
                      </div>
                      <div   id="btnsection" class="col" >
                        <div  class="form-group">
                       
                        <a id="view" href="#" >Contract</a>
                        <br/>
                        <button  type="submit" class="btn btn-primary" style={{borderRadius:"20px"}} >View Profile</button>
                        </div>
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
export default BestMatch;