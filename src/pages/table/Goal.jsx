import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./goal.css";

function Goal() {
  return (
    <>
    <h2 className='heading'>Saving Goals</h2>
    <div className="app-container">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>frequency</th>
                <th>Amount left</th>
                <th>Summary of Transactions</th>   
            </tr>
        </thead>
        <tbody>
           <tr>
              <td>Fees</td>
              <td>ksh 20000</td>
              <td>daily</td>
              <td>
              <Link to="/Balance" >Amount left</Link>
              </td>
              <td>
              <Link to="/Summary" >Summary of Transactions</Link>
              </td>
         </tr>    
         <tr>
              <td>Buying a Car</td>
              <td>ksh 1200000</td>
              <td>Monthly</td>
              <td>
              <Link to="/Balance" >Amount left</Link>
              </td>
              <td>
              <Link to="/Summary" >Summary of Transactions</Link>
              </td>
         </tr> 
         <tr>
              <td>bulding a house</td>
              <td>ksh 500000</td>
              <td>weekly</td>
              <td>
              <Link to="/Balance" >Amount left</Link>
              </td>
              <td>
              <Link to="/Summary" >Summary of Transactions</Link>
              </td>
         </tr>         
        </tbody>
    </table>
</div>
<button className='Btn'> <Link to="/" >Add new</Link></button>
<Outlet/>
</>
  )
}

export default Goal