import React from 'react';
import SideBar from '../EmployeeSideBar/Sidebar'
import NavBar from '../EmployeeNavBar/NavBar'
import MyProfile  from '../EmployeerContent/MyProfile'
import TalentListing from '../EmployeerContent/TalentListing'
import BestMatch from '../EmployeerContent/BestMatch'
import Faqs from '../EmployeerContent/Faqs'
import Footer from '../EmployeerContent/Footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import TalentProfile from '../EmployeerContent/TalentProfile'
import EditProfile from '../EmployeerContent/EditProfile'
import MainDashboard from '../EmployeerContent/MainDashboard'
import ShortList from '../EmployeerContent/ShortList'

function Employee() {
    return (

        <Router>
      <div className="Main">
      <div class="wrapper ">
         
              
    <SideBar/> 
         

<div class="main-panel">
<NavBar/>
<div class="content">
<Switch>
<Route path="/" exact><MainDashboard/></Route>

    <Route path="/MyProfile" exact><MyProfile/></Route>
    <Route path="/TalentListing" exact><TalentListing/></Route>
    <Route path="/BestWishList"><BestMatch/></Route>
    <Route path="/Faqs" exact><Faqs/></Route>
    <Route path="/firsttalent" exact><TalentProfile/></Route>
    <Route path="/editprofile" exact><EditProfile/></Route> 
    <Route path="/talent1profile" exact><TalentProfile/></Route>
    <Route path="/shortlist" exact><ShortList/></Route>
   
</Switch>

</div>
<Footer/>
</div>
          </div>
      </div>
      </Router>
    );
  }
  
  export default Employee;
  