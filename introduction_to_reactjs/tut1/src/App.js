const Greetings = (props) =>{
  return(
    <div>
      <p>
        Hello my name is {props.name}, I am  {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const c = 50
  var age = 15
  var name = "haryomalificient419"

  return(
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} + {b} is {a + b}
      </p>
      <p>
        {a} + {b} + {c} is equal to {a + b + c}
      </p>
      <p>
        my name is {name}
      </p>
      <Greetings name="Dola" age={a + b} />
      <Greetings name={name} age={age} />
    </div>
  )
}

export default App
