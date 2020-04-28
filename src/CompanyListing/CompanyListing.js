import React from 'react';
import CompanySidebar from './CompanySideBar'
import CompanyNav from './CompanyNav'
import CompanyContent from './CompanyContent'
import CompanyFooter from './CompanyFooter'
function CompanyListing() {
    return (
      <div className="CompanyListing">
      

      <div class="wrapper ">
<CompanySidebar/>
<div class="main-panel">
<CompanyNav/>
<div class="content">
<CompanyContent/>
</div>
<CompanyFooter/>
</div>
          </div>
      </div>
    );
  }
  
  export default CompanyListing;
  