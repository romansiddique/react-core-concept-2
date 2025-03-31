import { useState } from "react"

export default function Batsman(){
  const [runs , setRuns] = useState(0);
  const [runsTypeSingleCount , setRunsTypeSingleCount] = useState(0)
  const [runsTypeFourCount , setRunsTypeFourCount] = useState(0)
  const [runsTypeSixesCount , setRunsTypeSixesCount] = useState(0)
  function setSingle(){
    const newSingleValue = runs + 1;
    setRuns(newSingleValue)
  }
  function setFour(){
    const newFourValue = runs + 4;
    setRuns(newFourValue)
  }
  function setSix(){
    const newSixValue = runs + 6
    setRuns(newSixValue)
  }
  function setSingleCount (){
    const newValue = runsTypeSingleCount + 1;
    setRunsTypeSingleCount(newValue)
  }
  function setFourCount(){
    const newValue = runsTypeFourCount + 1;
    setRunsTypeFourCount(newValue)
  }
  function setSixCount(){
    const newValue = runsTypeSixesCount + 1;
    setRunsTypeSixesCount(newValue)
  }
  return(
    <>
      <div className="card">
        <h2>Bangladeshi Player</h2>
        <div className="card-under">
          <h1>Count Runs Type</h1>
          <h2>Singles : {runsTypeSingleCount}</h2>
          <h2>Fours : {runsTypeFourCount}</h2>
          <h2>Sixes : {runsTypeSixesCount}</h2>
        </div>
        <h1>Score : {runs}</h1>
        {
          runs >= 50 && <p>You Score is 50</p>
        }

        <button onClick={() => {setSingle(); setSingleCount()}}>Single</button>
        <button onClick={() => {setFour(); setFourCount()}}>Four</button>
        <button onClick={() => {setSix(); setSixCount()}}>Six</button>
      </div>
    </>
  )
}