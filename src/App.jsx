
import './App.css'

function App() {
  const headingStyle = {
    color: 'red'
  }
  const handleClick = () =>{
    alert('I am alert');
  }
  function addNumber5(num){
    alert(`after adding 5 the value is :  ${num+5}`)
  }
  return (
    <>
      <h1 style={headingStyle}>React Core Concept Part - 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>addNumber5(5)}>Click Me</button>
    </>
  )
}

export default App
