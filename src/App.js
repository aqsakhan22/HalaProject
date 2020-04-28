import React from 'react';

// import './assets/css/materialdashboard.css'
// import './assets/demo/demo.css'
import sidebar1 from './assets/img/sidebar-1.jpg'
// import './assets/css/materialdashboard.min.css'

import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './content'
import Footer from './Footer'
import PopUp from './PopUp'


function App() {
  return (
    <div className="App">
    {/* {Start of wrapoper} */}

      <div class="wrapper ">


{/* sideBar */}


<SideBar/>

    
  {/* end of sideBar */}
   
  {/* MainPanel */}
  <div class="main-panel">
    
  {/* NavBar */}

  <NavBar/>
  {/* End of Nav Bar */}

  {/* {Content} */}
 <div class="content">

  <Content/>
  </div>
 
   {/* {end of Content} */}

   {/* {Footer} */}

   <Footer/>
      {/* {end of Footer} */}
    </div> 
    
      {/* end of MainPnale */}


      </div>
      {/* {PopUp} */}

       
   <PopUp/>
    
       {/* {end of PopUp} */}
    </div>
  );
}

export default App;
