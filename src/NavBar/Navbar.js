import React from 'react';
import avatar from '../assets/img/profile.png'
function Navbar() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a class="font-weight-bold" className="navbar-brand" href="javascript:;" style ={{color:"purple"}}>My Profile</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
           
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link" href="javascript:;">
                 
                  <button type="submit" className="btn btn-primary pull-left">SignUp</button>
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 
                  <span class="font-weight-bold" style ={{color:"purple"}}>Megan Dudding</span>
                  
                </a>
                
              </li>
              <li class="nav-item avatar dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <img style={{verticalAlign:"middle"},{width:"50px"},{height:"50px"}} src={avatar} class="rounded-circle z-depth-0" alt="avatar image"/>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
            
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">LogOut</a>
          </div>
        </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  