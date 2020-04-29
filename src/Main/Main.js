import React from 'react';
import SideBar from '../SideBar/Sidebar'
import Navbar from '../NavBar/Navbar'
import CompanyListing from '../Content/CompanyListing'
import Footer from '../Footer/Footer'
import UserProfile from '../Content/UserProfile'
import Main1 from './Main1'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import CProfile from '../Content/CProfile'
import Dashboard from '../Content/Dashboard'
import Faqs from '../Content/FAQS'
import MainDashboard from '../Content/MainDashboard'

function Main() {
    return (

        <Router>
      <div className="Main">
      <div class="wrapper ">
         
              
          <SideBar/>
         

<div class="main-panel">
<Navbar/>
<div class="content">
<Switch>
<Route path="/" exact><MainDashboard/></Route>

    <Route path="/CompanyListing" exact><CompanyListing/></Route>
    <Route path="/UserProfile" exact><UserProfile/></Route>
    <Route path="/editprofile"><Dashboard/></Route>
    <Route path="/CProfile" exact><CProfile/></Route>
    <Route path="/identiti" ><CProfile/></Route>
    <Route path="/WishList"><CompanyListing/></Route>
    <Route path="/Faqs"><Faqs/></Route>
</Switch>

</div>
<Footer/>
</div>
          </div>
      </div>
      </Router>
    );
  }
  
  export default Main;
  