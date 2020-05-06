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
import Subscription from './SubscriptionInfo'
import EmployeeDashboard from './EmployeeDashboard'
import EmployeeMainDashboard from '../EmployeerContent/MainDashboard'
import EmployerProfile from '../EmployeerContent/MyProfile'
import EmployerShortList from '../EmployeerContent/ShortList'
import TalentMainDashboard from './TalentDashboard'
import TalentDashboard from '../Content/MainDashboard'
import TalentProfile from '../Content/UserProfile'
import TalentWishlist from '../Content/Wishlist'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'


function Employee() {
    return (
     
   

        <Router>
          
       
      <div className="Admin">
       
      <div class="wrapper ">
         
              
    <SideBar/> 
         

<div class="main-panel">
<NavBar/>
<div class="content">

<Switch>
<Route path="/Admin" exact><MainDashboard/></Route>
<Route path="/Employeer" exact><Employeer/></Route>
<Route path="/dash" exact><EmployeeDashboard/></Route>
<Route path="/mydashboard" exact><EmployeeMainDashboard/></Route> 
<Route path="/Employerprofile" exact><EmployerProfile/></Route>
<Route path="/Employerwishlist" exact><EmployerShortList/></Route> 
<Route path="/Talent" exact><Talent/></Route>
<Route path="/TalentDashboard" exact><TalentMainDashboard/></Route> 
<Route path="/mytalentdashboard" exact><TalentDashboard/></Route> 
<Route path="/Talentprofile" exact><TalentProfile/></Route> 




   
    <Route path="/shortlist"><TalentShortList/></Route>
    <Route path="/BestMatch"><BestMatch/></Route>
    <Route path="/Faqs" exact><Faqs/></Route>
    <Route path="/subscription" exact><Subscription/></Route>
    
   
    
   
    


{/* {talent} */}



<Route path="/Talentwishlist" exact><TalentWishlist/></Route> 

<Route path="/firsttalent"><TalentProfile/></Route>
<Route path="/talent1profile"><TalentProfile/></Route>

    

    
   
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
  