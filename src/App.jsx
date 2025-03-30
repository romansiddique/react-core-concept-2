
import './App.css'

function App() {
  const headingStyle = {
    color: 'red'
  }
  const handleClick = () =>{
    alert('ok');
  }
  function addNumber5(num){
    alert(num+5)
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
