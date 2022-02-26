/*
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
*/

//stateful component
import { useState } from 'react'

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
export default App
