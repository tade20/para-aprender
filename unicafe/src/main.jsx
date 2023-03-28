import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const StaisticsLine = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.value}</p>
    </div>
  )
}

const Staistics = (props) => {
  const total = props.good + props.bad + props.neutral
  const average = (props.good - props.bad) / total
  const positive = props.good * (100 / total)
  if (total === 0) {
    return ('No feedback given')
  }
  return (
    <div>
      <StaisticsLine text='good' value={props.good} />
      <StaisticsLine text='neutral' value={props.neutral} />
      <StaisticsLine text='bad' value={props.bad} />
      <StaisticsLine text='total' value={total} />
      <StaisticsLine text='average' value={average} />
      <StaisticsLine text='positive' value={positive} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>Staistics</h2>
      <Staistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
