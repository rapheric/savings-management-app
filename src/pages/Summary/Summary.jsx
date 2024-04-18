import React from 'react'
import "./summary.css"

function Summary() {
  return (
    <div>
        <div className="app-container">
    <h2 className='heading'>Summary of Transactions</h2>
    <table>
        <thead>
            <tr>
                <th>Date saved</th>
                <th>Saving goal</th>
                <th>Amount saved </th>
                <th>Total savings</th>
            </tr>
        </thead>
        <tbody>
           <tr>
              <td>1/1/2024</td>
              <td>Fees</td>
              <td>ksh 1000</td>
              <th>ksh 1000</th>
         </tr>    
         <tr>
              <td>1/2/2024</td>
              <td>Buying a car</td>
              <td>ksh 6000</td>
              <th>ksh 6000</th>
         </tr> 
         <tr>
              <td>2/3/2024</td>
              <td>Buying a car</td>
              <td>ksh 50000</td>
              <th>ksh 56000</th>
         </tr>         
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Summary