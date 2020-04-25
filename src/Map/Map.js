import React from 'react';
import MapSideBar from './MapSidebar'
import MapNav from './MapNav'
import MapPlugin from './MapPlugin'

function Map() {
    return (
      <div className="Map">
      <div class="wrapper ">

          <MapSideBar/>
          <div class="main-panel">
              <MapNav/>
              <div id="map"></div>
          </div>
          </div>
          <MapPlugin/>
      </div>
    );
  }
  
  export default Map;
  