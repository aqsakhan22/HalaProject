import React from 'react';

import SideBar from './UserSideBar'
import NavBar from './UserNavBar'
import Content from './UserContent'
import Footer from './UserFooter'
import PopUp from './UserPopUp'
function UserProfile() {
    return (
      <div className="UserProfile">
      {/* {Wrapper} */}

      <div class="wrapper ">
{/* sideBar */}
<SideBar/>
  {/* end of sideBar */}

          {/* MainPanel */}
 <div class="main-panel">
   {/* {NavBar} */}
<NavBar/>
<div class="content">

  <Content/>
</div>
<Footer/>

  {/* {Content} */}

 </div>

          {/*end of MainPanel */}
      </div>
      {/* {end of wrapper} */}
    

      </div>
    );
  }
  
  export default UserProfile;
  