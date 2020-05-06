import React from 'react';
import SideBar from '../EmployeeSideBar/Sidebar'
import NavBar from '../EmployeeNavBar/NavBar'
import MyProfile  from '../EmployeerContent/MyProfile'
import TalentListing from '../EmployeerContent/TalentListing'
import BestMatch from '../EmployeerContent/BestMatch'
import Faqs from '../EmployeerContent/Faqs'
import Footer from '../EmployeerContent/Footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'


import EditProfile from '../EmployeerContent/EditProfile'
import MainDashboard from '../EmployeerContent/MainDashboard'
import ShortList from '../EmployeerContent/ShortList'

// {Talent Profule}
import TalentProfile from '../EmployeerContent/TalentProfile'
import Talent2 from '../EmployeerContent/Talent2'
import Talent3 from '../EmployeerContent/Talent3'
import Talent4 from '../EmployeerContent/Talent4'
import Talent5 from '../EmployeerContent/Talent5'

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
<Route path="/Employee" exact><MainDashboard/></Route>
<Route path="/MyProfile" exact><MyProfile/></Route>
<Route path="/editprofile" exact><EditProfile/></Route> 
<Route path="/TalentListing" exact><TalentListing/></Route>

{/* {Talent Profile} */}
<Route path="/Talent1"><TalentProfile/></Route>
<Route path="/Talent2"><Talent2/></Route>
<Route path="/Talent3"><Talent3/></Route>
<Route path="/Talent4"><Talent4/></Route>
<Route path="/Talent5"><Talent5/></Route>



<Route path="/BestWishList"><BestMatch/></Route>  
<Route path="/shortlist" exact><ShortList/></Route>
<Route path="/Faqs" exact><Faqs/></Route>
    
    
    
    {/* <Route path="/firsttalent" exact><TalentProfile/></Route>
   
    <Route path="/talent1profile" exact><TalentProfile/></Route> */}
    
 
    
   
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
  