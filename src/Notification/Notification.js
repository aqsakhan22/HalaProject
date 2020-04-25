import React from 'react';
import NotiSideBar from './NotiSideBar'
import NotiNav from './NotiNav'
import NotiContent from './NotiContent'
import Footer from './Footer'
import NotiPlugin from './NotiPlugin'
function Notification() {
    return (
      <div className="Notification">
      
      <div class="wrapper ">

          <NotiSideBar/>
          <div class="main-panel">
              <NotiNav/>
              <div class="content">
<NotiContent/>
              </div>
<Footer/>
          </div>
          </div>
          <NotiPlugin/>
      </div>
     
    );
  }
  
  export default Notification;
  