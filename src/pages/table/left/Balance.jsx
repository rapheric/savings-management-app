import React from 'react'
import "./balance.css"

function Balance() {
  return (
    <div>
 <div className="app-container">
    <h2 className='heading'>Amount Left</h2>
    <table>
        <thead>
            <tr>
                <th>savings goal</th>
                <th>Target amount</th>
                <th>Total savings</th>
                <th>Amount left</th>
            </tr>
        </thead>
        <tbody>
           <tr>
              <td>Fees</td>
              <td>ksh 20000</td>
              <td>ksh 10000</td>
              <th>ksh 10000</th>
         </tr>    
         <tr>
              <td>Buying a Car</td>
              <td>ksh 1200000</td>
              <td>ksh 500000</td>
              <th>ksh 700000</th>
         </tr> 
         <tr>
              <td>bulding a house</td>
              <td>ksh 500000</td>
              <td>ksh 300000</td>
              <th>ksh 200000</th>
         </tr>         
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Balance