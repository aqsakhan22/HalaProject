import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProfile from './UserProfile/UserProfile'
import Table from './Tables/Table'
import Typography from './Typography/Typography'
import Map from './Map/Map'
import Notification from './Notification/Notification'
import Linking from './Linking'
import * as serviceWorker from './serviceWorker';
import CompanyListing from './CompanyListing/CompanyListing'
// import CompanyProfile from './CompanyProfile/CompanyProfile'
import Candidate from './Candidate/Candidate'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  CandidateProfile from './CandidateProfile/CompanyProfile'
import CompanyContent from './CompanyListing/CompanyContent';
import Sidebar from './SideBar/Sidebar'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'
import Content from './Content/CompanyListing'
import Main from './Main/Main'
import CProfile from './Content/CProfile'
import CompanyProfile from './Content/CompanyProfile'
import Userprofile from './Content/UserProfile'


ReactDOM.render(
  // <Router><Candidate/></Router>
//  <Router>
//    <Route to="/Company" exact> <CompanyListing/>
//  </Route>
//  <Route to="/CompanyUser" exact> <CandidateProfile/>  
//  </Route>
//  </Router>
    // <Navbar/>
    // <Footer/>
    <Main/>
    
    



  



  
   
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
