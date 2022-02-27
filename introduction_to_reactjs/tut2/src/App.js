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
const Display = (props) => (
  <div>
    {props.value}
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
/*
const Display = (props) =>{
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
        <Display counter={counter}/>
        <Button
          onClick={increaseByOne}
          text='plus'
        />
        <Button
          onClick={setToZero}
          text='zero'
        />
        <Button
          onClick={decreaseByOne}
          text='minus'
        />
    </div>
  )
}
*/
export default App
