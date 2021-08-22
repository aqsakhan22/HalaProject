import React from 'react';
import TalentDashboard from './Main/Main'
import EmployeeDasboard from './EmployerDashboard/Employee'
import AdminDashboard from './AdminDashboard/Admin'
import './App.css'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function Alldashboard() {
    return(
        <div className="Alldashboard">

<Router>

<Route path="/" exact>
         <div className="container panel" >
     <h1>welcome to dashbaord</h1> 
        <div className="row">

          <div className="col colbtn" >
<Link to="/Employee"> <button  type="button" className="btn btn-success" >Employee</button></Link>
         
          </div>
          <div className="col colbtn" style={{marginTop:20,backgroundColor:"#282c34"}} >

       <Link to="/Talent"><button type="button" className="btn btn-success ">Talent</button></Link>   
          </div>
          <div className="col colbtn" style={{marginTop:20,backgroundColor:"#282c34"}}>
<Link to="/Admin">  <button type="button" className="btn btn-success ">Admin</button></Link>
        
          </div>
        </div>
     
        
      </div>
     
    
         </Route>


    <Switch>

    <Route path="/Talent"><TalentDashboard/></Route>
    <Route path="/Employee"><EmployeeDasboard/></Route>
    <Route path="/Admin"><AdminDashboard/></Route>
    </Switch>

</Router>


        </div>
    )








}
export default Alldashboard;