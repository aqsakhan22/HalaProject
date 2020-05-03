import React from 'react';
import avatar from '../assets/img/profile.png'
import '../Styles/Navbar.css'

function NavBar() {

return(
    <div className="NavBar">
  <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
        <div class="navbar-wrapper">
          
          
          {/* <img style={{verticalAlign:"middle"},{width:"200p"},{height:"80px"}}  src={companylogo}/>
          <span id="Companyname" >Identiti</span>
          */}
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
           
            <ul className="navbar-nav">
             
              <li className="nav-item dropdown">
                <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 
                  <span id="profilename" >AdminName</span>
                  
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
)


}
export default NavBar;