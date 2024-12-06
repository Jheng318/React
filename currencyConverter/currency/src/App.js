// ''
import { useState, useEffect} from "react";
function App() {

  const [input, setInput] = useState("")
  const [output, setOutput]= useState("")
  const [amount, setAmount] = useState(0)
  const [convertion, setConvertion] = useState(0)
  useEffect(()=>{
    if (input === output) return setConvertion(amount)
    if(amount > 0){
     fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${input}&to=${output}`)
        .then(res => res.json())
        .then(data => {
          setConvertion(data.rates[output]); // Closing the function properly here
        })
        .catch(err => console.error("Error fetching conversion:", err)); // Catch outside the then block
    }
  },[input, output, amount, setConvertion])
  return(
  <div>
    <input type="text" onChange={(e)=>setAmount(e.target.value)}/>
    <select onChange={(e)=>setInput(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e)=>setOutput(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>This is the convertion: {convertion} {output}</p>
  </div>
  )
}

export default App;
