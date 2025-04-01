import { useState } from "react"

export default function CounterApp(){
  const [num , setNum] = useState(0)

  const handleAdd = () => {
    const newAddValue = num + 1;
    setNum(newAddValue)
  }
  const handleSub = () =>{
    if(num === 0){
      alert("Number can't be less than 0")
    }
    else{
      setNum(num - 1)
    }
  }
  const handleReset = () =>{
    setNum(0)
  }
  return(
    <div className="card">
      <h1>Counter App</h1>
      <h2>Number : {num}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}