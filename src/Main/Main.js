import React from 'react';
import SideBar from '../SideBar/Sidebar'
import Navbar from '../NavBar/Navbar'
import CompanyListing from '../Content/CompanyListing'
import Footer from '../Footer/Footer'
import UserProfile from '../Content/UserProfile'
import Main1 from './Main1'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import CProfile from '../Content/CProfile'


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
<Route path="/" exact><Main1/></Route>

    <Route path="/CompanyListing" exact><CompanyListing/></Route>
    <Route to="/UserProfile" exact><UserProfile/></Route>
    {/* <Route to="/CProfile" exact><CProfile/></Route>
    <Route to="/identiti" ><CProfile/></Route> */}
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
  