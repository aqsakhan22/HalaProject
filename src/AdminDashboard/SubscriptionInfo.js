import React from 'react';
import identiti from '../assets/img/logo/identiti.png'
import botify from '../assets/img/logo/botify.PNG'
function Subscription() {

return(
    <div className="Subscription">
<table  class="table" class="table table-hover">
  <thead style={{backgroundColor:"purple"}} class="black white-text">
    <tr>
      <th style={{color:"white"}} scope="col">Company Name</th>
      <th style={{color:"white"}} scope="col">Subscription Plan</th>
      <th style={{color:"white"}} scope="col">Subscription Date</th>
      <th style={{color:"white"}} scope="col">Subscription Expiry Date</th>
      <th style={{color:"white"}}scope="col">Inactive/Active</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
<img src={identiti} style={{width:"40px"}}/> <span>
    Identiti
</span>

      </th>
      <td style={{color:"black"},{fontWeight:"bold"}}>Monthly $600</td>
      <td style={{color:"black"},{fontWeight:"bold"}}>21-04-2020</td>
      <td style={{color:"black"},{fontWeight:"bold"}}>21-05-2020</td>
      <td style={{color:"black"},{fontWeight:"bold"}}>
      <div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"  checked  />
  <label style={{color:"black"},{fontWeight:"bold"}} class="custom-control-label" for="defaultUnchecked">Active</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" /> 
  <label style={{color:"black"},{fontWeight:"bold"}} class="custom-control-label" for="defaultChecked">InActive</label>
</div>
</td>
    </tr>
   
    
  </tbody>
  <tbody>
    <tr>
      <th scope="row">
<img src={botify} style={{width:"40px"}}/> <span>
   Botify
</span>

      </th>
      <td style={{color:"black"},{fontWeight:"bold"}}>Annually $1000</td>
      <td style={{color:"black"},{fontWeight:"bold"}}>21-04-2020</td>
      <td style={{color:"black"},{fontWeight:"bold"}}>21-04-2021</td>
      <td>
      <div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultUnchecked1" name="defaultExampleRadios1"  checked  />
  <label style={{color:"black"},{fontWeight:"bold"}} class="custom-control-label" for="defaultUnchecked">Active</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" /> 
  <label style={{color:"black"},{fontWeight:"bold"}} class="custom-control-label" for="defaultChecked">InActive</label>
</div>  
</td>
    </tr>
   
    
  </tbody>
</table>




    </div>
)


}
export default Subscription