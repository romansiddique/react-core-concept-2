import './App.css'
import Counter from './Count'
import Batsman from './Batsman'
function App() {
  const headingStyle = {
    color: 'red'
  }

  return (
    <>
      <h1 style={headingStyle}>React Core Concept Part - 2</h1>
      <Counter></Counter>
      <Batsman></Batsman>
    </>
  )
}
export default App
