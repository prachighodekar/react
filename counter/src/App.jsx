import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const IncreaseValue = () => {
    if(counter < 20){
    setCounter(counter+1)
    }
      
  }
  const DecreaseValue = () => {
    if (counter > 0){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={IncreaseValue}>Increase Value</button>
      <br />
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
