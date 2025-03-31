import { useState } from "react"

export default function Counter(){
  const [count , setCount] = useState(0);
  const handleCount = () =>{
    let newValue = count + 1;
    setCount(newValue)
  }
  return(
    <div className="card">
      <h1>Count : {count}</h1>
      <button onClick={handleCount} style={{
        border: '2px solid red'
      }}>Add Number</button>
    </div>
  )
}