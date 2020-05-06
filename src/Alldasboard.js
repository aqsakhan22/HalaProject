import React from 'react';
import TalentDashboard from './Main/Main'
import EmployeeDasboard from './EmployerDashboard/Employee'
import AdminDashboard from './AdminDashboard/Admin'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function Alldashboard() {
    return(
        <div className="Alldashboard">

<Router>

    <Switch>

    <Route path="/Talent"><TalentDashboard/></Route>
    <Route path="/Employee"><EmployeeDasboard/></Route>
    <Route path="/Admin"><AdminDashboard/></Route>5
    </Switch>

</Router>


        </div>
    )








}
export default Alldashboard;