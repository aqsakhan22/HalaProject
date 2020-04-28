import React from 'react';
import CompanySidebar from './CompanySideBar'
import CompanyNav from './CompanyNav'
import CompanyContent from '../CandidateProfile/CompanyContent'
import CompanyFooter from './CompanyFooter'

function CompanyProfile() {
    return (
      <div className="CompanyProfile">
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
  
  export default CompanyProfile;
  