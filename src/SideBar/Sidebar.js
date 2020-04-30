import React from 'react';
import sidebar1 from '../assets/img/sidebar-1.jpg'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from '../assets/img/logo/halalogo.png'
import '../Styles/StyleBar.css'
// import UserProfile from './UserProfile'
function SideBar() {
    return (
      <div className="SideBar">
      
      <div className="sidebar" data-color="purple" data-background-color="white" data-image={sidebar1}>
     
      <div style={{backgroundColor:"purple"}} className="logo">
          {/* <span class="btn btn-primary">Hala</span> Talent */}
          <img id="logopad" style={{width:"70%"}}  src={logo}/>
        </div>
      <div className="sidebar-wrapper">
        <ul className="nav">

          <li className="nav-item active ">
          <Link className="nav-link" to="/">  
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
          </Link>
          </li>
          
          
          
          
          <li   className="nav-item  ">
    

            <Link  id="btnhover" className="nav-link" to="/UserProfile" >
              <i className="material-icons">person</i>
              <p >My Profile</p>
              </Link>
          </li>
         
        
         
          <li className="nav-item" >
          <Link id="btnhover" className="nav-link" to="/CompanyListing">
              <i className="material-icons">group</i>
              <p>Company Listing</p>
            </Link>
          </li>
          
          <li className="nav-item ">
          <Link id="btnhover" className="nav-link" to="/WishList">
              <i className="material-icons">favorite</i>
              <p>Comppany Wishlist</p>
              </Link>
              
           
          </li>
         
         
          <li className="nav-item ">
          <Link id="btnhover" className="nav-link" to="/Faqs">
              <i className="material-icons">live_help</i>
              <p>FAQs</p>
              </Link>
              
           
          </li>
        </ul>
      </div>
    </div>
      </div>
    );
  }
  
  export default SideBar;
  