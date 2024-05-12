import { useState } from 'react'

import './App.css'

function App() {
    const [counter, setCounter] = useState(15)
    // let counter = 15

    const addValue = () => {
        /* batching, cannot fire one by one */
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        /* avoids batching */
        setCounter((prevState) => prevState + 1)
        // setCounter((prevState) => prevState + 1)
        // setCounter((prevState) => prevState + 1)
    }
    const removeValue = () => {
        setCounter((prevState) => prevState - 1)
    }

  return (
    <>
      <h1>React course with Hitesh</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add value</button> {" "}
        <button onClick={removeValue}>Remove value</button>
        <p>footer: {counter}</p>
    </>
  )
}

export default App
