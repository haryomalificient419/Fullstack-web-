/*
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
*/

/*
const App = () => {
  const [ counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <p> rendering...{counter} </p>
    </div>
  )
}
*/

import { useState } from 'react'

//Event handler
const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
        <button onClick={increaseByOne}>
          Add counter
        </button>
        <button onClick={setToZero}> 
          zero
        </button>
    </div>
  )
}
export default App
