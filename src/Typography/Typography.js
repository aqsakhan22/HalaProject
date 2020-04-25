import React from 'react';
import TypeSidebar from './TypeSidebar'
import TypeNav from './TypeNav'
import TypeContent from './TypeContent'
import Footer from './TypeFooter'
import TypePlugin from './TypePlugin'
function Typography() {
    return (
        <div className="Typography">
        <div class="wrapper ">
       
            <TypeSidebar/>
            <div class="main-panel">

            <TypeNav/>
            <div class="content">

            <TypeContent/>
            </div>
            <Footer/>
            </div>
         

            

        </div>
        <TypePlugin/>
        </div>
    );
  }
  
  export default Typography;
  