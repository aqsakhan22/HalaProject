import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App'
function Linking() {
    return (
      <div className="Linking">
      <li>
      
                <Router>
                    
                <Link to="/about">about</Link>
                     <h1>hello home</h1>
                     <Route path='/about' exact><App/></Route>
                     </Router>
               
            </li>
      </div>
    );
  }
  
  export default Linking;
  