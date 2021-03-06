import React from 'react';

import sidebar1 from './assets/img/sidebar-1.jpg'
import UserProfile from './UserProfile/UserProfile'

import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'


function SideBar() {
  return (
    <div className="App">
        <div className="sidebar" data-color="purple" data-background-color="white" data-image={sidebar1}>
    
      <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
          Creative Tim
        </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="./dashboard.html">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item ">
         {/* {User profile Link} */}
         <Router>
           <Link className="nav-link" to="/userProfile" > 
           <i className="material-icons">person</i>
              <p>My Profile</p>
           </Link>
           <Route path='/userProfile' component={UserProfile}/>
         </Router>
            {/* <a className="nav-link" href='./user.html'>
              <i className="material-icons">person</i>
              <p>User Profile</p>
            </a> */}
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./tables.html">
              <i className="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./typography.html">
              <i className="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./icons.html">
              <i className="material-icons">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./map.html">
              <i className="material-icons">location_ons</i>
              <p>Maps</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./rtl.html">
              <i className="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li>
          <li className="nav-item active-pro ">
            <a className="nav-link" href="./upgrade.html">
              <i className="material-icons">unarchive</i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
     
    </div>
  );
}

export default SideBar;
