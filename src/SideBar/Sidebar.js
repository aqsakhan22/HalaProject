import React from 'react';
import sidebar1 from '../assets/img/sidebar-1.jpg'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import UserProfile from './UserProfile'
function SideBar() {
    return (
      <div className="SideBar">
      
      <div className="sidebar" data-color="purple" data-background-color="white" data-image={sidebar1}>
     
      <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
          <span class="btn btn-primary">Hala</span> Talent
        </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active ">
          <Link className="nav-link" to="/">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
          </Link>
          </li>
          <li className="nav-item  ">
          {/* <Router>
           <Link className="nav-link" to="/userProfile" >
           <i className="material-icons">person</i>
              <p>User Profile</p>
           </Link>
           <Route path='/userProfile' exact><UserProfile/></Route>
         </Router> */}
            <Link className="nav-link" to="/UserProfile">
              <i className="material-icons">person</i>
              <p>User Profile</p>
              </Link>
          </li>
         
        
         
          <li className="nav-item" >
          <Link className="nav-link" to="/CompanyListing">
              <i className="material-icons">group</i>
              <p>Company Listing</p>
            </Link>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./map.html">
              <i className="material-icons">favorite</i>
              <p>Comppany Wishlist</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
         
         
        </ul>
      </div>
    </div>
      </div>
    );
  }
  
  export default SideBar;
  