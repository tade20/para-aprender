import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Statics = (props) => {
  const total = props.good + props.bad + props.neutral
  const average = (props.good - props.bad) / total
  const positive = props.good * (100 / total)
  return (
    <div>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => {
        setBad(bad + 1)
      }}
      >
        bad
      </button>
      <h2>Statics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
