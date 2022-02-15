const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const c = 50
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
    </div>
  )
}

export default App
