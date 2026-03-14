import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1)

    }

  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)

    }

  }


  return (
    <> {counter}
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
