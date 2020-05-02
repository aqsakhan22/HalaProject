import React from 'react';

import SideBar from './AdminSidebar'
import NavBar from './AdminNavbar'
import MainDashboard from './MainDashboard'
import Employeer from './Employeer'
import Talent from './Talent'
import TalentShortList from './TalentShortlist'
import BestMatch from './BestMatch'
import Faqs from './Faqs'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'


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

    <Route path="/Employeer " exact><Employeer/></Route>
    <Route path="/Talent" exact><Talent/></Route>
    <Route path="/shortlist"><TalentShortList/></Route>
    <Route path="/BestMatch"><BestMatch/></Route>
    <Route path="/Faqs" exact><Faqs/></Route>
    
   
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
  