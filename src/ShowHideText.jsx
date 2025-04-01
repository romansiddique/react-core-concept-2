import { useState } from "react"

export default function ShowHideText(){
  const [isVisible , setIsVisible] = useState(false)
  console.log(isVisible)
  function handleClick (){
    const newValue = !isVisible;
    setIsVisible(newValue)
  }
  return(
    <div className="card">
      <h1>Show And Hide Text</h1>
      {
          isVisible && <h2>Hello React Learner</h2>
        }
      <button onClick={handleClick}>
        {isVisible ? "Hide" : "show"} Text
      </button>
    </div>
  )
}