import{ React ,useState }from 'react'
import "./home.css"

function Home() {
  const [frequency, setFrequency] = useState("");
  const [name, setName] = useState("");
  const [options, setOptions] = useState("");
  const [amount, setAmount] = useState("");
  // const [weekend, setWekeend] = useState("");
  const [openOption, setOpenOption] = useState(false);

  


  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
    setOptions("");
  
  };

  const handleAmount = (e)=>{
    setAmount(e.target.value)
  }
  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleOptionsChange = (e) => {
    setOptions(e.target.value);
  }

  // const handleWeekend =(e)=>{
  //   setWekeend(e.target.value)
  // }

  const handleSubmit=(event)=>{
    event.preventDefault()
    alert("submited")
  }
  
  return (
    <div className='goalContainer'>
      <h2> Saving Goal App</h2>
  <form onSubmit={handleSubmit}>
     <div className='containerItems'>
      <div className="goalItems">
        <label htmlFor='name'>Name</label>
        <input type="text"
         className="input" 
         placeholder='enter your name'
         name='name' id='name' 
         value={name}
         onChange={handleName}
         />
      </div>
      <div className="goalItems">
        <label htmlFor='amount'>Amount</label>
        <input type="number"
        placeholder='enter the amount'
         className="input" 
         name='amount' id='amount' 
         value={amount}
         onChange={handleAmount}/>
      </div>
      <div className="goalItems">
      <select  className='input' value={frequency} onChange={handleFrequencyChange}>
      <option value="">Select Frequency</option>
        <option value="Daily" onClick={()=>setOpenOption(!openOption)}>Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
      {frequency === "Daily" ? (
           <><select  className='input' value={options} disabled={frequency === ""} onChange={handleOptionsChange} >
           <option key="">Select saving option</option>
            <option key="saveDaily">Save daily</option>
            <option key="excludeWeekends">Exclude weekends</option>
            </select>
        </>
        ):<div></div>}
     </div>
     <div className="goalItems">
      <button  type='submit' className='submitBtn'>Add Goal</button>
      </div>
    </div>
    </form>
    </div>
  )
}

export default Home
