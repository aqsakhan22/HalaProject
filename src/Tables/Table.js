import React from 'react';
import TableSideBar from './TableSideBar'
import TableNavBar from './TableNavBar'
import TableContent from './TableContent'
import Footer from './Footer'
import TablePlugin from './TablePlugin'
function Table() {
    return (
      <div className="Table">
      <div class="wrapper ">
<TableSideBar/>
{/* {start of main panel} */}
<div class="main-panel">
{/* {NavBar} */}
<TableNavBar/>
{/* {end of Nav Bar} */}
{/* {Content} */}
<div class="content">
<TableContent/>

</div>
{/* {End of content} */}

{/* {start of footer} */}

<Footer/>
{/* {end of footer} */}
</div>
{/* {end of main panel} */}
      </div>
      {/* {end of wrapper} */}
      <TablePlugin/>
      </div>
    );
  }
  
  export default Table;
  